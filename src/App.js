import logo from './logo.svg';
import './App.css';
import  teams from'./teams.json';
import  React from 'react';
import TeamInfo from './components/TeamInfo'

function App() {
  return (
    <div class="d-flex justify-content-center flex-column">   {teams.map(team => <TeamInfo  team = {team} />)}
    </div>

  );
}

export default App;
