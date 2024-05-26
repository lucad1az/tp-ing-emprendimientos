import React from 'react';
import LoaderStyles from "../styles/LoaderStyles.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Loader() {
    return (
        <div className='loader'>
            <h1>¡Bienvenido!</h1>
            <CircularProgress />
        </div>

    )
}

export default Loader;