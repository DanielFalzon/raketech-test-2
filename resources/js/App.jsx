// resources/js/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/'

export default function App(){
    return(
        <h1>How To Install React in Laravel 9 with Vite</h1>
    );
}

if(document.getElementById('root')){
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}