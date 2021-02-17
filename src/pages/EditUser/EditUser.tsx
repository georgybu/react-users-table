import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UsersData } from '../../interfaces/core.interfaces';
import { getUserById } from '../../redux/actions/users.actions';
import styles from './EditUser.module.scss';

const EditUser = (props: any) => {
    console.log('props:', props);
    const dispatch = useDispatch();
    const userData = useSelector((state: any) => state.users.selectedUser);
    const history: any = useHistory();
    const [userDataLocal, setUserDataLocal] = useState<UsersData | {}>({});
    
    useEffect(() => {
        const { id } = history?.location?.state?.user;
        dispatch(getUserById(id));
    }, [])

    useEffect(() => {
        delete userData['account'];
        delete userData['accountName'];
        setUserDataLocal(userData);
    }, [userData])

    const onChangeInputHandler = (e: any) => {
        setUserDataLocal({...userDataLocal, [e.target.name]: e.target.value});
    }
    
    const updateUser = () => {
        console.log('updateUser');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={() => updateUser()}>
                {Object.entries(userDataLocal).map(([key, value], idx) => {
                    return (
                    <div key={idx} className={styles.row}>
                        <label htmlFor={key}>{key.toUpperCase()}</label>
                        <input id={key}
                            name={key}
                            value={value}
                            onChange={(e) => onChangeInputHandler(e)} />
                    </div>
                    ) 
                })}
                <input className={styles.submitBtn} type="submit" value="Update User"/>
            </form>
        </div>
    )
}

export default EditUser;