import React from 'react';
import ReactDOM from 'react-dom/client';
import '../sass/app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home-page/home-page.component';
import LeaguesPage from './pages/leagues-page/leagues-page.component';
import TeamsPage from './pages/teams-page/teams-page.component';
import TeamDetailsPage from './pages/team-details-page/team-details-page.component';

export default function App(){
    return(
        <div>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/leagues/:sport" element={<LeaguesPage />} />
              <Route path="/teams/:league" element={<TeamsPage />} />
              <Route path="/team/:teamId" element={<TeamDetailsPage />} />
            </Routes>
        </div>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);