import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Students.scss"; // Import your stylesheet here

export default function Students() {
  const [stdsData, setStdsData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedGrade, setEditedGrade] = useState("");

  async function fetchStudents() {
    try {
      const { data } = await axios.get("http://localhost:3004/users?role=Student");
      setStdsData(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  async function updateStdGrade(id, grade) {
    const updatedData = stdsData.map((std, index) => {
      if (index === editingIndex) {
        return { ...std, stdGrade: grade };
      }
      return std;
    });
    setStdsData(updatedData);

    try {
      await axios.patch(`http://localhost:3004/users/${id}`, {
        stdGrade: grade,
      });
    } catch (error) {
      console.error("Error updating student grade:", error);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="allStudents col-12">
      <h1>All Students</h1>
      <table className="tableOfCourses col-6">
        <thead>
          <tr>
            <th className="courseNumber">#</th>
            <th className="courseNumber">Id</th>
            <th>Student Name</th>
            <th className="courseNumber">Grade</th>
            <th className="courseNumber">Update Grade</th>
          </tr>
        </thead>
        <tbody>
          {stdsData.map((std, index) => (
            <tr key={index}>
              <td className="courseNumber">{index + 1}</td>
              <td>{std.id}</td>
              <td className="courseNumber">{std.name}</td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={editedGrade}
                    onChange={(e) => setEditedGrade(e.target.value)}
                  />
                ) : (
                  std.stdGrade
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button
                    className="btn "
                    onClick={() => {
                      updateStdGrade(std.id, editedGrade);
                      setEditingIndex(null);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="icon"
                    onClick={() => {
                      setEditingIndex(index);
                      setEditedGrade(std.stdGrade);
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}