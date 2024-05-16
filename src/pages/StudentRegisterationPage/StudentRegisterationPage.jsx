import "./StudentRegisterationPage.scss";
import RegisterationWorkingArea from "../../components/RegisterationWorkingArea/RegisterationWorkingArea";
import RegisterationAside from "../../components/RegisterationAside/RegisterationAside";
import TopBar from "../../components/TopBar/TopBar";
function StudentRegisterationPage() {
  return (
    <>
    <div className="col-12" id="studentRegisterationPage">
    <TopBar/>
    <div className="sideBar_MainWorkingArea col-12">
      <RegisterationAside/>
      <RegisterationWorkingArea/>
    </div>
    </div>
      </>
  );
}
export default StudentRegisterationPage;
