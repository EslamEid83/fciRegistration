import React, { useState } from 'react'
import "./AddToActiveCourses.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { $activeCourses } from '../../store';
import { Axios } from 'axios';

export default function AddToActiveCourses(course) {
    const [activeCourses,setActiveCourses]=useRecoilState($activeCourses);

    function addToActiveCourses(){
        setActiveCourses([...activeCourses ,course ])
    }
    // console.log(activeCourses);
  return (
    <FontAwesomeIcon icon={faCirclePlus} className="icon" onClick={addToActiveCourses}/>
  )
}
