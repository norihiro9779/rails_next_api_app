import React from 'react';

const User = () => {
  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  const handleClick = async () => {
    const data = { name: 'John Doe', email: 'john.doe@example.com' };
    const response = await postData('http://localhost/api/v1/users', data);
    console.log(response);
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data</button>
    </div>
  );
};

export default User;