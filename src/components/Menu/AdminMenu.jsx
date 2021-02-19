import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const AdminMenu = () => {
    return (
        <>
        <StyledP>Panel Administratora</StyledP>
        <StyledNav>
            <ul>
                <li>
                    <Link to='/menage-courses'>Zarządzanie kursami</Link>
                </li>
            </ul>
        </StyledNav>
        </>
    )
}
const StyledP = styled.p`
padding:1em 1em;
font-weight:bold;
color:#96bff5;
`


const StyledNav = styled.nav`
margin-top:20px;
ul{
    list-style:none;
}
a{
    display: block;
    width:100%;
    text-decoration:none;
    color:white;
    padding:0.7em 1em;
}
a:hover{
    background-color: #0e38b4;
}
`
export default AdminMenu
