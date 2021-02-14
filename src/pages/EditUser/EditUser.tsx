import { useEffect, useState } from 'react';
import styles from './EditUser.module.scss';


const EditUser = (props: any) => {
    console.log('props:', props);
    const [user, setUser] = useState<any>({});
    useEffect(() => {
        const userData = props?.location?.state.user
        setUser(userData);
    }, []) 
    return (
        <div className={styles.container}>
            <span>{user?.id}</span>
            <span>{user?.firstName}</span>
            <span>{user?.lastName}</span>
            <span>{user?.date}</span>
            <span>{user?.phone}</span>
        </div>
    )
}

export default EditUser;