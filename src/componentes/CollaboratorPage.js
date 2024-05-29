import React from "react";
import CollaboratorStyles from "../styles/CollaboratorStyles.css"

function CollaboratorPage({ userData, datosEmprendimiento }) {
    return (
        <div className="main">
            <header className="header">
                <div className="headerLeft">
                    <p className="headerHello">¡Hola <span className="userName">{userData.nombre}</span>!</p>
                </div>
                <div className="headerRight">
                    <ul>
                        <li>
                            <a href="#">Mi emprendimiento</a>
                        </li>
                        <li>
                            <a href="#">Mis medios de pago</a>
                        </li>

                    </ul>
                </div>
            </header>

            <div className="mi-emprendimiento">
                <div className="title">
                    <h2>Tu emprendimiento</h2>
                </div>
                <div className="datosEmprendimiento">
                    <span>Nombre</span>
                    <p className="datos">{datosEmprendimiento.nombreEmprendimiento}</p>
                    <span>Descripción</span>
                    <p className="datos">{datosEmprendimiento.descripcion}</p>
                    <span>Rubro</span>
                    <p className="datos">{datosEmprendimiento.rubro}</p>
                    <span>Formas de pago</span>
                    <p className="datos">{datosEmprendimiento.formasDePago}</p>
                  
                  
                </div>

                <div>
                    <span>Dirección</span>
                    <p className="datos">{datosEmprendimiento.direccionEmprendimiento}</p>
                    <span>Teléfono</span>
                    <p className="datos">{datosEmprendimiento.telefonoEmprendimiento}</p>
                    <span>Email</span>
                    <p className="datos">{datosEmprendimiento.mailEmprendimiento}</p>
                    </div>

                <div className="redesSocialesEmprendimiento">
                    <span>Facebook</span>
                    <p className="datos">@{datosEmprendimiento.facebook}</p>
                    <span>Tiktok</span>
                    <p className="datos">@{datosEmprendimiento.tiktok}</p>
                    <span>Instagram</span>
                    <p className="datos">@{datosEmprendimiento.instagram}</p>
                    <span>Twitter</span>
                    <p className="datos">@{datosEmprendimiento.twitter}</p>
                </div>
            </div>

            <div className="explorar">
                <div className="titleExplorar">
                    <h2>Explora los emprendimientos disponibles</h2>
                </div>
                
            </div>
        </div>
    )
}

export default CollaboratorPage;