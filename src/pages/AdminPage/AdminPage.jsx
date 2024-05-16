import "./AdminPage.scss";
import AdminAside from "../../components/AdminAside/AdminAside";
import AdminWorkingArea from "../../components/AdminWorkingArea/AdminWorkingArea";
import TopBar from "../../components/TopBar/TopBar";
export default function AdminPage() {
  return (
    <>
    <div className="col-12" id="adminPage">
    <TopBar/>
    <div className="sideBar_AdminWorkingArea col-12">
    <AdminAside/>
    <AdminWorkingArea/>
    </div>
    </div>
      </>
  );
}
