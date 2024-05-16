import { Fragment } from "react"
import { useRecoilState } from "recoil"
import { $authAtom } from "../../store"
import { Navigate ,redirect } from "react-router-dom";

export default function IsNotLoggedin({children}) {
    const [authData]=useRecoilState($authAtom);

    // console.log(authData);
    // console.log(authData.user.role);
    if(authData.isAuth) {
        if (authData.user.role == 'Admin') {
            return <Navigate to="/AdminPage"/>;
          } else if (authData.user.role == 'System Owner') {
            return  <Navigate to="/SystemOwnerPage"/>;
          }else {
            return <Navigate to="/RegisterationPage"/>;
          }
    };
    
  return (
    <Fragment>{children}</Fragment>
  )
}
