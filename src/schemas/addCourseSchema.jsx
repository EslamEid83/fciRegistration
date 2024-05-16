import * as yup from "yup";

const addCourseSchma = yup.object().shape({
    courseName : yup.string().required('Course Name is required'),
    courseCode :  yup.string().required('Course Code is required'),
    courseHours :  yup.string().required('Course Hours is required'),
    courseLevel :  yup.string().required('Course Level is required'),
    courseDepartment :  yup.string().required('Course Department is required'),
    coursePreRequisteNum1 :  yup.string().required('Course Pre-requiste number 1 is required'),
    coursePreRequisteNum2 :  yup.string().required('Course Pre-requiste number 2 is required'),
    coursePreRequisteNum3 :  yup.string().required('Course Pre-requiste number 3 is required'),
});

export default addCourseSchma;