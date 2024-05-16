import * as yup from "yup";

const deleteCourseSchema = yup.object().shape({
    courseCode :  yup.number().required('Course Code is required'),
});

export default deleteCourseSchema;