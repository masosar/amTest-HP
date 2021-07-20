import React from "react";

const StudentsList = ({ students }) => {
  return (
    <div className="main-container">
      {students.map((student, index) => (
        <div className="card" key={index}>
            <div className="card-body">
                <div className="">
                    <img className="myimg" src={student.image} alt="" />
                </div>
                <h2 className="card-title">{student.name}</h2>
                <p className="card-birthday">Cumpleaños: {student.dateOfBirth}</p>
                <p className="card-gender">Género: {student.gender}</p>
                <p className="card-eyecolor">Color de ojos: {student.eyeColour}</p>
                <p className="card-haircolor">Color de pelo: {student.hairColour}</p>
            </div>
        </div>
      ))}


      
    </div>
  );
};

export default StudentsList;
