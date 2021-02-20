import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal/Modal'
import request from '../helper/request';
import { StoreContext } from '../store/StoreProvider';

const CoursePopup = ({
    authors =[], 
    hidePopup,
    isEditMode = true,
    isOpenPopup,
    id,
    img='',
    price =0,
    title =''
    }) => {
const[formAuthors,setFormAuthors] = useState(authors);
const[formAuthor,setFormAuthor] = useState('');
const [formUrl,setFormUrl]=useState(img);
const [formPrice,setFormPrice]=useState(price);
const [formTitle,setFormTitle]=useState(title);


const {setCourses} = useContext(StoreContext);

const handleOnChangeAuthor =(e)=>setFormAuthor(e.target.value);
const handleOnChangeUrl =(e)=>setFormUrl(e.target.value);
const handleOnChangePrice =(e)=>setFormPrice(e.target.value);
const handleOnChangeTitle =(e)=>setFormTitle(e.target.value);

const handleOnSubmit = async(e) =>{
    e.preventDefault()

    const courseObj ={
        authors: formAuthors,
        id,
        img: formUrl,
        price: Number(formPrice),
        title:formTitle,
    };

    if(isEditMode){
        const{data,status}= await request.put('/courses',courseObj);

        if(status === 202){
            setCourses(data.courses)
        }
    }else{
        const{data,status}= await request.post('/courses',courseObj);

        if(status === 201){
            setCourses(data.courses)
        }
    }
    hidePopup()
}
const addAuthor = (e) =>{
    e.preventDefault()
    setFormAuthors(prev=>[...prev,formAuthor])
    setFormAuthor('')
}

const deleteAuthor = (e) =>{

    const authorToDelete = e.target.dataset.author;
    setFormAuthors(prev => prev.filter(author=> author !== authorToDelete));
}

const authorsElements = formAuthors.map(author => (<li key={author}><p>{author}</p> <button data-author={author} onClick={deleteAuthor}>Usuń</button></li>))


const correctLabel = isEditMode ? 'Aktualizuj kurs' : 'Utwórz kurs' ;
    return (
        <Modal  isModalOpen={isOpenPopup} handleOnClose={hidePopup}>
        <StyledForm method='post' onSubmit={handleOnSubmit}>
           
            <div className="row" >
                <label> Autor:
                    <input type="text" value={formAuthor} onChange={handleOnChangeAuthor}/>
                    <button onClick={addAuthor}>Dodaj autora</button>
                </label>
            </div>
            <div className="row">
                <label> Obrazek url:
                    <input type="text" value={formUrl} onChange={handleOnChangeUrl}/>
                </label>
            </div>
            <div className="row">
                <label> Cena
                    <input type="number" value={formPrice} onChange={handleOnChangePrice}/>
                </label>
            </div>
            <div className="row">
                <label> Tytuł:
                    <input type="text" value={formTitle} onChange={handleOnChangeTitle}/>
                </label>
            </div>
            <div className="row">
        <button type='submit' >{correctLabel}</button>
        <button type='button' onClick={hidePopup}>Anuluj</button>
            </div>
        </StyledForm>
        <p>Lista Autorów</p>
        <ul>
       { authorsElements}
        </ul>
        </Modal>
    )
}

const StyledForm = styled.form`
.validate{
    color:red;
    margin-bottom:10px;
}
.row{
    margin-bottom:20px;
    input{
        border:none;
        background-color: #ddd;
        padding:0.5em 1em;
        border-radius:10px;
    }
    button{
        padding:0.7em 1em;
        border:none;
        background:#ddd;
        border-radius:10px;
        margin-right:20px;
    }
}
`

export default CoursePopup
