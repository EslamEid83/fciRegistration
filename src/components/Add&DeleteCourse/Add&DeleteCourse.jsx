import "./Add&DeleteCourse.scss";
import { Field, Form, Formik } from "formik";
import addCourseSchma from "../../schemas/addCourseSchema";
import deleteCourseSchema from "../../schemas/deleteCourseSchema";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddAndDeleteCourse(){
  function handelAddCourse(values){
    const newData ={...values};
    axios.post("http://localhost:3004/Courses",newData);
    toast.success(` ${newData.courseName} is added successfully`)
    // console.log(values);
  }

    return(
        <>
          <div className="col-12 editCourse">
              <h1>To add course</h1>

              <Formik
                initialValues={{
                  courseName : "",
                  courseCode : "",
                  courseHours : "",
                  courseLevel : "",
                  courseDepartment : "",
                  coursePreRequisteNum1 : "",
                  coursePreRequisteNum2 : "",
                  coursePreRequisteNum3 : "",
                  status : ""
                }}
                validationSchema={addCourseSchma}
                onSubmit={handelAddCourse}
              >
                <Form className="col-12 addCourse">
                  <div className="col-12 addCourseUp">
                  <div className="col-6 leftEditCourse">
                  <label htmlFor="courseName" >Course Name :</label>
                  <Field type="text" id="courseName" name="courseName" className="editCoursesTable" placeholder="Enter Course Name"/>

                  <label htmlFor="courseCode">Course Code :</label>
                  <Field type="text" id="courseCode" name="courseCode" className="editCoursesTable" placeholder="Enter Course Code"/>

                  <label htmlFor="courseHours">Course Hours :</label>
                  <Field type="text" name="courseHours" id="courseHours"  className="editCoursesTable" placeholder="Enter Course Hours" />

                  <label htmlFor="courseLevel">Course level :</label>
                  <Field type="text" name="courseLevel" id="courseLevel"  className="editCoursesTable" placeholder="Enter Course level" />

                </div>

                <div className="col-6 rightEditCourse">
                  <label htmlFor="coursePreRequiste">Course Department :</label>
                  <Field type="text" id="coursePreRequiste" name="courseDepartment" className="editCoursesTable" placeholder="Enter Course Department" />

                  <label htmlFor="coursePreRequiste">Course Pre-requiste number 1 :</label>
                  <Field type="text" id="coursePreRequiste" name="coursePreRequisteNum1" className="editCoursesTable" placeholder="Enter Course Pre-requiste number 1"/>

                  <label htmlFor="coursePreRequiste">Course Pre-requiste number 2 :</label>
                  <Field type="text" id="coursePreRequiste" name="coursePreRequisteNum2" className="editCoursesTable" placeholder="Enter Course Pre-requiste number 2" />

                  <label htmlFor="coursePreRequiste">Course Pre-requiste number 3 :</label>
                  <Field type="text" id="coursePreRequiste" name="coursePreRequisteNum3" className="editCoursesTable" placeholder="Enter Course Pre-requiste number 3"/>

                </div>

                  </div>
                  <div className=" states">
                         <Field type="radio" className="courseState" id="Active" name="status" value="Active" />
                         <label for="Active" className="lableRole">Active</label>
                         <Field type="radio" className="courseState" id="Not Active" name="status" value="Not Active" />
                         <label for="Not Active" className="lableRole">Not Active</label>
                        
                      </div>
                <div className="addBtn col-12">
                 <button className="editBtns" type="submit">Add new course</button>
              </div>
                  </Form>
              </Formik>

              {/* <h1>To delete course</h1>
              <Formik
              initialValues={{
                id : ""
              }}
              validationSchema={deleteCourseSchema}
              // onSubmit={}
              >
                <Form className="col-12 deleteCourse">

                  <label htmlFor="courseCode">Course Code :</label>
                  <Field type="text" id="courseCode" name="id" className="deleteCoursesTable" placeholder="Enter Course Code"
                  />
                  <div className="deleteBtn col-12">
                      <button className="editBtns" type="submit">Delete course</button>
                  </div>
                        
                </Form>
              </Formik> */}
          </div>
        </>
    );
}