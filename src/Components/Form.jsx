import { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

function Form({ createDate }) {
  //Formulario
  const [input, setInput] = useState({
    petName: "",
    ownerName: "",
    date: "",
    hour: "",
    symptoms: "",
  });
  //Error
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const { petName, ownerName, date, hour, symptoms } = input;
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (
      petName.trim() === "" ||
      ownerName.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }
    //asignar ID
    input.id = uuidv4();
    //cargar cita
    createDate(input);
    //limpiar form y error
    setError(false);
    setInput({
      petName: "",
      ownerName: "",
      date: "",
      hour: "",
      symptoms: "",
    });
  };

  return (
    <Fragment>
      <h2>Create date</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">
          Name of the pet
          <input
            type="text"
            name="petName"
            value={petName}
            onChange={(e) => handleInput(e)}
            className="u-full-width"
          ></input>
        </label>
        <label htmlFor="">Name of the owner</label>
        <input
          type="text"
          name="ownerName"
          value={ownerName}
          onChange={(e) => handleInput(e)}
          className="u-full-width"
        ></input>

        <label htmlFor="">Date</label>
        <input
          type={"date"}
          name="date"
          value={date}
          onChange={(e) => handleInput(e)}
          className="u-full-width"
        ></input>

        <label htmlFor="">Hour</label>
        <input
          type={"time"}
          name="hour"
          value={hour}
          onChange={(e) => handleInput(e)}
          className="u-full-width"
        ></input>

        <label htmlFor="">Symptoms</label>
        <textarea
          type={"text"}
          name="symptoms"
          value={symptoms}
          className="u-full-width"
          onChange={(e) => handleInput(e)}
        ></textarea>
        {error ? <p className="alerta-error">All fields are required</p> : null}

        <button
        className="button create" 
        type={"submit"}>Charge date</button>
      </form>
    </Fragment>
  );
}

Form.propTypes = {
  createDate: PropTypes.func.isRequired
}

export default Form;
