// resources/js/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../sass/app.scss';


export default function App(){
    return(
        <div>
            <h1>How To Install React in Laravel 9 with Vite</h1>
        </div>
        
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);