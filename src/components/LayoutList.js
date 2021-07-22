import React, { useContext } from "react";
import { UrlContext } from "../UrlContext";

const LayoutList = ({ characters }) => {
  const url = useContext(UrlContext);

  const filterBy = (num) => {
    if(num===1){
      url.setTheUrl("http://localhost:3030/hp-students")
    }else if(num===2){
      url.setTheUrl("http://localhost:3030/hp-staff")
    }
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
                className="icon-background" 
                style={
                  character.house ==='Gryffindor' 
                  ? {background: 'linear-gradient(135deg, #FF0000 0%, #FED482 100%)', borderRadius: '16px 0px 0px 16px'} 
                  : character.house ==='Slytherin' 
                  ? {background: 'linear-gradient(135deg, #1C792B 0%, #82E95E 100%)', borderRadius: '16px 0px 0px 16px'} 
                  : character.house ==='Hufflepuff' 
                  ? {background: 'linear-gradient(135deg, #FFC700 0%, #FFF388 100%)', borderRadius: '16px 0px 0px 16px'} 
                  :character.house ==='Ravenclaw' 
                  ? {background: 'linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)', borderRadius: '16px 0px 0px 16px'} 
                  :{backgroundColor:'#ccc'}
                }
              >
                <img src={character.image} className="myimg" alt={character.name} />
              </div>
              <div className="card-body" style={character.alive ? {backgroundColor:'#fff'}: { backgroundColor:'#ccc', borderRadius: '0px 16px 16px 0px' }}>
                <span className="card-obituary">{character.alive ? 'VIVO' : 'FINADO'} / {character.hogwartsStudent ? 'ESTUDIANTE' : character.hogwartsStaff ? 'STAFF' : ''}</span>
                <span className="card-bookmark"></span>
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
