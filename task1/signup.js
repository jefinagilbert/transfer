import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addCurrentUser, addUser } from './actions/actions'
import './styles.css'

function SignUp(){
    const users = useSelector(state=> state.users)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()
    // const history = useHistory()
    useEffect(()=>{
        
    },[])


    function handleCreateAccount(){
        let a = 0
        users.forEach(user=>{
            if(user.email === email){
                a += 1
            }
        })
        if(a == 0){
            if(password === confirmPassword){
                dispatch(addUser({email, password}))
                dispatch(addCurrentUser({email, password}))
            }else{
                console.log("password differs")
            }
        }
        else{
            console.log("Account already exists")
        }
    }

    return(
        <div className="login-main">
            <div className="login-box">
                <div className="login-header">
                    <h2>Sign Up</h2>
                </div>
                <div className="login-input">
                    <label>Email</label>
                    <input className="form-control" value={email} onChange={e=> setEmail(e.target.value)} type="email" />
                </div>
                <div className="login-input">
                    <label>Password</label>
                    <input className="form-control" value={password} onChange={e=> setPassword(e.target.value)} type="password" />
                </div>
                <div className="login-input">
                    <label>Confirm Password</label>
                    <input className="form-control" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)} type="password" />
                </div>
                <div className="login-button">
                    <button className="btn btn-primary" onClick={handleCreateAccount}>Create account</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp