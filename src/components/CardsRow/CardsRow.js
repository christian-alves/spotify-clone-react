import React from 'react';

import Cards from '../Cards/Cards'

export default function CardsRow() {
  return (
      <div className="row margin">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
  );
}
