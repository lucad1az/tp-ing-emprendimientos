import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import emprendimientos from '../emprendimientos/emprendimientos.json';
import '../styles/HomePageStyles.css';
import PaymentIcon from '@mui/icons-material/Payment';


function HomePage({paso}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmprendimientos, setFilteredEmprendimientos] = useState(emprendimientos);

    useEffect(() => {
        const results = emprendimientos.filter(emprendimiento =>
            emprendimiento.nombreEmprendimiento.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emprendimiento.rubro.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmprendimientos(results);
    }, [searchTerm]);

    return (
        <div className="home-container" data-aos="fade-in" data-aos-duration="1600">
            <header className="header" >
                <div className="logo"> <span style={{ color: "#428bca", fontWeight: "bold" }}>UNGS</span> Emprende</div>
                <div className="buttons">
                </div>
            </header>
            <div className="banner-container" data-aos="fade-in">
                <div className='banner-title'>
                    <h1>Bienvenido al Portal de Emprendimientos</h1>
                </div>
                <div className='banner'></div>
                
                <Link to="/registro" data-aos="fade-in">
                    <button className="btn btn-registrar">{paso !== -1? 'Registrarme como colaborador' : 'Ver mi emprendimiento' }</button>
                </Link>
            </div>
            <div className="search-container" data-aos="fade-in" data-aos-duration="1600">
                <SearchIcon className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar emprendimiento por nombre o rubro"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="emprendimientos-container" data-aos="fade-right" data-aos-duration="1600">
                {filteredEmprendimientos
                    .sort((a, b) => b.isFeatured - a.isFeatured)
                    .map((emprendimiento, index) => (
                        <Link to={`/detalle/${index}`} key={index} className="card-link">
                            <div className="card">
                                {emprendimiento.isFeatured && <div className="featured-badge">★ DESTACADO</div>}
                                <h3 className={emprendimiento.isFeatured ? 'featured-title' : ''}>
                                    {emprendimiento.nombreEmprendimiento}
                                </h3>
                                <p>{emprendimiento.rubro}</p>
                                <p><PaymentIcon /> {emprendimiento.formasDePago}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div >
    );
}

export default HomePage;
