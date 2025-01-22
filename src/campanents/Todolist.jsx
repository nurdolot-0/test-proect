import React, { useState } from 'react';

const initialState = {
  id: null,
  studentName: "",
  studentAge: "",
  isMarried: null,
  profession: "",
  studentPhoto: "",
};

const TodoList = () => {
  const [students, setStudents] = useState([]);
  const [inputValue, setInputValue] = useState(initialState);

  const changeInputHandler = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = () => {
    setStudents((prevStudents) => [
      ...prevStudents,
      { ...inputValue, id: Math.random() },
    ]);
    setInputValue(initialState); 
  };

  const deleteHandler = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <center>
      <div className='todo'>
        <input
          name='studentName'
          value={inputValue.studentName} 

          onChange={changeInputHandler}
          placeholder='Student Name'
          type="text"
        /><br/>

        <input

          name='studentAge'
          
          
          value={inputValue.studentAge}

          onChange={changeInputHandler}

          placeholder='Student Age'
          type="text"
        /><br/>
        <input
          name='isMarried'
          value={inputValue.isMarried}
          
          
          placeholder='Is Married'

          type="text"
        /><br/>
        <input
          name='profession'
          value={inputValue.profession}
          onChange={changeInputHandler}
          placeholder='Profession'
          type="text"
        /><br/>
        <button onClick={clickHandler}>Add Todo</button>
      </div>

      <div className='student-list'>
        {students.map((student) => (
          <div key={student.id}>
            <p>Name: {student.studentName}</p>
            <p>Age: {student.studentAge}</p>
            <p>Married: {student.isMarried}</p>
            <p>Profession: {student.profession}</p>
            <button onClick={() => deleteHandler(student.id)}>удалить</button>
          </div>
        ))}
      </div>
    </center>
  );
};

export default TodoList;

