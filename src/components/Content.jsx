import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { StoreContext } from '../store/StoreProvider'


import Courses from '../pages/Courses'
import UserCourses from '../pages/UserCourses'
import AdminPanel from '../pages/AdminPanel'

const Content = () => {
    const {user} = useContext(StoreContext)

    const ADMIN_TYPE = 1

    const isUserLogged = Boolean(user)
    const isAdmin = user?.accessLevel === ADMIN_TYPE

    return (
        <StyledContent>
            <Switch>
                <Route exact path='/' render={()=><Courses/>} />
                { isUserLogged && <Route exact path='/my-courses' render={()=><UserCourses/>} />}
                { isAdmin && <Route exact path='/menage-courses' render={()=><AdminPanel/>} />}
                <Redirect to='/'/>
            </Switch>
        </StyledContent>
    )
}


const StyledContent = styled.main`

padding:20px;
margin: 0 auto;
max-width:1355px;
flex-grow:1;
`

export default Content
