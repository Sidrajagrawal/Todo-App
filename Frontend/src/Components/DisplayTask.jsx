import React, { useState } from 'react'
import TaskInput from './TaskInput'
import './DisplayTask.css';

const DisplayTask = () => {

  const [TaskDict, setTaskDict] = useState([]);

  const get = (Taskname) => {
    setTaskDict((prevTaskDict) => [...prevTaskDict,{ TaskName: Taskname,Status:"In-Progress"}])
  }

  const del = (key) => {
    const newList = [...TaskDict]
    newList.splice(key, 1)
    setTaskDict([...newList])
  }

  const changeStatus = (key) => { 
    setTaskDict((prevTaskDict) => {
      const updatedTaskDict = [...prevTaskDict];
      if (updatedTaskDict[key].Status === "In-Progress") {
        updatedTaskDict[key].Status = "Completed";
      } else {
        updatedTaskDict[key].Status = "In-Progress";
      }
      return updatedTaskDict;
    });
  };
  

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 div-1"></div>
          <div className="col-md-4 div-2">
            <div className="back">
              <div>
                <TaskInput data={get} />
                <table>
                  <tbody>
                    {TaskDict.map((dict, index) =>
                      <tr key={index}>
                        <td className='checkbox'><input type="checkbox" onClick={() => changeStatus(index)} /></td>
                        <td className='todo'>{dict.TaskName}</td>
                        <td className='btn'><button onClick={() => del(index)}><i className="ri-delete-bin-5-line"></i></button></td>
                        <td className={`status ${dict.Status === 'Completed' ? 'completed' : 'in-progress'}`}>{dict.Status}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4 div-3"></div>
        </div>
      </div>
    </div>
  )
}

export default DisplayTask
