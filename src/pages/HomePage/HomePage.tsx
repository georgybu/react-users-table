import { useCallback } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import UsersTable from "../../components/UsersTable/UsersTable";
import styles from './HomePage.module.scss'
// import { dispatch } from "../../redux/store";

const HomePage = () => {

    const onSearchChange = useCallback((val: string) => {
        console.log('onSearchChange val: ', val);
        // dispatch(searchUsers(val)); //TODO: redux;
    }, []);

   return (
       <div className={styles.container}>
           <SearchBar onSearch={onSearchChange} />
           <UsersTable/>
       </div>
   )

}

export default HomePage;