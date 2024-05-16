import * as yup from "yup";

const LoginSchema = yup.object().shape({
    username :  yup.string().required('Username is required'),
    password :  yup.string().required('Password is required'),
    // role :  yup.string().required().oneOf([ 'System User','Admin','Student']),
});

export default LoginSchema;