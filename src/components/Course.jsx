import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import request from '../helper/request'
import { StoreContext } from '../store/StoreProvider'

const Course = ({course, isUserContext = false}) => {
 const {user, setUser} = useContext(StoreContext);
 const history = useHistory();
   const authors = course.authors.join(', ');
   const isUserLogged = Boolean(user)

   const handleOnClick = async()=>{
try {
    const {data, status} = await request.patch(
        '/users',
        {
            login: user.login,
            courseId: course.id
        }
    )
    if(status === 202){
        setUser(data.user);
history.push('/my-courses')
    }
} catch (error) {
    console.warn(error)
}
   }

   const shouldBeBuyButtonVisible = isUserLogged && !isUserContext; 
    return (
        <StyledList>
            <img src={course.img} alt={course.title}/>
            <h4 className='title-course'>{course.title}</h4>
            <div className ='info'>
            <p className='price'>Cena kursu: {course.price} zł</p>
            <p  className='authors'>Autorzy: { authors } </p>
            </div>
            { shouldBeBuyButtonVisible && <button onClick={handleOnClick}>Kup ten kurs</button>}
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
button{
    padding:0.8em 2em;
    margin:1em 10px;
    background: #1d46be;
    border:none;
    border-radius:20px;
    color:white;
    font-weight:bold;
}

`
export default Course
