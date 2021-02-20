import React, { useContext, useState } from 'react'
import request from '../helper/request';
import { StoreContext } from '../store/StoreProvider';
import CoursePopup from './CoursePopup';

const CoursesDetail = (props) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const {setCourses} = useContext(StoreContext)
    const{id , title} = props;


    const handleShowPopup = () =>setIsOpenPopup(true)
    const handleHidePopup = event =>{
        if(event){
            event.preventDefault()
        }
        setIsOpenPopup(false) }

const handlerDeleteCourse = async ()=>{

    try {
        const{status} = await request.delete(`/courses/${id}`)
        if(status === 200){
            setCourses(prev => prev.filter(course => course.id !== id))
        }
    } catch (error) {
        console.warn(error)
    }
}



    return (
     <details>
         <summary>{title}</summary>
<button onClick ={handleShowPopup}>Edytuj</button>
<button onClick = {handlerDeleteCourse}>Usuń</button>
<CoursePopup isOpenPopup={isOpenPopup} hidePopup={handleHidePopup} {...props}/>
     </details>
    )
}

export default CoursesDetail
