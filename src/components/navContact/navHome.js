import React from "react";

import './navHome.css'

let NavHome=()=>{


    return(
        <>
        <div className="container shadow">
           <div className="row p-2 d-flex justify-content-between h-5">
               <div className="col-md  home_menue_card ">
               <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-1.jpg" alt="" width={'100%'}></img>
               </div>

              <div className="home_menue_content mt-3">
                    <h5 className="home_menue_title"> Electronics</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                        <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-2.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Fashion</h5>
               </div>
               </div>


               <div className="col-md  home_menue_card">
               <div className="home_menue_img shadow">
                    <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-3.jpg" alt="" width={'100%'}></img>
               </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Beauty</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                      <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-4.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Jewellery</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-5.jpg" alt="" width={'100%'}></img>
                   </div>               
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Grocery</h5>
               </div>
               </div>
           </div>
        </div>
        </>
    )
}
export default NavHome