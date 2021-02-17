import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import UsersTable from "../../components/UsersTable/UsersTable";
import { getUsersData, searchUsers, sortUsers } from "../../redux/actions/users.actions";
import styles from './HomePage.module.scss';

const HomePage = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state: any) => state.users)
    
    useEffect(() => {
        dispatch(getUsersData())
    }, [])
    
    const onSearchChange = useCallback((val: string) => {
        dispatch(searchUsers(val)); 
    }, []);

    const onSortHandler = (obj: {sortBy: string, sortDir: string}) => {
        dispatch(sortUsers(obj))
    }

   return (
       <div className={styles.container}>
           <SearchBar onSearch={onSearchChange} />
           <UsersTable users={users} onSort={onSortHandler}/>
       </div>
   )

}
export default HomePage;
