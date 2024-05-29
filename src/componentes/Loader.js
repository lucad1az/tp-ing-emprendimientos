import React from 'react';
import LoaderStyles from "../styles/LoaderStyles.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


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