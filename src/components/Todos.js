import React, { useState } from 'react'

const Todos = () => {
    const [todos, settodos] = useState("")
    const [time, settime] = useState ("")
    const [ plans, setplans ] = useState([]);
    let allplan = {todos:todos,time:time}
    // console.log(allplan)
   const makeplans =()=>{
     setplans([...plans, allplan]);
     console.log(plans);
   }
//    const del =(i)=>{
//     console.log(i)
//    }
  return (
    <>
      <div className="container-fluid main mx-auto !direction !spacing">
        <div className="container-sm !direction top shadow p-3 !spacing">
          <div className="my-2">
            <label htmlFor="">Add to your list</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => settodos(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Add time</label>
            <input
              type="time"
              className="form-control"
              onChange={(e) => settime(e.target.value)}
            />
          </div>
          <button className="form-control btn btn-primary" onClick={makeplans}>
            Add to your plans
          </button>
        </div>
        <div className="container-lg sec !direction shadow !spacing my-5">
          <div className="p-3 ">
            {plans.map((items, i) => {
              return (
                <div className="text-success do-warp d-flex my-2" key={i}>
                  <h6>{items.todos}</h6>
                  <small>I'm to start by {items.time}</small>
                  <div className="d-flex">
                    <button
                      className="btn btn-warning mx-2"
                      onClick={console.log(i)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger mx-2">Del</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos