
import './App.scss';
import React from 'react';
import Input from './Home/Input';
import List from './Home/List/Index';
function App() {
    const [inputName, setName] = React.useState('');
    const [inputSname, setSurname] = React.useState('');
    const [inputSalary, setSalary] = React.useState('');
  return (
    <div className="App">
      <React.Fragment>
        <Input setName={setName} setSurname={setSurname} setSalary={setSalary} />
        <List inputName={inputName}  />
      </React.Fragment>
    </div>
  );
}

export default App;
