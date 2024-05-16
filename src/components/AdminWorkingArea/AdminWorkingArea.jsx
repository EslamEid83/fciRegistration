import "./AdminWorkingArea.scss";
import React, { useContext } from 'react'
import DepartmentsGPA from "../DepartmentsGPA/DepartmentsGPA.jsx";
import EditDepartmentGPA from "../EditDepartmentGPA/EditDepartmentGPA.jsx";
import AddAndDeleteCourse from "../Add&DeleteCourse/Add&DeleteCourse.jsx";
import AllCourses from "../AllCourses/AllCourses.jsx";
import ActiveCourses from "../ActiveCourses/ActiveCourses.jsx";
import "../../store/index.js";
import { useRecoilState } from "recoil";
import { $TabNo } from "../../store/index.js";
import { Menu } from "../Context/MenuContext.jsx";
import { WindowSize } from "../Context/WindowContext.jsx";

export default function AdminWorkingArea() {
  const menu =useContext(Menu);
const WindowContext =useContext(WindowSize);
  const windowSize =WindowContext.windowSize;
  const isOpen = menu.isOpen;
  const[tabNo , setTabNo] =useRecoilState($TabNo);
  return (
    <div className="MainWorkingArea col-9" style={{
      width : windowSize < "768" ? (isOpen ? "100%" : "100%"):"75%"}}>
            {tabNo==1 ? <DepartmentsGPA/> : null}
            {tabNo==2 ? <AddAndDeleteCourse/> : null}
            {tabNo==3 ? <AllCourses/> : null}
            {tabNo==4 ? <ActiveCourses/> : null}
    </div>
  )
}
