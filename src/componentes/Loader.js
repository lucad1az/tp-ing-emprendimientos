import React from 'react';
import "../styles/LoaderStyles.css"
import CircularProgress from '@mui/material/CircularProgress';



function Loader() {
    return (
        <div className='loader'>
        <h1>¡Bienvenido!</h1>
        <div className="loader-circle">
            <CircularProgress />
        </div>
    </div>

    )
}

export default Loader;