import React from 'react';
import './App.css';
import { useQuery, gql } from "@apollo/client";

const STUDENTS = gql`
  {
    students (where: {age: {_gt: 12}}) {
      id
      name
      age,
      clas
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(STUDENTS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        {
          data.students.map(({ id, name, age, clas }) => (
            <div key={id}>
              <p>
                {name} | {age} | {clas}
              </p>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
