import "./MainWorkingArea.scss";
import React, { useContext } from 'react'
import Admins from "../Admins/Admins";
import AddAdmin from "../Add&DeleteAdmin/Add&DeleteAdmin.jsx";
import DepartmentsGPA from "../DepartmentsGPA/DepartmentsGPA.jsx";
import EditDepartmentGPA from "../EditDepartmentGPA/EditDepartmentGPA.jsx";
import AddAndDeleteCourse from "../Add&DeleteCourse/Add&DeleteCourse.jsx";
import AllCourses from "../AllCourses/AllCourses.jsx";
import ActiveCourses from "../ActiveCourses/ActiveCourses.jsx";
import Doctors from "../Doctors/Doctors.jsx";
import "../../store/index.js";
import { useRecoilState } from "recoil";
import { $TabNo } from "../../store/index.js";
import { Menu } from "../Context/MenuContext";
import { WindowSize } from "../Context/WindowContext.jsx";

export default function MainWorkingArea() {
const menu =useContext(Menu);
const WindowContext =useContext(WindowSize);
  const windowSize =WindowContext.windowSize;
  const isOpen = menu.isOpen;
    <div className="sideBar col-3"></div>
  const[tabNo , setTabNo] =useRecoilState($TabNo);
  return (
    <div className="MainWorkingArea col-9" 
    // style={{width:isOpen? "100%" :"75%"}}
    style={{
      width : windowSize < "768" ? (isOpen ? "100%" : "100%"):"75%"}}
    >
           {tabNo==1 ? <Admins/> : null}
           {tabNo==2 ? <Doctors/> : null}
           {tabNo==3 ? <AddAdmin/> : null}
            {tabNo==4 ? <DepartmentsGPA/> : null}
            {tabNo==5 ? <EditDepartmentGPA/> : null}
            {tabNo==6 ? <AddAndDeleteCourse/> : null}
            {tabNo==7 ? <AllCourses/> : null}
            {tabNo==8 ? <ActiveCourses/> : null}
    </div>
  )
}
