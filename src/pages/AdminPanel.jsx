import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import CoursePopup from '../components/CoursePopup'
import CoursesDetail from '../components/CoursesDetail'
import { StoreContext } from '../store/StoreProvider'

const AdminPanel = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const {courses} = useContext(StoreContext)

    const coursesElement = courses.map(course => <CoursesDetail key={course.id} {...course} />)

    const handleShowPopup = () =>setIsOpenPopup(true)
    const handleHidePopup = (event) =>{
        if(event){
            event.preventDefault()
        }
        setIsOpenPopup(false) }

    return (
        <StyledAdminPanel>
            {coursesElement}
            <button onClick={handleShowPopup}>Dodaj nowy kurs</button>
            <CoursePopup  isEditMode={false} isOpenPopup={isOpenPopup} hidePopup={handleHidePopup}/>
        </StyledAdminPanel>
    )
}

const StyledAdminPanel = styled.section`

`


export default AdminPanel
