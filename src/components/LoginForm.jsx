import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import request from '../helper/request'
import { StoreContext } from '../store/StoreProvider'
import Modal from './Modal/Modal'

const LoginForm = ({handleOnClose,isModalOpen}) => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [validateMessage,setValidateMessage] = useState('')

    const {setUser} = useContext(StoreContext);

const handleOnChangeLogin = event =>setLogin(event.target.value)
const handleOnChangePassword = event =>setPassword(event.target.value);
const handleOnCloseModal =event => {
    event.preventDefault();
    handleOnClose()
}

const resetStateOfInput = ()=>{
    setLogin('');
    setPassword('')
    setValidateMessage('')

}


    const validateMessageComponent = validateMessage.length >0 ? <p className="validate">{validateMessage}</p> : null ;

    const handleSubmit = async(e) =>{
e.preventDefault()
const {data ,status} = await request.post('/users', {login, password})

if(status === 200){
    setUser(data.user);
    resetStateOfInput();
    handleOnClose();
}else{
    setValidateMessage(data.message)
}
    }
    useEffect(()=>{
        if(isModalOpen){
            resetStateOfInput()
        }
      
    },[isModalOpen])
    
    return (
        <Modal shouldBeCloseOnOutsideClick={true} isModalOpen={isModalOpen} handleOnClose={handleOnClose}>
<StyledForm method='post' onSubmit={handleSubmit}>
    {validateMessageComponent }
    <div className="row" >
<label> Login:
    <input type="text" value={login} onChange={handleOnChangeLogin}/>
</label>
    </div>
    <div className="row">
    <label> Hasło:
    <input type="password" value={password} onChange={handleOnChangePassword}/>
</label>
    </div>
    <div className="row">
<button type='submit' >Zaloguj</button>
<button type='button' onClick={handleOnCloseModal}>Anuluj</button>
    </div>
</StyledForm>

        </Modal>
      
    )
}

const StyledForm = styled.form`
.validate{
    color:red;
    margin-bottom:10px;
}
.row{
    margin-bottom:20px;
    input{
        border:none;
        background-color: #ddd;
        padding:0.5em 1em;
        border-radius:10px;
    }
    button{
        padding:0.7em 1em;
        border:none;
        background:#ddd;
        border-radius:10px;
        margin-right:20px;
    }
}
`

export default LoginForm
