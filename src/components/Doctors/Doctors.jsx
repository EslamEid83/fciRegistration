import "./Doctors.scss";
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export default function Teachers() {
    const [doctors,setDoctors]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    async function getAllTeachers(){
        const {data} = await axios("http://localhost:3004/users?role=Doctor");
        setDoctors(data);
        console.log(data);
    }
    async function deleteTeacher(id){
        setIsLoading(true);
        const res= await axios.delete(`http://localhost:3004/users/${id}`);
        setIsLoading(false);
    }

useEffect(()=>{
    getAllTeachers();
},[isLoading]);

  return (
    <div className='teachersTable col-12'>
        <h1>Doctors</h1>
        <table>
            <thead>
                <tr>
                <th>Number</th>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ?"Loading Data":
                
                doctors.map((doctor , index) =>{
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{doctor.id}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.username}</td>
                            <td className='tdAcion'>
                              <FontAwesomeIcon className='deleteIcon' icon={faUserMinus}
                              onClick={() => 
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!"
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                        deleteTeacher(doctor.id)
                                      Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                      });
                                    }
                                  })
                              }
                               />
                            </td>
                        </tr>
                        );
                      
                    })
                    }
                
                {/* <tr>
                    <td>1</td>
                    <td>ُEslam Eid</td>
                    <td>eslameid</td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}
