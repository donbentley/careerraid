import React from 'react';
import './CardGrid.css';
import Button from './Button';

const CardGrid = ({ data }) => {
  return (
    <div className="card-grid">
      {data.map((item, index) => (
        <div key={index} className="card">
          {/* Render your card content here */}
          <img src={item.image} alt={item.title} /> {/* Add the image */}
          <h2>{item.title}</h2>
          <p>{item.role}</p>
          <p>Status: {item.status}</p> {/* Render the status */}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  // Example data for cards
  const cardData = [
    { title: 'Google', role: 'Data Analyst', image: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png', status: 'Accepted' }, // Example status values
    { title: 'Amazon', role: 'Software Engineer', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png', status: 'Rejected' },
    { title: 'Apple', role: 'Program Analyst', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png', status: 'In Progress' },
    // Add more data as needed
  ];

  return (
    <div className="app">
      <CardGrid data={cardData} />
      <div class="buttonnn">
      <button>add more jobs</button>
      </div>
      <div class="logout">
        <button class="logoutbutton">Log out</button>
      </div>
    </div>
  );
};

export default App;