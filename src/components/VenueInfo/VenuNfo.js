  import React from 'react';
  import calender from "../../assets/images/icons/calendar.png";
  import location from "../../assets/images/icons/location.png";
  import Zoom from 'react-reveal/Zoom';
 
 const VenuNfo = () => {
    return (
        
        <div className='bck_black'>
         <div className='center_wrapper'>
          <div className='vn_wrapper'>
            <Zoom duration={500}>
            <div className='vn_item'> 
             <div className='vn_outer'>
                 <div className='vn_inner'>
                     <div className='vn_icon_square bck_red'></div>
                      <div className='vn_icon' style={{background:`url(${calender})`}}></div>
                       <div className='vn_title'>Event Date & Time</div>
                        <div className='vn_desc'>7 Desc 2022, @10.00pm</div>
                  </div>
                </div>
            </div>
        </Zoom>
        <Zoom duration={500} delay={500}>  
         <div className='vn_item'> 
          <div className='vn_outer'>
           <div className='vn_inner'>
            <div className='vn_icon_square bck_yellow'></div>
             <div className='vn_icon' style={{background:`url(${location})`}}></div>
              <div className='vn_title'>Location</div>
               <div className='vn_desc'>Chandigarh, Tagore Theater,Ind</div>
                </div>
                </div>
                </div>
               </Zoom>    
              </div>
             </div>    
            </div>
    );
 };
 
 export default VenuNfo;