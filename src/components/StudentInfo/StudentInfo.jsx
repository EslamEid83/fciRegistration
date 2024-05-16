import "./StudentInfo.scss";
// import Data from "../../pages/data/db.json";
// import StdImg from "../../assets/std.png";
import { $authAtom } from "../../store";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function StudentInfo(){
  const [ authData , setAuthData,userData ] = useRecoilState($authAtom);
    let stdImg = authData.user.img;
    console.log(authData);
    return(
        <div className="studentInfoPage col-12">
             {
            <div className="StdInfo col-12">
                {/* <div className="stdInfo_Img">
                  <img src={stdImg}/>
                </div> */}

                <div className="stdInfo_Info">
                  <div className="col-12 std">
                  <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="col-12 name_id_level">
                    <h3>Name: {authData.user.name}</h3>
                    <h3>Id: {authData.user.id}</h3>
                    <h3>Level: {authData.user.levelId}</h3>
                  </div>
                  <div className="col-12 gpa_hours">
                    <h3>GPA: {authData.user.gpa}</h3>
                    <h3>Allowed Hours: {authData.user.hours}</h3>
                  </div>
                </div>
                
              </div>
        }
        </div>
    );
}