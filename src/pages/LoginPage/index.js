import "./index.scss";
import { Field, Form, Formik } from "formik";
import LoginSchema from "../../schemas/LoginSchema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { $authAtom } from "../../store";
import { useRecoilState } from "recoil";
export default function LoginPage() {
  const [ authData , setAuthData ] = useRecoilState($authAtom);
  // console.log(authData);
  const navigate = useNavigate();

  function handelLogin(values){
    axios.get(`http://localhost:3004/users?username=${values.username}&password=${values.password}`
  ).then(data =>{
    if(data.data.length){
      toast.success(`Welcome ${data.data[0].name}!`)
      const userData ={
        isAuth:true,
        user: data.data[0]
      }
      setAuthData(userData)
      localStorage.setItem('loggedInUser', JSON.stringify(userData))
      if (data.data[0].role == 'Admin') {
        navigate('/AdminPage');
      } else if (data.data[0].role == 'System Owner') {
        navigate('/SystemOwnerPage');
      }else if (data.data[0].role == 'Teacher') {
        navigate('/TeacherPage');
      }else {
        navigate('/RegisterationPage');
      }
    }
    else {
      toast.error("Username or Password is incorrect")
    }
  });
  }
  return (
    <>
    <div className="col-12" id="LoginPage">
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handelLogin}
    > 

      <Form className="shadow-lg p-3 mb-5 bg-body rounded col-5 form">
      <h1>FCI</h1>
      <div className="col-12 inputField">
        <label className="col-12">User Name</label>
        <Field type="text" className="col-12" id="adminUserName" name="username" placeholder="Enter admin's username..."/>
      </div>
      <div className="col-12 inputField">
         <label className="col-12">Password</label>
         <Field type="password" className="col-12" id="adminPassword" name="password" placeholder="Enter admin's password..."/>
      </div>
      <button className=" col-12 loginBtn" type="submit">Login</button>
      </Form>
    </Formik>
    </div>
    </>
  );
}
