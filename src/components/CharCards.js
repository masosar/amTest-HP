import React, { useState, useContext } from "react";
import "../sass/styles.scss";
//import DdFavorites from './DdFavorites';
import LayoutList from "./LayoutList";
import useFetch from "./useFetch";
import { UrlContext } from "../UrlContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from 'react-redux';

const CharCards = (props) => {
  //console.log(props.favorites[0].id);
  const [show, setShow] = useState(false);

//   const [db, setDb] = useState([]);

  //states to control inputs (experimenting)
  const [name, setname] = useState('');
  const [gender, setgender] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [eyeColour, seteyeColour] = useState('');
  const [hairColour, sethairColour] = useState('');
  const [hogwartsStudent, sethogwartsStudent] = useState(0);
  const [hogwartsStaff, sethogwartsStaff] = useState(0);
  const [image, setimage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const url = useContext(UrlContext);
  const { data: characters, isPending, error } = useFetch(url.theUrl);

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
          fetch('/hp-characters', {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(char)
          }).then(() => {
              console.log('New character added');
          });
          setShow(false);
          url.setTheUrl('/hp-characters');
    }
  //todo:  the page is not reloading with the new data added
  //todo: The new records appears as "FINADO"

  return (
    <div>
      <div id="cssmenu">
        <div className="favorites">FAVORITOS</div>
        <div className="add" onClick={handleShow}>
          AGREGAR
        </div>
      </div>
      <div className="favmenu">
      {props.favorites.map((fav, index) => (
        <div>
          <div><img className="thumb" src={fav.thumbnail} alt={fav.name} /></div><div className="favname">{fav.name}</div><div className="favtrash"><i className="fa fa-trash" aria-hidden="true"></i></div>
          </div>
          ))}
        </div>
      <div className="hero">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
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
                value={gender}
                // checked={setgender('female')}
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
                value={gender}
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
          <Button className="btn btn-secondary" variant="secondary" type="submit"  onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps)(CharCards);
