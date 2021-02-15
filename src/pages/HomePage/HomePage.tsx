import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import UsersTable from "../../components/UsersTable/UsersTable";
import { getUsersData, searchUsers } from "../../redux/actions/users.actions";
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

   return (
       <div className={styles.container}>
           <SearchBar onSearch={onSearchChange} />
           <UsersTable users={users}/>
       </div>
   )

}
export default HomePage;
