import React from 'react';

import CollectionCard from '../../Cards/CollectionCard/CollectionCard'

export default function CardsRow() {
  return (
      <div className="row margin">
    <CollectionCard/>
    <CollectionCard/>
    <CollectionCard/>
    <CollectionCard/>
    <CollectionCard/>
    <CollectionCard/>
    </div>
  );
}
