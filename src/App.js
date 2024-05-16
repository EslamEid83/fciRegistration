import LoginPage from "./pages/LoginPage";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import AfterRegisteration from "./pages/AfterRegisteration/AfterRegisteration";
import StudentRegisterationPage from "./pages/StudentRegisterationPage/StudentRegisterationPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import SystemUserPage from "./pages/SystemUserPage/SystemUserPage";
import AddAdmin from "./components/Add&DeleteAdmin/Add&DeleteAdmin";
import Admins from "./components/Admins/Admins";
import AllCourses from "./components/AllCourses/AllCourses";
import { $Model_Index, $authAtom, $coursesForStd } from "./store";
import IsNotLoggedin from "./components/ProtectedRouts/isNotLoggedin";
import IsLoggedin from "./components/ProtectedRouts/isLoggedin";
import TopBar from "./components/TopBar/TopBar";
import { useRecoilState } from "recoil";
import { ToastContainer } from "react-toastify";
import Error from "./components/Error/Error";
import TeacherPage from "./pages/TeacherPage/TeacherPage";
import Students from "./components/Students/Students";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [ authData ] = useRecoilState($authAtom);
  const [coursesForStd,setCoursesForStd]=useRecoilState($coursesForStd);
  const [modelIndex,setModelIndex]=useRecoilState($Model_Index)

  // useEffect(()=>{
  //   axios(`http://localhost:3004/users?id=${authData.user.id}`)
  //   .then(data=> setCoursesForStd(data.data.listOfRegCourses))
  // })
  return (
    <div className="App">
      <BrowserRouter>
      {/* {modelIndex == true ?<AddNewAdmin/> :null } */}
        <Routes>
          <Route path="/">
            {/* <Route index element={<LoginPage/>} /> */}
            <Route index element={
            <IsNotLoggedin>
              <LoginPage/>
            </IsNotLoggedin>
            } />
            <Route path="SystemOwnerPage" element={
            <IsLoggedin>
              <SystemUserPage/>
            </IsLoggedin>
            } />
            <Route path="AdminPage" element={
            <IsLoggedin>
              <AdminPage/>
            </IsLoggedin>
            } />
            <Route path="RegisterationPage" element={
            <IsLoggedin>
              <StudentRegisterationPage/>
            </IsLoggedin>
            } />
            {/* <Route path="SystemUserPage" element={<SystemUserPage />} />
            <Route path="AdminPage" element={<AdminPage />} />
            <Route path="RegisterationPage" element={<StudentRegisterationPage/>} /> */}
            {/* <Route path="AfterRegisteration" element={<AfterRegisteration />} /> */}
            <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
      <ToastContainer autoClose={2000}/>
    </div>

// http://localhost:3004/Staff
//   http://localhost:3004/Students
//   http://localhost:3004/Courses

  );
}

export default App;


// axios("http://localhost:3004/Students?q=eslam")
// .then(std=>console.log(std.data))