import { useState, useEffect } from "react";
import gelato from "../public/Gelato.png";
import web_logo from "../public/web_logo.png";
import contact_img from "../public/contact_img.svg";
import web_image from "../public/web_image.svg";


const Header = () => {

  return (
    <div className="header">
      {/* Commented block showing original image setup */}
      <div className="logo-container">
        <img className="logo" src={gelato}/>
      </div> 
      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
        <li style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={contact_img} 
              style={{ width: '40px', height: '30px', marginRight: '5px' }} 
            />
            Contact us
          
        </li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
        <img 
              src={web_image} 
              style={{ width: '37px', height: '37px', marginRight: '5px' }} 
            />
            IN/INR
        </li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
        <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNDhweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yek0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJIMXptMTYgMTZjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yeiIvPjwvc3ZnPg==" 
              style={{ width: '40px', height: '30px', marginRight: '5px' }} 
            />
            Cart
        </li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
        <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNDhweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAgMmMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHoiLz48L3N2Zz4=" 
              style={{ width: '40px', height: '30px', marginRight: '5px' }} 
            />
            Sign in
        </li>

        
        <li
          style={{
            backgroundColor: "black",
            color: "white",
            height: "auto", // Adjust the height as needed
            width: "auto", // Adjust the width as needed
            display: "flex", // Optional, to center content if needed
            alignItems: "center", // Optional, to center content vertically if needed
            justifyContent: "center", // Optional, to center content horizontally if needed
            borderRadius:"30px",
            padding:"16px"
          }}
        >
          Sign up for free
        </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Header;
