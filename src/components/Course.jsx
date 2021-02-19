import React from 'react'
import styled from 'styled-components'

const Course = ({course}) => {

   const authors = course.authors.join(', ')
    return (
        <StyledList>
            <img src={course.img} alt={course.title}/>
            <h4 className='title-course'>{course.title}</h4>
            <div className ='info'>
            <p className='price'>Cena kursu: {course.price} zł</p>
            <p  className='authors'>Autorzy: { authors } </p>
            
            </div>
        </StyledList>
    )
}

const StyledList = styled.li`
list-style:none;
display: flex;
flex-direction:column;
background: #ccd3f1;
border-radius:10px;
overflow:hidden;
padding-bottom:10px;
img{
    width:100%;
}
.title-course{
    text-align: center;
    padding:0.5rem;
}
.info{
    margin-left:5px;
    padding:10px;
    .price{
margin-bottom:10px
    }
}

`
export default Course
