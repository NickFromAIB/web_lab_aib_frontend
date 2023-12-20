import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setPeople(response.data);
      } catch (error) {
        console.error('Ошибочка:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Main Page</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <Link to={`/person/${person.id}`}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
