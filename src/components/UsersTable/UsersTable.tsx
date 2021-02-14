import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TableColumn, UsersData } from "../../interfaces/core.interfaces";
import { getUsersData } from "../../redux/actions/users.actions";
import columnsConfig from "./UsersTable.config";
import styles from './UsersTable.module.scss';

const UsersTable = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const {users} = useSelector((state: any) => state.users)
    
    useEffect(() => {
        dispatch(getUsersData())
    }, [])
    console.log('users: ', users);
    
    const onRowClick = (user: UsersData) => {
        console.log('onRowClick: ', user);
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
                <tbody>
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