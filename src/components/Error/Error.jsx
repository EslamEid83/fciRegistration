import "./Error.scss";
import ErrorPhoto from "../../assets/ErrorPage_Content.png";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="col-12 error">
        <h1>Look like you are lost in space</h1>
        <img src={ErrorPhoto} alt="" />
        <Link to="/" className="link">Back To Login</Link>
    </div>
  )
}
