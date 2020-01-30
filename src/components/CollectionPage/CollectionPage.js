import React from 'react';
import VerticalMenu from '../VerticalMenu/VerticalMenu';
import FooterPlayer from '../FooterPlayer/FooterPlayer';
import CollectionCardRow from '../CardsRow/CollectionCardRow/CollectionCardRow'
import {Link} from 'react-router-dom';
import './style.css'

export default function MainPage() {
  return (
      <>
    <VerticalMenu/>
    <FooterPlayer/>
    <div className="pagecontainer">
      <div className="tabsbar margindown">
      <Link>PLAYLISTS</Link>
      <Link>FEITO PARA VOCÊ</Link>
      <Link>MÚSICAS CURTIDAS</Link>
      <Link>ÁLBUNS</Link>
      <Link>ARTISTAS</Link>
      <Link>PODCASTS</Link>
      </div>
      <CollectionCardRow/>
    </div>
    </>
  );
}
