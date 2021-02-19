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
            <UserMenu isUserLogged={Boolean(user)}/>
            {adminMenuComponent}
        </StyledAsideMenu>
    )
}

const StyledAsideMenu = styled.section`
width:200px;
background-color: royalblue;
`

export default AsideMenu
