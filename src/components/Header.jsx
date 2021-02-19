import React, { useContext ,useState} from 'react'
import styled from 'styled-components'
import{StoreContext} from '../store/StoreProvider'
import LoginForm from './LoginForm'

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const {user, setUser} = useContext(StoreContext)

const handleOnClose = ()=>setIsModalOpen(false)

const handleOnClick = () =>{

    if(Boolean(user)){
        setUser(null)
    }else{
        setIsModalOpen(true);
   
    }
}

    const setPropertyLabel = Boolean(user) ? 'Wyloguj się': 'Zaloguj się'
    return (
       <StyledHeader>
           <div className='logo'>
               {/* <img src="#" alt="Logo"/> */}
               <h1>OzmonDev</h1>
            </div>
            <button onClick={handleOnClick}>{setPropertyLabel}</button>
            <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
       </StyledHeader>
    )
}

const StyledHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position:fixed;
top:0;
left:0;
width:100%;
height:60px;
background-color: royalblue;
color:white;
.logo{
    margin-left:20px;
    display: flex;
}
button{
    padding:0.8em 2em;
    margin:0 2em;
    background: #1d46be;
    border:none;
    border-radius:20px;
    color:white;
    font-weight:bold;
}
`
export default Header
