import { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../store/StoreProvider'
import AdminMenu from './Menu/AdminMenu'
import UserMenu from './Menu/UserMenu'



const AsideMenu = () => {
    const { user } = useContext(StoreContext)

const ADMIN_TYPE = 1;

const adminMenuComponent = user?.accessLevel === ADMIN_TYPE ? <AdminMenu /> : null

    
    return (
        <StyledAsideMenu>
            <div className="nav-wrapper">
            <UserMenu isUserLogged={Boolean(user)}/>
            {adminMenuComponent}
            </div>
        </StyledAsideMenu>
    )
}

const StyledAsideMenu = styled.section`
position: relative;
width:200px;



.nav-wrapper{
    position: fixed;
    top:60px;
    left:0;
    bottom:0;
    width:200px;
    background-color: royalblue;
}
`

export default AsideMenu
