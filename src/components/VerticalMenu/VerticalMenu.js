import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBookReader, faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function VerticalMenu() {
  return (
    <div className="verticalcontainer">
      <Link to="/"><FontAwesomeIcon icon={faHome}/> Início</Link>
      <Link to="/search"><FontAwesomeIcon icon={faSearch}/> Buscar</Link>
      <Link to="/collection"><FontAwesomeIcon icon={faBookReader}/> Sua Biblioteca</Link>

      <div className="playlistsdiv">
        <h6>PLAYLISTS</h6>
        <a href="/" className="plus"><FontAwesomeIcon icon={faPlus}/>Criar playlist</a>
        <div className="playlistsbox">
          <ul>
            <li>
              <a href="/">Final Fantasy Piano</a>
            </li>
            <li>
              <a href="/">Chrono Trigger OST</a>
            </li>
            <li>
              <a href="/">Billie Eilish</a>
            </li>
            <li>
              <a href="/">Slipknot Albuns</a>
            </li>
            <li>
              <a href="/">Meu novo eu</a>
            </li>
            <li>
              <a href="/">Lo-Fi Hip Hop Music</a>
            </li>
            <li>
              <a href="/">Relaxing Music</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
