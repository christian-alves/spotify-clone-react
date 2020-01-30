import React from 'react';
import VerticalMenu from '../VerticalMenu/VerticalMenu';
import FooterPlayer from '../FooterPlayer/FooterPlayer';
import CardsRow from '../CardsRow/CardsRow'
import {Link} from 'react-router-dom';
import './style.css'

export default function MainPage() {
  return (
      <>
    <VerticalMenu/>
    <FooterPlayer/>
    <div className="pagecontainer">
      <div className="tabsbar">
      <Link>EM DESTAQUE</Link>
      <Link>PODCASTS</Link>
      <Link>PARADAS</Link>
      <Link>GÊNEROS</Link>
      <Link>LANÇAMENTOS</Link>
      <Link>DESCOBRIR</Link>
      </div>

      <h1>Feito para você</h1>
      <p>Quanto mais você escutar, melhores recomendações vai receber.</p>
      <CardsRow/>
    </div>
    </>
  );
}
