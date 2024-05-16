import { atom } from "recoil";

export const $TabNo = atom({
  key: "$TabNo",
  default: 1,
});
export const $RegisterationAsideTabNo = atom({
  key: "$RegisterationAsideTabNo",
  default: 1,
});
export const $Courses = atom({
  key: "$Courses",
  default:{
  level1:[
    {
      name :"Progarmming 1",
      id: 1,
      hoursOfCourse:"3",
      levelId:1
    },
    {
      name :"C#",
      id: 2,
      hoursOfCourse:"3",
      levelId:1
    },
    {
      name :"Computer Architectures",
      id: 3,
      hoursOfCourse:"3",
      levelId:1
    },
    {
      name :"Information technology",
      id: 4,
      hoursOfCourse:"3",
      levelId:1
    },
    {
      name :"English language",
      id: 5,
      hoursOfCourse:"3",
      levelId:1
    },
    {
      name :"Scentific Thinking",
      id: 6,
      hoursOfCourse:"3",
      levelId:1
    },
    {
      name :"MATH",
      id: 7,
      courseName:"Theary of compution",
      hoursOfCourse:"3",
      levelId:1
    }
  ],
  level2:[
    {
      name :"Progarmming 2",
      id: 1,
      courseName:"Theary of compution",
      hoursOfCourse:"3",
      levelId:2
    },
    {
      name :"Assembly",
      id: 2,
      hoursOfCourse:"3",
      levelId:2
    },
    {
      name :"OOP",
      id: 3,
      hoursOfCourse:"3",
      levelId:2
    },
    {
      name :"OR",
      id: 4,
      hoursOfCourse:"3",
      levelId:2
    },
    {
      name :"File Structure",
      id: 5,
      hoursOfCourse:"3",
      levelId:2
    },
    {
      name :"Data Structure",
      id: 6,
      hoursOfCourse:"3",
      levelId:2
    },
    {
      name :"IS",
      id: 7,
      hoursOfCourse:"3",
      levelId:2
    }
  ],
  level3:[
    {
      name :"SE",
      id: 1,
      hoursOfCourse:"3",
      levelId:3,
      department:"SC"
    },
    {
      name :"AI",
      id: 2,
      hoursOfCourse:"3",
      levelId:3,
      department:"SC"
    },
    {
      name :"SWD",
      id: 3,
      hoursOfCourse:"3",
      levelId:3,
      department:"SC"
    },
    {
      name :"Simulation and Modeling",
      id: 4,
      hoursOfCourse:"3",
      levelId:3,
      department:"SC"
    },
    {
      name :"Network",
      id: 5,
      hoursOfCourse:"3",
      levelId:3,
      department:"SC"
    },
    {
      name :"Data Communication",
      id: 6,
      hoursOfCourse:"3",
      levelId:3,
      department:"SC"
    },
    {
      name :"DIP",
      id: 7,
      hoursOfCourse:"3",
      levelId:3,
      department:"IS"
    }
  ],
  level4:[
    {
      name :"ML",
      id: 10,
      hoursOfCourse:"3",
      levelId:4,
      department:"SC"
    },
    {
      name :"Testing",
      id: 10,
      hoursOfCourse:"3",
      levelId:4,
      department:"SC"
    },
    {
      name :"Compiler",
      id: 10,
      hoursOfCourse:"3",
      levelId:4,
      department:"SC"
    },
    {
      name :"Information Retrival",
      id: 10,
      hoursOfCourse:"3",
      levelId:4,
      department:"SC"
    },
    {
      name :"Knowledge Base",
      id: 10,
      hoursOfCourse:"3",
      levelId:4,
      department:"SC"
    },
    {
      name :"Theory",
      id: 11,
      hoursOfCourse:"3",
      levelId:4,
      department:"SC"
    },
    {
      name :"BIO",
      id: 12,
      hoursOfCourse:"3",
      levelId:4,
      department:"IS"
    }
  ]
}
});

export const $Model_Index = atom({
  key: "$Model_Index",
  default: false,
});

const localData = JSON.parse(localStorage.getItem('loggedInUser'));
export const $authAtom = atom({
  key: "$authAtom",
  default: localData ||{
    isAuth:false,
    user:null,
  }
});
export const $activeCourses = atom({
  key: "$activeCourses",
  default: []
});
export const $coursesForStd = atom({
  key: "$coursesForStd",
  default: []
});

