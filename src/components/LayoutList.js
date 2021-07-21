import React, { useContext } from "react";
import { UrlContext } from "../UrlContext";

// const filterBy = (url) => {
//   let laylisturl = url;
//   console.log(laylisturl);
// }


const LayoutList = ({ characters }) => {
  const url = useContext(UrlContext);
  return (
    <div className="container">
      <div className="logohp"></div>
      <div className="filter">Selecciona tu filtro</div>
      <div id="buttoncontainer">
          <button onClick={ url.setTheUrl("http://localhost:3030/hp-students") } type="button home-button" id="button1" >ESTUDIANTES</button>
          <button onClick={ url.setTheUrl("http://localhost:3030/hp-staff") } type="button contact-button" id="button2">STAFF</button>
      </div>
      <div className="row row-cols-2 row-cols-lg-2">
        {characters.map((character, index) => (
          <div className="col mb-6">
            <div className="card-horizontal">
              <div className="icon-background">
                <img src={character.image} className="myimg" alt={character.name} />
              </div>
              <div className="card-body">
                <span className="card-obituary">VIVO / ESTUDIANTE</span>
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
