import React from 'react';
import VerticalMenu from '../VerticalMenu/VerticalMenu';
import FooterPlayer from '../FooterPlayer/FooterPlayer';
import SearchCardRow from '../CardsRow/SearchCardRow/SearchCardRow'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function MainPage() {
  return (
      <>
    <VerticalMenu/>
    <FooterPlayer/>
    <div className="pagecontainer">
    <div id="searchinpdiv">
    <FontAwesomeIcon icon={faSearch}/>
        <input id="searchinp" type="search" q="googlesearch" placeholder="Busque artistas, músicas ou podcasts"/>
    </div>
        <h1>Navegar por todas as seções</h1>
      <SearchCardRow/>
    </div>
    </>
  );
}
