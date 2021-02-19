import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../store/StoreProvider'
import Course from '../components/Course'

const Courses = () => {
    const {courses} = useContext(StoreContext)

    const coursesElement = courses.map(course=> <Course key={course.id} course = {course} />  )

    return (
      <StyledCourses>
         <h2 className='title'> Wszystkie kursy</h2>
         <ul className='list'>
         {coursesElement}
         </ul>
       
      </StyledCourses>
    )
}

const StyledCourses = styled.section`
flex-grow:1;
display: flex;
flex-direction:column;
.title{
    text-align: center;
    margin-top:20px;
    margin-bottom:20px;
}
.list{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:25px;
}

`
export default Courses
