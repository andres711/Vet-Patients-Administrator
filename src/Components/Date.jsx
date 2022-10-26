import React from "react";
import PropTypes from 'prop-types';

function Date({date,deleteDate}) {
    
    return (
        <div className="cita">
            <p>Pet Name: <span>{date.petName}</span></p>
            <p>Owner Name: <span>{date.ownerName}</span></p>
            <p>Date: <span>{date.date}</span></p>
            <p>Hour: <span>{date.hour}</span></p>
            <p>Symptoms: <span>{date.symptoms}</span></p>
            <button className="button delete u-full-width" onClick={()=>deleteDate(date.id)}>Delete</button>
        </div>
      );
}
Date.propTypes ={
    date: PropTypes.object,
    deleteDate: PropTypes.func
}

export default Date;