import "./SideBar.scss";
import React, { useContext, useState } from 'react'
import { $TabNo } from "../../store";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Menu } from "../Context/MenuContext";
import { WindowSize } from "../Context/WindowContext";

export default function SideBar() {
  const menu =useContext(Menu);
  const WindowContext =useContext(WindowSize);
  const windowSize =WindowContext.windowSize;
  const isOpen = menu.isOpen;
  // console.log(isOpen);
  // console.log(windowSize);
  const [btnStateAdmins ,setBtnStateAdmins] = useState(true);
  const [btnStateTeachers ,setBtnStateTeachers] = useState(false);
  const [btnStateNewAdmins ,setBtnStateNewAdmins] = useState(false);
  const [btnStateDepartments ,setBtnStateDepartments] = useState(false);
  const [btnStateNewCourse ,setBtnStateNewCourse] = useState(false);
  const [btnStateAllCourse ,setBtnStateAllCourse] = useState(false);
  const [btnStateActiveCourse ,setbtnStateActiveCourse] = useState(false);
  function handelClick(){
    setBtnStateAdmins(btnStateAdmins => !btnStateAdmins);
    setBtnStateNewAdmins(false)
    setBtnStateDepartments(false)
    setBtnStateNewCourse(false)
    setBtnStateAllCourse(false)
    setbtnStateActiveCourse(false)
    setBtnStateTeachers(false)
    // console.log(btnState);
  }
  function handelClick2(){
    // console.log(btnState);
    setBtnStateAdmins(false);
    setBtnStateNewAdmins(btnStateNewAdmins => !btnStateNewAdmins);
    setBtnStateDepartments(false)
    setBtnStateNewCourse(false)
    setBtnStateAllCourse(false)
    setbtnStateActiveCourse(false)
    setBtnStateTeachers(false)
  }
  function handelClick3(){
    setBtnStateAdmins(false);
    setBtnStateNewAdmins(false);
    setBtnStateDepartments(btnStateDepartments => !btnStateDepartments);
    setBtnStateNewCourse(false)
    setBtnStateAllCourse(false)
    setbtnStateActiveCourse(false)
    setBtnStateTeachers(false)
    // console.log(btnState);
  }
  function handelClick5(){
    setBtnStateNewCourse(false);
    setBtnStateAdmins(false);
    setBtnStateNewAdmins(false);
    setBtnStateDepartments(false)
    setBtnStateNewCourse(btnStateNewCourse => !btnStateNewCourse)
    setBtnStateAllCourse(false)
    setbtnStateActiveCourse(false)
    setBtnStateTeachers(false)
    // console.log(btnState);
  }
  function handelClick6(){
    setBtnStateAllCourse(false);
    setBtnStateAdmins(false);
    setBtnStateNewAdmins(false);
    setBtnStateDepartments(false)
    setBtnStateNewCourse(false)
    setBtnStateAllCourse(btnStateAllCourse => !btnStateAllCourse)
    setbtnStateActiveCourse(false)
    setBtnStateTeachers(false)
    // console.log(btnState);
  }
  function handelClick7(){
    setbtnStateActiveCourse(false);
    setBtnStateAdmins(false);
    setBtnStateNewAdmins(false);
    setBtnStateDepartments(false)
    setBtnStateNewCourse(false)
    setBtnStateAllCourse(false)
    setbtnStateActiveCourse(btnStateActiveCourse => !btnStateActiveCourse)
    setBtnStateTeachers(false)
    // console.log(btnState);
  }
  function handelClick8(){
    setbtnStateActiveCourse(false);
    setBtnStateAdmins(false);
    setBtnStateNewAdmins(false);
    setBtnStateDepartments(false)
    setBtnStateNewCourse(false)
    setBtnStateAllCourse(false)
    setbtnStateActiveCourse(false)
    setBtnStateTeachers(btnStateTeachers=>!btnStateTeachers)
    // console.log(btnState);
  }
  const[tabNo , setTabNo] = useRecoilState($TabNo);
  let toggleClassCheck = btnStateAdmins ? 'activeTab' : '';
  let toggleClassCheck2 = btnStateNewAdmins ? 'activeTab' : '';
  let toggleClassCheck3 = btnStateDepartments ? 'activeTab' : '';
  let toggleClassCheck5 = btnStateNewCourse ? 'activeTab' : '';
  let toggleClassCheck6 = btnStateAllCourse ? 'activeTab' : '';
  let toggleClassCheck7 = btnStateActiveCourse ? 'activeTab' : '';
  let toggleClassCheck8 = btnStateTeachers ? 'activeTab' : '';
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
          <NavLink className={`col-12 navLinkElement ${toggleClassCheck}`}  onClick={()=>{
            setTabNo(1);
            handelClick();
            }}>
            <FontAwesomeIcon className="adminsIcon" icon={faUsers} />Admins</NavLink>
          <NavLink className={`col-12 navLinkElement ${toggleClassCheck8}`}  onClick={()=>{
            setTabNo(2);
            handelClick8();
            }}>
            <FontAwesomeIcon className="adminsIcon" icon={faUsers} />Doctors</NavLink>

          <NavLink className={`col-12 navLinkElement ${toggleClassCheck2}`}  onClick={()=>{setTabNo(3);
            handelClick2();
          }}>
            <FontAwesomeIcon className="adminsIcon" icon={faUserPlus} />New User</NavLink>

          <NavLink className={`col-12 navLinkElement ${toggleClassCheck3}`}  onClick={()=>{setTabNo(4);
            handelClick3();
          }}>Departments</NavLink>
          
          <NavLink className={`col-12 navLinkElement ${toggleClassCheck5}`}  onClick={()=>{setTabNo(6);
            handelClick5();
          }}>
            <FontAwesomeIcon className="adminsIcon" icon={faPlus} /> New Course</NavLink>
          <NavLink className={`col-12 navLinkElement ${toggleClassCheck6}`}  onClick={()=>{setTabNo(7);
            handelClick6();
          }}>All Courses</NavLink>
          <NavLink className={`col-12 navLinkElement ${toggleClassCheck7}`}  onClick={()=>{setTabNo(8);
            handelClick7();
          }}>Active Courses</NavLink>
      </div>
    </div>
    </>
  )
}
