import React from 'react';
import "./SystemOwners.scss";
import axios from 'axios';
import { useState ,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus ,faUserTie } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export default function SuperAdmins() {
    const [superAdmins,setSuperAdmins]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    async function getAllSuperAdmins(){
        const {data} = await axios("http://localhost:3004/users?role=System Owner");
        setSuperAdmins(data);
        console.log(data);
    }
    async function deleteSuperAdmin(id){
        setIsLoading(true);
        const res= await axios.delete(`http://localhost:3004/users/${id}`);
        setIsLoading(false);
    }

useEffect(()=>{
    getAllSuperAdmins();
},[isLoading]);

  return (
    <div className='adminsTable col-12'>
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
                
                superAdmins.map((superAdmin , index) =>{
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{superAdmin.id}</td>
                            <td>{superAdmin.name}</td>
                            <td>{superAdmin.username}</td>
                            <td className='tdAcion'>
                                {superAdmin.name =="Dr Hassan"?<FontAwesomeIcon className='deleteIcon' icon={faUserTie} />:
                                <FontAwesomeIcon className='deleteIcon' icon={faUserMinus}
                                onClick={() => 
                                  // deleteAdmin(admin.id)
                                  // getAllAdmins()
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
                                        deleteSuperAdmin(superAdmin.id)
                                      Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                      });
                                    }
                                  })
                                  
                                }
                                 />
                                }
                            </td>
                        </tr>
                        );
                      
                    })
                    }
            </tbody>
        </table>
    </div>
  )
}
