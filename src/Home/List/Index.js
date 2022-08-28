import React from 'react'

function List({inputName}) {
  return (
    <div className='list-div' >
        <ul>
           {inputName }
        </ul>
    </div>
  )
}

export default List