import React, { useState } from 'react'
import './TaskInput.css';

const TaskInput = (props) => {

  const [Taskname, setTaskname] = useState('');

  const sendData = () => {
    if (Taskname.length>21){
      alert("Todo is Too Long");
      setTaskname('');
      return
    }
    props.data(Taskname);
    setTaskname('');
  }


  return (
    <div>
      <div className="head">
        <h2 className='title'><span className='fname'>Todo</span> <span className='lname'>Application</span></h2>
        <div className="fields">
          <input type="text" value={Taskname} onChange={(e) => setTaskname(e.target.value)} placeholder='Enter Todo'/>
          <button onClick={() => sendData()}>+</button>
        </div>
        <div className="slogan">
          <h5>Do it now.</h5>
        </div>
      </div>
    </div>
  )
}

export default TaskInput
