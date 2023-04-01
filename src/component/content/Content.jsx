import React, { useEffect, useState } from 'react';
import Fristaside from '../fristaside/Fristaside';

import './Content.css'

const Content = () => {
    const[datas,setdata]=useState([]);
    const[bookmarked,setbookmarked]= useState([]);
    const [minute,setminute]=useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setdata(data))
    },[])

    const seconSlide = (product) =>{
    const newCart = [...bookmarked,product]
    setbookmarked(newCart)
    console.log("ki re",bookmarked)
    }

    const minuteslide = (minutes) =>{
    const Newminutes =[...minute,minutes]
    setminute(Newminutes)
   
    }
    
    let total = 0;
    for(const newminute of minute){
        console.log('nnnnnn',newminute.readtime)
        total = total+newminute.readtime;  
    }

    return (
        <div className='Contentcss'>
            <div className='contentOne'>
                {
                    datas.map(data => <Fristaside datas={data} key={data.id} seconSlide={seconSlide} minuteslide={minuteslide}></Fristaside>)
                }
           
            </div>
            <div className='contentTwo  '>
                <div className='bg-light'>
                 <h3 className='text-info p-4'>Total minute: {total}</h3>
                </div>
                <div>
                <h3>BookMarked Blog:{bookmarked.length}</h3>
                
                    <div className='bg-secondary p-4'>
                        {
                         bookmarked.map(bookmark => <div ><p className='bg-white p-3'>{bookmark.blogtitle}</p></div>)
                        }
                    </div>
                
                </div>

            </div>
            
        </div>
    );
};

export default Content;

