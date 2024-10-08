import React from 'react'

const Cyber = () => {
  return (
    <div className="card-container">
      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">What is Cybersecurity? Importance and its uses</p>
          <p className='aut'>By Isha Sharma</p>
          <div className='data'>
            <p>06 Aug, 2024</p>
            <p>4 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">Cybersecurity Vs Ethical Hacking: Top 10 Differences</p>
          <p className='aut'>By Meghana D</p>
          <div className='data'>
            <p>26 Mar, 2024</p>
            <p>3 Min Read</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p className="card-text">What Is Hacking? Types of Hacking & More</p>
          <p className='aut'>By Jaishree Tomar</p>
          <div className='data'>
            <p>16 Mar, 2024</p>
            <p>8 Min Read</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cyber;