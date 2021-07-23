import React, { useContext } from "react";
import { UrlContext } from "../UrlContext";

const LayoutList = ({ characters }) => {
  const url = useContext(UrlContext);

  const filterBy = (num) => {
    if(num===1){
      url.setTheUrl("/hp-students")
    }else if(num===2){
      url.setTheUrl("/hp-staff")
    }
  }

  const onBookmark = () => {
    console.log('You chose a bookmark')
  }

  return (
    <div className="container">
      <div className="logohp"></div>
      <div className="filter">Selecciona tu filtro</div>
      <div id="buttoncontainer">
        <button onClick={ () => filterBy(1) } type="button home-button" id="button1" >ESTUDIANTES</button>
        <button onClick={ () => filterBy(2) } type="button home-button" id="button2" >STAFF</button>
      </div>
      <div className="row row-cols-2 row-cols-lg-2">
        {characters.map((character, index) => (
          <div className="col mb-6">
            <div className="card-horizontal" key={index}>
              <div 
                className={
                  character.house ==='Gryffindor' 
                  ? 'icon-backgroundGrif' : character.house ==='Slytherin' 
                  ? 'icon-backgroundSlyt' : character.house ==='Hufflepuff' 
                  ? 'icon-backgroundHuff' : character.house ==='Ravenclaw' 
                  ? 'icon-backgroundRave' : 'noclass'
                } 
              >
                <img src={character.image} className="myimg" alt={character.name} />
              </div>
              <div className={character.alive ? 'card-body' : 'card-body-rip'}>
                <span className="card-obituary">{character.alive ? 'VIVO' : 'FINADO'} / {character.hogwartsStudent ? 'ESTUDIANTE' : character.hogwartsStaff ? 'STAFF' : ''}</span>
                <span className="card-bookmark" onClick={() => onBookmark() }><i className="fa fa-bookmark fa-lg" aria-hidden="true"></i></span>
                <h5 className="card-title">{character.name}</h5>
                <span className="card-text">
                  <span>Cumpleaños: {character.dateOfBirth}</span>
                  <br />
                  <span>Género: {character.gender}</span>
                  <br />
                  <span>Color de ojos: {character.eyeColour}</span>
                  <br />
                  <span>Color de pelo: {character.hairColour}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutList;
