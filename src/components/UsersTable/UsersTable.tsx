import { useHistory } from "react-router-dom";
import { TableColumn, UsersData } from "../../interfaces/core.interfaces";
import columnsConfig from "./UsersTable.config";
import styles from './UsersTable.module.scss';
import arrUp from '../../assets/icons/arrowUp.png';
import arrDown from '../../assets/icons/arrowDown.png';

interface UsersTableProps {
    users: UsersData[],
    onSort: (obj: {sortBy: string, sortDir: string}) => void;
}

const UsersTable = ({users, onSort}: UsersTableProps) => {
    const history = useHistory()
     
    const onRowClick = (user: UsersData) => {
        history.push({
            pathname: `/edit/${user.id}`,
            state: { user: user }
          })
    }

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                    {columnsConfig.map((column: TableColumn, idx: number) => (
                        <th key={idx}>
                            <div className={styles.header}>
                                <div>{column.title}</div>
                                {column.isSortable && 
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <div className={styles.arrow} onClick={() => onSort({sortBy: column.fieldName, sortDir: 'ASC'})}><img width={10} height={10} src={arrUp}/></div>
                                    <div className={styles.arrow} onClick={() => onSort({sortBy: column.fieldName, sortDir: 'DESC'})}><img width={10} height={10} src={arrDown}/></div>
                                </div>
                                }
                            </div>
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody >
                        {users.length ? users.map((user: any) => (
                        <tr key={user.id} onClick={() => onRowClick(user)}>
                            {columnsConfig.map((column: TableColumn, idx: number) => (
                            <td key={idx}>{user[column.fieldName]}</td>
                            ))}
                        </tr>
                        )) : 'Loading data...'}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable;