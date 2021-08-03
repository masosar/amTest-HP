import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const LayoutList = ({ characters }) => {
  const dispatch = useDispatch();
  const { addFavorite, removeFavorite, urlStudent, urlStaff } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <div className="container">
      <div className="logohp"></div>
      <div className="filter">Selecciona tu filtro</div>
      <div id="buttoncontainer">
        <button
          onClick={() => urlStudent("/hp-students")}
          type="button home-button"
          id="button1"
        >
          ESTUDIANTES
        </button>
        <button
          onClick={() => urlStaff("/hp-staff")}
          type="button home-button"
          id="button2"
        >
          STAFF
        </button>
      </div>
      <div className="row row-cols-2 row-cols-lg-2">
        {characters.map((character, index) => (
          <div className="col mb-6">
            <div className="card-horizontal" key={index}>
              <div
                className={
                  character.house === "Gryffindor"
                    ? "icon-backgroundGrif"
                    : character.house === "Slytherin"
                    ? "icon-backgroundSlyt"
                    : character.house === "Hufflepuff"
                    ? "icon-backgroundHuff"
                    : character.house === "Ravenclaw"
                    ? "icon-backgroundRave"
                    : "noclass"
                }
              >
                <img
                  src={character.image}
                  className="myimg"
                  alt={character.name}
                />
              </div>
              <div className={character.alive ? "card-body" : "card-body-rip"}>
                <span className="card-obituary">
                  {character.alive ? "VIVO" : "FINADO"} /{" "}
                  {character.hogwartsStudent
                    ? "ESTUDIANTE"
                    : character.hogwartsStaff
                    ? "STAFF"
                    : ""}
                </span>
                <span
                  className="card-bookmark"
                  onClick={() => addFavorite(character.name)}
                >
                  <i className="fa fa-bookmark fa-lg cardfav" aria-hidden="true"></i>
                </span>
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
