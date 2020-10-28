import React from "react";
import flag from './flag.png';
import { faCopyright ,faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer1= () => (
    <div className = "footer">
    <div className = "container">
  <div className="row ">

     <div className = "col-6 col-md-3 items ">
     
           <h5 className = "headings align-middle">COMPANY</h5>

           <ul className="list-unstyled text-small ">
              <li><a className="text-muted" href="#blog">About Us</a></li>
              <li><a className="text-muted" href="#pri">Our Team</a></li>
              <li><a className="text-muted" href="#term">Careers</a></li>
              <li><a className="text-muted" href="#blog">Terms of Use</a></li>
              <li><a className="text-muted" href="#pri">Privacy Policy</a></li>
              <li><a className="text-muted" href="#term">Vendors</a></li>
              <li><a className="text-muted" href="#term">Contact Us</a></li>
            </ul>
           
         </div>  
         
         <div className = "col-6 col-md-3 items">
         <h5 className = "headings" >PRODUCT</h5>
          
         <ul class="list-unstyled text-small">
         <li>
             <a class="text-muted" href="#blog">Model A</a></li>
              <li><a class="text-muted" href="#pri">Model B</a></li>
              <li><a class="text-muted" href="#term">Model C</a></li>
              <li><a class="text-muted" href="#blog">Model D</a></li>
              <li><a class="text-muted" href="#pri">Model E</a></li>
              <li><a class="text-muted" href="#term">Accessories</a></li>
              <li><a class="text-muted" href="#term">Warranty</a></li>
            </ul>
         </div>  
         <div className = "col-6 col-md-3 items">
         <h5 className = "headings">SUPPORT</h5>
         <ul class="list-unstyled text-small">
         <li>
             <a class="text-muted" href="#blog">FAQ</a></li>
              <li><a class="text-muted" href="#pri">Live Chat</a></li>
              <li><a class="text-muted" href="#term">Submit A Request</a></li>
              <li><a class="text-muted" href="#blog">Product Help</a></li>
              
            </ul>
         </div>  
         <div className = "col-6 col-md-3 items">
              <h5 className = "headings">SOCIAL</h5>
              <ul class="list-unstyled text-small">
         <li>
             <a class="text-muted" href="#blog">Facebook</a></li>
              <li><a class="text-muted" href="#pri">Instagram</a></li>
              <li><a class="text-muted" href="#term">Twitter</a></li>
              <li><a class="text-muted" href="#blog">YouTube</a></li>
              <li><a class="text-muted" href="#pri">LinkedIn</a></li>
              
            </ul>
         </div>   
  </div>
  </div>
 <div className = "subfooter">
     <div className = "container-fluid companyName ">
         <div className = "row leftPart">
             <div className = "col-sm-12 col-md-6">
             <FontAwesomeIcon icon={faCopyright} /><b > Toroid Technolgies Pvt. Ltd.</b>
             </div>
             <div className = "col-sm-12 col-md-6 rightPart" >
         <b>   Made with <FontAwesomeIcon icon={faHeart} /> Toroid   |  India   </b>  <img src={flag} alt="Logo" className = "flag" />
             </div>
         </div>

     
    
    
        </div>
         
 </div>
 
  </div>
 
);

export default Footer1;