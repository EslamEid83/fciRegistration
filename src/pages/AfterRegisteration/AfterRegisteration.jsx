import "./AfterRegisteration.scss";
import Data from "../data/db.json";
import TableOfRegisteration from "../../components/TableOfRegisteration/TableOfRegisteration";
import StdImg from "../../assets/std.png";
function AfterRegisteration(){
    let std = Data.Students[1]
    return (
        <div className="afterRegisteration col-12">
        <div className="StdInfo">

            <div className="stdInfo_Img">
              <img src={StdImg}/>
            </div>

            <div className="stdInfo_Info">
            <p>Name:{std.userName}</p>
            <p>Id:{std.id}</p>
            <p>Level:{std.levelId}</p>
            <p>GPA:{std.gpa}</p>
            <p>Allowed Hours:{std.hours}</p>
            </div> 

        </div>
        <TableOfRegisteration/>

        <div className="editBtn col-12">
              <button>Edit Registeration</button>
            </div>
        </div>
    );
}
export default AfterRegisteration;