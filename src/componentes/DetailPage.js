import React from 'react';
import { useParams, Link } from 'react-router-dom';
import emprendimientos from '../emprendimientos/emprendimientos.json';
import '../styles/DetailPageStyles.css';
import Mapa from '../componentes/Mapa';
import DescriptionIcon from '@mui/icons-material/Description';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentIcon from '@mui/icons-material/Payment';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TiktokIcon from "./TiktokIcon";

function DetailPage() {
    const { id } = useParams();
    const emprendimiento = emprendimientos[id];

    const isFeatured = emprendimiento && emprendimiento.isFeatured;

    if (!emprendimiento || !emprendimiento.coordenadaX || !emprendimiento.coordenadaY) {
        return <div>Error: No se encontraron las coordenadas para este emprendimiento.</div>;
    }

    return (
        <div className="detail-page" data-aos="fade-in" data-aos-duration="1200">
            <header className="detail-header">
                <h1>Detalle del Emprendimiento</h1>

            </header>
            <Link to="/">
                <button className="btn btn-volver">Volver al inicio</button>
            </Link>
            <div className="detail-container">
                <div className="detail-info">

                    <h2>{emprendimiento.nombreEmprendimiento}</h2>

                    <ul>
                        {isFeatured && <div className="featured-badge">★ DESTACADO</div>}

                        <li><DescriptionIcon /> {emprendimiento.descripcion}</li>
                        <li><PhoneIcon /> {emprendimiento.telefonoEmprendimiento}</li>
                        <li><BusinessIcon /> {emprendimiento.rubro}</li>
                        <li><PaymentIcon /> {emprendimiento.formasDePago}</li>
                        <li><EmailIcon /> {emprendimiento.mailEmprendimiento}</li>

                        <div className='redes'>
                            <li><strong>Redes Sociales:</strong>
                                <ul>
                                    <li><InstagramIcon /><a href={emprendimiento.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                    <li><FacebookIcon /><a href={emprendimiento.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                    <li><TwitterIcon /><a href={emprendimiento.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="detail-map">
                    <Mapa
                        direccionNormalizada={emprendimiento.direccionEmprendimiento}
                        coordenadaX={emprendimiento.coordenadaX}
                        coordenadaY={emprendimiento.coordenadaY}
                    />
                    <p style={{ marginTop: '20px' }}><LocationOnIcon /> {emprendimiento.direccionEmprendimiento}</p>
                </div>

            </div>
        </div>
    );
}

export default DetailPage;
