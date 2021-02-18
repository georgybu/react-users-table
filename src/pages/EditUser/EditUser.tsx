import {isEmpty, isEqual} from 'lodash';
import {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getUserById, updateUserById} from '../../redux/actions/users.actions';
import styles from './EditUser.module.scss';

const EditUser = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: any) => state.users.selectedUser);
    const history: any = useHistory();
    const [userDataLocal, setUserDataLocal] = useState<any>({});

    useEffect(() => {
        const userId = history?.location?.state?.userId;
        userId && dispatch(getUserById(userId));
    }, [])

    useEffect(() => {
        const data = {...userData};
        delete data['id'];
        delete data['account'];
        delete data['accountName'];
        setUserDataLocal(data);
    }, [userData])

    const onChangeInputHandler = (e: any) => {
        setUserDataLocal({...userDataLocal, [e.target.name]: e.target.value});
    }

    const updateUser = () => {
        if (!isEmpty(userDataLocal)) {
            dispatch(updateUserById(userDataLocal, userData.id));
        }
    }

    const checkIsDisabled = useMemo(() => isEqual(userData, userDataLocal), [userData, userDataLocal]);

    return (
        <div className={styles.container}>
            {Object.entries(userDataLocal).map(([key, value]: any, idx) => {
                return (
                    <div key={idx} className={styles.row}>
                        <label htmlFor={key}>{key.toUpperCase()}</label>
                        <input id={key}
                               name={key}
                               value={value}
                               onChange={(e) => onChangeInputHandler(e)}/>
                    </div>
                )
            })}
            <div className={styles.btnContainer}>
                <button className={styles.submitBtn} disabled={checkIsDisabled} onClick={() => updateUser()}>Update
                    User
                </button>
            </div>
        </div>
    )
}

export default EditUser;
