import React from "react";

const StudentsList = ({ students }) => {
  return (
    <div className="container">
      <div className="logohp"></div>
      <div className="row row-cols-2 row-cols-lg-2">
        {students.map((student, index) => (
          <div className="col mb-6">
            <div className="card-horizontal">
              <div className="icon-background">
                <img src={student.image} className="myimg" alt={student.name} />
              </div>
              <div className="card-body">
                <span className="card-obituary">VIVO / ESTUDIANTE</span>
                <span className="card-bookmark"></span>
                <h5 className="card-title">{student.name}</h5>
                <span className="card-text">
                  <span>Cumpleaños: {student.dateOfBirth}</span>
                  <br />
                  <span>Género: {student.gender}</span>
                  <br />
                  <span>Color de ojos: {student.eyeColour}</span>
                  <br />
                  <span>Color de pelo: {student.hairColour}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
