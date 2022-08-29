import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import List from '../List/Index';
import './index.scss';
function Input({ setName, setSurname, setSalary, inputName, inputSname, inputSalary }) {

    const [todos, setTodos] = React.useState([])
    //onChange methods
    const getName = React.useCallback((e) => { setName(e.target.value) }, [])
    const getSName = React.useCallback((e) => { setSurname(e.target.value) }, [])
    const getSalary = React.useCallback((e) => { setSalary(e.target.value) }, [])

   

    //addToList method
    const addTolist = (e) => {
        e.preventDefault();
        const newTodo = todos.push({
            id: Math.floor(Math.random() * 1000),
            name: inputName,
            surname: inputSname,
            salary: inputSalary,
            delete:<button    className={'delete-btn'} >Delete</button>

        })
        setTodos([...todos].concat(newTodo))

        // setName('')
        // setSurname('')
        // setSalary('')
    }
    


    return (
        <Container>
            <Row>
                <Col md={8} >
                    <form id={'form'} onSubmit={addTolist}  >
                        <input onChange={getName} type={"text"} placeholder={"Please, Enter employee Name"} ></input>
                        <input onChange={getSName} type={"text"} placeholder={"Please, Enter employee Surname"} ></input>
                        <input onChange={getSalary} type={"number"} placeholder={"Please, Enter employee Salary"} ></input>
                        <button  >Add List</button>

                    </form>
                    <div className='form-list' >
                        <Row>
                            <Col md={3} ><div className='id' >ID</div></Col>
                            <Col md={3} ><div className='name' >NAME</div></Col>
                            <Col md={3} ><div className='surname' >SURNAME</div></Col>
                            <Col md={2} ><div className='salary' >SALARY</div></Col>
                            <List 
                            id={todos.map(eid => <div className='add' >{eid.id}</div>)} 
                            inputName={todos.map(ename => <div className='add' >{ename.name}</div>)} 
                            inputSname={todos.map(esname => <div className='add' >{esname.surname}</div>)}
                            inputSalary={todos.map(esalary => <div className='add' >{esalary.salary }</div>)}
                            inputDelete={todos.map(dbtn => <div className='add' >{dbtn.delete }</div>)} />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Input