import "./SystemUserPage.scss";
import TopBar from "../../components/TopBar/TopBar";
import React from 'react';
import SideBar from "../../components/SideBar/SideBar";
import MainWorkingArea from "../../components/MainWorkingArea/MainWorkingArea";

export default function SystemUserPage() {
  return (
    <>
    <div className="col-12 systemUserPage">
    <TopBar/>
    <div className="sideBar_MainWorkingArea col-12">
    <SideBar/>
    <MainWorkingArea/>
    </div>
    </div>
    </>
  )
}
