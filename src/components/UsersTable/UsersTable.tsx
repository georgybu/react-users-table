import { useHistory } from "react-router-dom";
import { TableColumn, UsersData } from "../../interfaces/core.interfaces";
import columnsConfig from "./UsersTable.config";
import styles from './UsersTable.module.scss';

interface UsersTableProps {
    users: UsersData[]
}

const UsersTable = ({users}: UsersTableProps) => {
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
                        <th key={idx}>{column.title}</th>
                    ))}
                    </tr>
                </thead>
                <tbody >
                        {(users || []).map((user: any) => (
                        <tr key={user.id} onClick={() => onRowClick(user)}>
                            {columnsConfig.map((column: TableColumn, idx: number) => (
                            <td key={idx}>{user[column.fieldName]}</td>
                            ))}
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable;