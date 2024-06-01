import React, { useState } from "react";
import "../styles/CollaboratorStyles.css";
import Mapa from "./Mapa";
import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { CheckCircle, Warning } from "@material-ui/icons";

function CollaboratorPage({ userData, datosEmprendimiento, coordenadaXmain, coordenadaYmain }) {
    const [locationVisible, setLocationVisible] = useState(true);
    const [showLocationSuccessDialog, setShowLocationSuccessDialog] = useState(false);
    const [highlighted, setHighlighted] = useState(false);
    const [showSubscriptionSuccessDialog, setShowSubscriptionSuccessDialog] = useState(false);
    const [unsubscribeConfirmation, setUnsubscribeConfirmation] = useState(false);

    const handleToggleLocation = () => {
        setLocationVisible(!locationVisible);
        setShowLocationSuccessDialog(true);
    };

    const handleCloseLocationSuccessDialog = () => {
        setShowLocationSuccessDialog(false);
    };

    const handleHighlight = () => {
        if (highlighted) {
            setUnsubscribeConfirmation(true);
            setShowSubscriptionSuccessDialog(true);
        } else {
            setHighlighted(true);
            setShowSubscriptionSuccessDialog(true);
        }
    };

    const handleCloseSubscriptionSuccessDialog = () => {
        setShowSubscriptionSuccessDialog(false);
        setUnsubscribeConfirmation(false);
    };

    const handleCancelSubscription = () => {
        setHighlighted(false);
        setUnsubscribeConfirmation(false);
        setShowSubscriptionSuccessDialog(false); 
    };

    return (
        <div className="main" data-aos="fade-in" data-aos-duration="1200">
            <header className="header">
                <div className="headerLeft">
                    <p className="headerHello">¡Hola <span className="userName">{userData.nombre}</span>!</p>
                </div>
                <div className="headerRight">
                    <ul>
                        <li>
                            <Link to='/'>Ver todos los emprendimientos</Link>
                        </li>
                        <li>
                            <Button variant="contained" color={highlighted ? "default" : "primary"} onClick={handleHighlight}>
                                {highlighted ? "Cancelar suscripción" : "Destacar mi emprendimiento"}
                            </Button>
                        </li>
                        <li>
                            <Button variant="contained" color="primary" onClick={handleToggleLocation}>
                                {locationVisible ? 'Ocultar ubicación' : 'Mostrar ubicación'}
                            </Button>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="banner-collab">
                <p>Tu emprendimiento no está visible todavía, el moderador debe aprobar tu emprendimiento antes de ser mostrado</p>
            </div>

            <div className="mi-emprendimiento">
                <div className="title">
                    <h2>Detalles de tu emprendimiento</h2>
                </div>
                <div className="datosEmprendimiento">
                    <span>Nombre</span>
                    <p className="datos">{datosEmprendimiento.nombreEmprendimiento}</p>
                    <span>Descripción</span>
                    <p className="datos">{datosEmprendimiento.descripcion}</p>
                    <span>Rubro</span>
                    <p className="datos">{datosEmprendimiento.rubro}</p>
                    <span>Formas de pago</span>
                    <p className="datos">{datosEmprendimiento.formasDePago.join(', ')}</p>
                    {datosEmprendimiento.logo && (
                        <>
                            <span>Logo</span>
                            <img src={datosEmprendimiento.logo} alt="Logo del emprendimiento" style={{ maxWidth: '200px' }} />
                        </>
                    )}
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

            <Mapa
                direccionNormalizada={datosEmprendimiento.direccionEmprendimiento}
                coordenadaX={coordenadaXmain}
                coordenadaY={coordenadaYmain}
                visible={locationVisible}
            />

            <Dialog
                open={showLocationSuccessDialog}
                onClose={handleCloseLocationSuccessDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ backgroundColor: "#9ccc65" }}>¡Realizado con éxito! <CheckCircle style={{ fontSize: "3rem", color: "#fff" }} /></DialogTitle>
                <DialogContent>
                    {locationVisible ?
                        <p>Mostramos la ubicación de tu emprendimiento.</p> :
                        <p>Ocultamos la ubicación de tu emprendimiento.</p>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLocationSuccessDialog} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={showSubscriptionSuccessDialog}
                onClose={handleCloseSubscriptionSuccessDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ backgroundColor: "#9ccc65" }}>¡Realizado con éxito! <CheckCircle style={{ fontSize: "3rem", color: "#fff" }} /></DialogTitle>
                <DialogContent>
                    {unsubscribeConfirmation ?
                        <p><Warning /> ¿Está seguro de que desea cancelar la suscripción para destacar su emprendimiento?</p> :
                        <p>Tu emprendimiento se destacó con éxito, te avisaremos 1 día antes de que termine tu suscripción.</p>
                    }
                </DialogContent>
                <DialogActions>
                    {!unsubscribeConfirmation ?
                        <Button onClick={handleCloseSubscriptionSuccessDialog} color="primary" autoFocus>
                            OK
                        </Button> :
                        <>
                            <Button onClick={handleCancelSubscription} color="primary">
                                Sí
                            </Button>
                            <Button onClick={handleCloseSubscriptionSuccessDialog} color="primary" autoFocus>
                                No
                            </Button>
                        </>
                    }
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CollaboratorPage;
