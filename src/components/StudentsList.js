import React from 'react'

const StudentsList = ({ students }) => {
    return (
        <div>
            {students.map((student,index) => (
                <div key={index}>
                    <h1>{ student.name }</h1>
                    <p>Cumpleaños: { student.dateOfBirth }</p> 
                    <p>Género: { student.gender }</p> 
                    <p>Color de ojos: { student.eyeColour }</p> 
                    Color de pelo: { student.hairColour }
                </div>
            ))
            }
        </div>
    )
}

export default StudentsList
