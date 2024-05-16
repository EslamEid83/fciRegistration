import "./Aside.scss";
import { useRecoilState } from "recoil";
import "../../store/index.js";
import { $TabNo ,$authAtom } from "../../store/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Aside(){
    const navigate = useNavigate();
    const [ authData , setAuthData ] = useRecoilState($authAtom);
    const[tabNo , setTabNo ,userData] = useRecoilState($TabNo);
    const[asideLis, setAsideLis]=useState(["Dashboard","Add&delete new admin","Edit level hours","Edit Department gpa",
    "Add&Delete Course","All Courses","Active Courses"])

    function handelLogout(){
        setAuthData({
            isAuth:false,
            user: null
          })
          localStorage.removeItem('loggedInUser', JSON.stringify(userData))
        //   console.log(authData);
          navigate('/');
    }
    return(
        <div className=" col-3 Aside">
            <div className="col-12 asideElements">
                {/* <div className="col-12 userName">
                    <h5>{authData.user.name}</h5>
                </div> */}
            <ul>
                {
                    
                    asideLis.map((li,index)=>{
                        // console.log(li);
                        return (
                            <li className="col-12" key={`aside-tab-${index}`} onClick={()=>{
                                setTabNo(index+1)
                            }}>{li}</li>
                        )
                    })
                }
            </ul>
            {/* <button className=" col-12 logOutBtn" onClick={handelLogout}>Logout</button> */}
            </div>
        </div>
    );
}