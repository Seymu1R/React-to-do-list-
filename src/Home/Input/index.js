import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import List from '../List/Index';
import './index.scss';

function Input({setName,setSurname,setSalary}) {
    //useState
    // const [inputName, setName] = React.useState("");
    // const [inputSname, setSurname] = React.useState('');
    // const [inputSalary, setSalary] = React.useState('');
    //onCahenge methods and set inputvalue
    const getName = React.useCallback((e) => { setName(e.target.value) }, [])
    const getSName = React.useCallback((e) => { setSurname(e.target.value) }, [])
    const getSalary = React.useCallback((e) => { setSalary(e.target.value) }, [])    
   

    return (
        <Container>
            <Row>
                <Col md={8} >
                    <form id={'form'} action="#"  >
                        <input onChange={getName} type={"text"} placeholder={"Please, Enter employee Name"} ></input>
                        <input onChange={getSName} type={"text"} placeholder={"Please, Enter employee Surname"} ></input>
                        <input onChange={getSalary} type={"number"} placeholder={"Please, Enter employee Salary"} ></input>
                        <button>Add List</button>

                    </form>
                    < List/>
                </Col>
            </Row>
        </Container>

    )
}

export default Input