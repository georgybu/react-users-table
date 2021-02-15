import styles from './Auth.module.scss';
import { useForm } from "react-hook-form";
import {isEmpty} from 'lodash';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/login.actions';
import {emailPattern} from '../../utils/patterns';


const Auth = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({mode: 'onChange'}); 
    
    const onSubmit = (data:any) => {
        dispatch(login(data));
    };
    
    return (
        <div className={styles.container}>
            <form className={styles.userForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formField}>
                    <input name="email" placeholder="Email" ref={register({ pattern: {value: emailPattern, message: 'Invalid Email'}, required: true })} /> 
                    {errors.email && <span className={styles.error}>{errors.email?.type === 'pattern' ? 'Invalid email.' : 'Email is required.'}</span>}
                </div>
                <div className={styles.formField}>
                    <input name="firstname" placeholder="First name" ref={register({ required: true })} /> 
                    {errors.firstname && <span className={styles.error}>{'First name is required.'}</span>}
                </div>
                <div className={styles.formField}>
                    <input name="lastname" placeholder="Last name" ref={register({ required: true })} />
                    {errors.lastname && <span className={styles.error}>{'Last name is required.'}</span>}
                </div>
                <div className={styles.formField}>
                    <input name="password" placeholder="Password" ref={register({ required: true })} />
                    {errors.password && <span className={styles.error}>{'Password is required.'}</span>}
                </div>
                <input className={styles.btnOk} type="submit" disabled={!isEmpty(errors)} />
            </form>
        </div>
    )
}

export default Auth;