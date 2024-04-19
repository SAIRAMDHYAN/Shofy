import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap-icons/font/bootstrap-icons.css'
import './navbar.css'

import NavHome from "./navContact/navHome";
let Navbar=()=>{

    return(

        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light border shadow px-4 p-0 px-5">
      <div className="container-fluid">
        <Link to={'#'}> <div classNameName="nav-brand">
                    <img src="https://shofy.botble.com/storage/main/general/logo.png" alt="logo" height={'30px'}/>
                    </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  ps-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  px-2">
            <div class="dropdown">
        <div class="dropdown-btn">Home</div>
        <div class="dropdown-content">
      
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
        </div>
             
            </li>
            <li className="nav-item  px-2">
            <div class="dropdown">
        <div class="dropdown-btn">shop</div>
        <div class="dropdown-content">
      
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
        </div>
  
           
            </li>
            <li className="nav-item  px-2">
              Products
            </li>
            <li className="nav-item px-2">
              Coupons
            </li>
            <li className="nav-item px-2">
              Blog
            </li>
            <li className="nav-item px-2">
              Contact
            </li>
           
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
           
          </ul>
          <div className="d-inline  me-5 search" >
          <form className="d-flex ">          
            <input type="text" placeholder="Search for products..." className=' form-control-lg border-0 pt-3' style={{width:'85%',height:'100%',outline:'none'}}/>
            <button className="btn p-0 m-0 pt-2  border-0" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></button>
            </form>
            </div>
           
            
         
          <div className='m-2'>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M14.8396 17.3319V3.71411" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M19.1556 13L15.0778 17.0967L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M4.91115 1.00056V14.6183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M0.833496 5.09667L4.91127 1L8.98905 5.09667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
             </svg> </div>
          <div  className='m-4'><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg></div>
                                    
          <div  className='m-2'>
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
         </svg>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar