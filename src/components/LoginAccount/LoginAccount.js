import {useState} from 'react'

import * as authService from '~/services/authService'
import classNames from "classnames/bind";

import styles from './LoginAccount.module.scss';
const cx = classNames.bind(styles)

function LoginAccount() {
    const [email, setGmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const handleSubmit =async(e)=>{
        e.preventDefault()
        setErrorMessage('')
        try {
            const response = await authService.login({email, password})
            console.log(response)
        } catch (error) {

            setErrorMessage('Thông tin đăng nhập không chính xác')
            console.log(1)
        }

       
    }
    return ( 
        <div className={cx('wrapper')}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e)=>{setGmail(e.target.value)}}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                {!!errorMessage &&( <p>{errorMessage}</p>)}
                <button>Submit</button>
            </form>

        </div>
     );
}

export default LoginAccount;