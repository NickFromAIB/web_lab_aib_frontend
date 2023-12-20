import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Person = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setPerson(response.data);
      } catch (error) {
        console.error('Ошибочка:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!person) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Email: {person.email}</p>
      <p>Тел: {person.phone}</p>
    </div>
  );
};

export default Person;
