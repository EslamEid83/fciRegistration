import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { $authAtom } from "../../store";
import { Navigate ,redirect } from "react-router-dom";

export default function IsLoggedin({children}) {
    const [authData]=useRecoilState($authAtom);

    // console.log(authData);
    // console.log(authData.user.role);
    if(!authData.isAuth) return <Navigate to="/"/>;
    // if(!authData.isAuth) {
    //     if (authData.user.role == 'Admin') {
    //         return <Navigate to=""/>;
    //       } else if (authData.user.role == 'System User') {
    //         return  <Navigate to=""/>;
    //       }else {
    //         return <Navigate to=""/>;
    //       }
    // };
  return (
    <Fragment>{children}</Fragment>
  )
}
