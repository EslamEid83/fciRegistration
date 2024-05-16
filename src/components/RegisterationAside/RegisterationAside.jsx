
import "./RegisterationAside.scss";
import React, { useContext } from 'react'
import { $RegisterationAsideTabNo } from "../../store";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Menu } from "../Context/MenuContext";
import { WindowSize } from "../Context/WindowContext";

export default function RegisterationAside() {
  const menu =useContext(Menu);
  const WindowContext =useContext(WindowSize);
  const windowSize =WindowContext.windowSize;
  const isOpen = menu.isOpen;
  const[tabNo , setTabNo] =useRecoilState($RegisterationAsideTabNo);
  return (
    <>
    <div style={{position:"fixed" ,
     top:"70px" ,
     left:"0" ,
     width:"100%" ,
     height:"100vh",
     zIndex:"2",
     backgroundColor:"rgb(0 0 0 / 49%)",
     display: windowSize < "768" && isOpen ? "block" : "none",
    }}></div>
    <div className="sideBar col-3" style={{
      left : windowSize < "768" ? (isOpen ? 0 : "-100%"):0 ,
      display: windowSize < "768" ? (isOpen? "block" :"none"):"block",
      position : windowSize < "768" ? "fixed": "sticky",
    }}>
      <div className="col-12 sideBarElements">
          <NavLink className="col-12 navLinkElement"  onClick={()=>{setTabNo(1)}}>Student Informations</NavLink>

          <NavLink className="col-12 navLinkElement"  onClick={()=>{setTabNo(2)}}>Registeration Table</NavLink>

          <NavLink className="col-12 navLinkElement"  onClick={()=>{setTabNo(3)}}>Your Registeration</NavLink>
      </div>
    </div>
    </>
  )
}
