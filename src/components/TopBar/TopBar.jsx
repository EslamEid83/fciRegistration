import "./TopBar.scss";
import {$authAtom}from "../../store/index";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react';
import { faArrowRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import { Menu } from "../Context/MenuContext";
import { WindowSize } from "../Context/WindowContext";

export default function TopBar() {
const menu = useContext(Menu);
const setIsOpen = menu.setIsOpen;
const WindowContext =useContext(WindowSize);
  const windowSize =WindowContext.windowSize;
  const isOpen = menu.isOpen;
  const [ authData , setAuthData,userData ] = useRecoilState($authAtom);
  const navigate = useNavigate();

  function handelLogout(){
    setAuthData({
        isAuth:false,
        user: null
      })
      localStorage.removeItem('loggedInUser', JSON.stringify(userData))
    //   console.log(authData);
      navigate('/');
}
  return (
    <div className="topBar col-12">
      <div className="projectName col-6">
        <FontAwesomeIcon className="barIcon" icon={faBars} style={{display: windowSize < "768" ? "block" :"none"}}
         onClick={()=> setIsOpen(prev =>!prev)}/>
        <h2>FCI Registration</h2>
        </div>
      <div className="userName col-6">
        {
          authData.isAuth?(<div className="name"
           style={{display: windowSize < "768" ? "none" :"block"}}>{authData.user.name}</div>):("")
        }
        <Button variant="secondary" size="lg" className="logoutBtn " onClick={handelLogout}>
          Logout
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </Button>
        </div>
    </div>
  )
}

/*
const [ authData , setAuthData ] = useRecoilState($authAtom);
onClick={handelLogout}
*/