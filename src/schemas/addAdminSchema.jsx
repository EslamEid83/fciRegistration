import * as yup from "yup";

const addAdminSchma = yup.object().shape({
    name : yup.string().required('Name is required'),
    username :  yup.string().required('Username is required'),
    password :  yup.string().required('Password is required').min(5),
    confirm_password :  yup.string().required('Confirm Password is required').oneOf([yup.ref('password')]),
    role :  yup.string().required().oneOf([ 'System Owner','Admin','Doctor']),
});

export default addAdminSchma;