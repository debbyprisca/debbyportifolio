import React from 'react';
import { BiHome,BiMessage,BiSolidReport,BiStats,BiTask,BiBookAlt, BiHelpCircle} 
from 'react-icons/bi';
import '../styles/sidebar.css';


const Sidebar = () =>{
    return <div className='menu'>
        <div className='logo'>
            <BiBookAlt className='logo-icon'/>

            
            <h2>EduFlex</h2>
                </div>
        <div className='menu--list'>
            <a href='#' className ='item active'>
                <BiHome className='icon'/>
                Dahboard
            </a>
            
                 <a href='#' className='items'>
                    <BiTask className='icon'/>
                    Assignment
                    </a>
            
                <a href='#' className='items'>
                <BiSolidReport className='icon'/>
                Report
                </a>
        
                <a href='#' className='items'>
                <BiStats className='icon'/>
                Stats
                </a>

                <a href='#' className='items'>
                <BiMessage className='icon'/>
                Message
            </a>

                <a href='#' className='items'>
                <BiHelpCircle className='icon'/>
                Help
                </a>


    
    
    </div>
    </div>

};

export default Sidebar;