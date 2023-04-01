import React from 'react';
import './Fristaside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'

const Fristaside = (props) => {
    const {id,name,img,blogtitle,publishdate,athorimg,readtime}=props.datas
    const seconSlide = props.seconSlide;
    const minuteslide  = props.minuteslide;
    console.log(props)
    return (
        <div className='ms-5'>
            <img src={img} alt="" />
           <div className='d-flex '>
                <div className='d-flex align-items-center'>
                <div >
                    <img className='imagesizing rounded-circle' src={athorimg} alt="" />
                </div>
                <div className='ms-3'>
                    <p className='mb-1 fw-bold'>{name}</p>
                    <p>{publishdate}</p>
                </div>

                </div>

                <div className='secounSlide'>
                <p><span>{readtime}minutes</span><span onClick={() => seconSlide(props.datas)}><FontAwesomeIcon icon={faBookmark} /></span> </p>
                </div>

            </div>
            <h3>{blogtitle}</h3>
            <p><span>#programmers</span><span className='ms-2'>#programming</span></p>
            <button onClick={() => minuteslide(props.datas)} className="btn btn-primary mb-5">Mark as Read</button>
        
            
        </div>
    );
};

export default Fristaside;