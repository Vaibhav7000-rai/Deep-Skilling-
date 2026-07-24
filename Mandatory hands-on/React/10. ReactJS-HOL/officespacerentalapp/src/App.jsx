import React from 'react';

const featuredOffice = {
  name: 'Riverfront Business Suites',
  rent: 52000,
  address: '211 River Avenue, Downtown',
  area: '1,250 sq ft'
};

const officeSpaces = [
  {
    id: 1,
    name: 'Skyline Shared Office',
    rent: 47000,
    address: '18 Tower Road, Metro City',
    size: '850 sq ft'
  },
  {
    id: 2,
    name: 'Parkview Executive Hub',
    rent: 63000,
    address: '42 Park Lane, Uptown',
    size: '1,400 sq ft'
  },
  {
    id: 3,
    name: 'Harborfront Studio',
    rent: 55000,
    address: '99 Harbor Street, Seaside District',
    size: '980 sq ft'
  }
];

const headingElement = React.createElement(
  'h1',
  { className: 'page-heading' },
  'Office Space Rental App'
);

const imageUrl = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80';

function App() {
  return (
    <div className="app-shell">
      {headingElement}

      <div className="hero-card">
        <img src={imageUrl} alt="Modern office space" />
        <div className="hero-copy">
          <p>
            Use JSX syntax to create React elements, render them to the DOM, and apply inline CSS styles conditionally.
          </p>
        </div>
      </div>

      <section className="office-details">
        <h2>Featured Office</h2>
        <p>Name: {featuredOffice.name}</p>
        <p>
          Rent:{' '}
          <span
            style={{
              color: featuredOffice.rent < 60000 ? 'red' : 'green',
              fontWeight: '700'
            }}
          >
            ₹{featuredOffice.rent.toLocaleString()}
          </span>
        </p>
        <p>Address: {featuredOffice.address}</p>
        <p>Area: {featuredOffice.area}</p>
      </section>

      <section className="office-list">
        <h2>Available Office Spaces</h2>
        <ul>
          {officeSpaces.map((office) => (
            <li key={office.id} className="office-item">
              <strong>{office.name}</strong>
              <p>{office.address}</p>
              <p>Size: {office.size}</p>
              <p>
                Rent:{' '}
                <span
                  style={{
                    color: office.rent < 60000 ? 'red' : 'green'
                  }}
                >
                  ₹{office.rent.toLocaleString()}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
