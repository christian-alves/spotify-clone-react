import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStepBackward, faStepForward, faRandom,faRedo } from '@fortawesome/free-solid-svg-icons'
// import { Container } from './styles';

export default function FooterPlayer() {
  return (
    <div className="footerplayercontainer">
        <div className="row">
            <button><FontAwesomeIcon icon={faRandom}/></button>
            <button><FontAwesomeIcon icon={faStepBackward}/></button>
            <button className="play"><FontAwesomeIcon icon={faPlay}/></button>
            <button><FontAwesomeIcon icon={faStepForward}/></button>
            <button><FontAwesomeIcon icon={faRedo}/></button>
        </div>
    </div>
  );
}
