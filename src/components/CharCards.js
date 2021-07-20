import React, { useState, useEffect } from 'react'
import '../sass/styles.scss';
import StudentsList from './StudentsList';


const CharCards = () => {

    const [students, setStudents] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3030/hp-students')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setStudents(data);
        })
    }, [])

    return (
        <div>
            <div className="hero">
                {students && <StudentsList students = {students} />}
            </div>
        </div>
    )
}

export default CharCards
