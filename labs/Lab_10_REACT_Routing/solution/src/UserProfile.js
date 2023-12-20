// UserProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Загрузка данных о пользователе с сервера
    fetch(`https://example.com/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, [userId]);

  if (!user) {
    return <p>Загрузка данных...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Дополнительная информация о пользователе...</p>
    </div>
  );
};

export default UserProfile;
