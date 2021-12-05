import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css';

const Home = () => {

    return (
        <div className="d-flex flex-column align-items-center">
            <Link to="/formPlayer" className="mb-4"><button className="btn btn-primary">Inscribirme en el circuito</button></Link>
            <Link to="/managment"><button className="btn btn-secondary">Gestion</button></Link>
        </div>
    )
}

export default Home
