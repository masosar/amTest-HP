import '../sass/styles.scss';
import StudentsList from './StudentsList';
import useFetch from './useFetch';


const CharCards = () => {
    const { data: students, isPending, error } = useFetch('http://localhost:3030/hp-students');

    return (
        <div>
            <div className="hero">
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                {students && <StudentsList students = {students} />}
            </div>
        </div>
    )
}

export default CharCards
