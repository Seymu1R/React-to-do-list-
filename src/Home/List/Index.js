import React from 'react'
import './index.scss'

function List({id, inputName, inputSname, inputSalary }) {
  return (
    <div className='container' >
      <div id={id} className='row'>
      <div id='list-id' className='col-md-3'>
          {id}
        </div>
        <div id='list-name' className='col-md-3'>
          {inputName}
        </div>
        <div id='list-sname' className='col-md-3'>
          {inputSname}
        </div>
        <div id='list-salary' className='col-md-3'>
          {inputSalary}
        </div>

      </div>

    </div>
  )
}

export default List