import { useRecoilState } from "recoil";
import { $authAtom } from "../../store";
import axios from "axios";

export default function useSaveListOfRegCourses() {
    const [ authData , setAuthData,userData ] = useRecoilState($authAtom);
    async function handelAddCourseToStdListOfRegCourses(courseInfo){
        axios.patch(`http://localhost:3004/users?id=${authData.user.id}` ,{listOfRegCourses:courseInfo})

        }
  return handelAddCourseToStdListOfRegCourses;
}
