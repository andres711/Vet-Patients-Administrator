import React, { Fragment, useState, useEffect } from "react";
import Form from "./Components/Form";
import Date from "./Components/Date";


function App() {

  let initialDates = JSON.parse(localStorage.getItem("dates"))
  
  if(!initialDates){
    initialDates=[]
  }

  const [dates, setDates] = useState(initialDates);

  useEffect(()=>{
    if(dates){
      localStorage.setItem("dates",JSON.stringify(dates))
    } 
    else{
      localStorage.setItem("dates",JSON.stringify([]))
    } 
  },[dates])

  const createDate = (newDate) => {
    setDates([...dates, newDate]);
  };
  const deleteDate = id =>{
    const filter = dates.filter(date => date.id !== id)
    setDates(filter)
  }
  const titulo = dates.length>0 ?<h2>Administrate your dates</h2> :<h2>Add new date</h2>

  return (
    <Fragment>
      <h1>Patients administrator</h1>
      <div className="container">
        <div className="row">
          <div className="six columns">
            <Form createDate={createDate} />
          </div>
          <div className="six columns">
            {titulo}
            {dates.map((date) =>(
              <Date key={date.id} date={date} deleteDate={deleteDate} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
