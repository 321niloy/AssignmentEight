import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
       <div >
        <div className='main'>
            <div className='one'>
                <p>Knowledge Cafe</p>
            </div>
            <div className='two '>
                <a className='ps-3' href="">Home</a>
                <a className='ps-3' href="">Login</a>
                <a className='ps-3' href="">Profile</a>
            </div>
        </div>
        <hr />
        </div>
    );
};

export default Nav;