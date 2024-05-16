import "./RegisterationWorkingArea.scss";
import RegisterationTable from "../RegisterationTable/RegisterationTable.jsx";
import TableOfRegisteration from "../TableOfRegisteration/TableOfRegisteration.jsx";
import StudentInfo from "../StudentInfo/StudentInfo.jsx";
import "../../store/index.js";
import { useRecoilState } from "recoil";
import { $RegisterationAsideTabNo } from "../../store/index.js";
import { useContext } from "react";
import { Menu } from "../Context/MenuContext.jsx";
import { WindowSize } from "../Context/WindowContext.jsx";

export default function RegisterationWorkingArea(){
    const menu =useContext(Menu);
const WindowContext =useContext(WindowSize);
  const windowSize =WindowContext.windowSize;
  const isOpen = menu.isOpen;
    const[tabNo , setTabNo] =useRecoilState($RegisterationAsideTabNo);

    return(
        <div className="MainWorkingArea col-9" style={{
            width : windowSize < "768" ? (isOpen ? "100%" : "100%"):"75%"}}>
            {tabNo==1 ? <StudentInfo/> : null}
            {tabNo==2 ? <RegisterationTable/> : null}
            {tabNo==3 ? <TableOfRegisteration/> : null}
        </div>
    );
}