import React, { useState } from "react";
import "../sass/styles.scss";
import "../sass/test.scss";
import { useSelector } from "react-redux";
import LayoutList from "./LayoutList";
import useFetch from "./useFetch";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CharCards = () => {
  const [show, setShow] = useState(false);

  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [eyeColour, seteyeColour] = useState("");
  const [hairColour, sethairColour] = useState("");
  const [hogwartsStudent, sethogwartsStudent] = useState(0);
  const [hogwartsStaff, sethogwartsStaff] = useState(0);
  const [image, setimage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const category = useSelector((state) => state.category);

  const url = category;
  const { data: characters, isPending, error } = useFetch(url);

  const favs = useSelector((state) => state.favorites);

  const handleSubmit = (e) => {
    e.preventDefault();
    const char = {
      name,
      gender,
      dateOfBirth,
      eyeColour,
      hairColour,
      hogwartsStudent,
      hogwartsStaff,
      image,
    };
    fetch("/hp-characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(char),
    }).then(() => {
      console.log("New character added");
    });
    setShow(false);
  };

  return (
    <div>
      <div id="cssmenu" className="container">
        {/* <div className="tutorial">
          <ul>
            <li>
              FAVORITOS <i className="fa fa-angle-down"></i>
              <ul>
                {favs.map((fav) => (
                  <li>
                    {fav} <i className="fa fa-trash"></i>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div> */}
        <div class="rowfav">
          {/* <div class="column">
            <div class="blue-column">Favorites <i className="fa fa-bookmark"></i></div>
          </div> */}
          <div className="tutorial">
          <ul>
            <li>
              Favoritos <i className="fa fa-bookmark fa-lg"></i>
              <ul>
                {favs.map((fav) => (
                  <li>
                    {fav} <i className="fa fa-trash"></i>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
          <div class="column">
            <div class="green-column" onClick={handleShow}>Agregar <i className="fa fa-user-plus fa-lg"></i></div>
          </div>
        </div>
        {/* <div className="add" onClick={handleShow}>
          AGREGAR
        </div> */}
      </div>
      <div className="favmenu"></div>
      <div className="hero">
        {characters && <LayoutList characters={characters} />}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agrega un personaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col">
                <label for="validationCustom01">Nombre</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="firstname"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="validationCustom01">Cumpleaños</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setdateOfBirth(e.target.value)}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col">
                <label for="validationCustom01">Color de ojos</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="eyeColour"
                  value={eyeColour}
                  onChange={(e) => seteyeColour(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="validationCustom01">Color de pelo</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="hairColour"
                  value={hairColour}
                  onChange={(e) => sethairColour(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="female"
                onChange={(e) => setgender(e.target.value)}
              />
              <label className="form-check-label" for="inlineRadio1">
                Mujer
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio2"
                value="male"
                onChange={(e) => setgender(e.target.value)}
              />
              <label className="form-check-label" for="inlineRadio2">
                Hombre
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="inlineRadio3"
                value="student"
                onChange={(e) => sethogwartsStudent(e.target.value)}
              />
              <label className="form-check-label" for="inlineRadio3">
                Estudiante
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="inlineRadio4"
                value="staff"
                onChange={(e) => sethogwartsStaff(e.target.value)}
              />
              <label className="form-check-label" for="inlineRadio4">
                Staff
              </label>
            </div>
            <br />
            <br />
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <label for="image">Imagen (url)</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="image"
                value={image}
                onChange={(e) => setimage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-secondary"
            variant="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CharCards;
