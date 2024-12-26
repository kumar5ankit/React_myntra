import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";


export const Header = () => {
  return (
    <div class="main"><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://tse4.mm.bing.net/th?id=OIP.te86PFl36qpw7_6NH44ecwHaHa&pid=Api&P=0&h=180" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">MEN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">WOMEM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">KIDE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">HOME & LIVING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">BEAUTY</a>
          </li><li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">STUDIO</a>
          </li>

          <form class="serach d-flex">
          <input class="form-control me-2" type="search" placeholder="Search for product brand and more" aria-label="Search" />
        </form>
        
          
        </ul>
        
        <div className='d-flex'>
          <div className="icon">
            <FaUser />
            <h5>profile</h5>
          </div>  
          

          <div className="icon">
          <FaHeart />
          <h5>Wishlist</h5>
          </div>  

          <div className="icon">
          <IoBag />
            <h5>Bag</h5>
          </div>  
        </div>


      </div>
    </div>
    
  </nav>
 
  </div>
  
  )
}
