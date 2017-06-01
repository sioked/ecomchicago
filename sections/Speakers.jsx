import React from 'react';

import content from '../data/speakers';

function Speaker(speaker) {
  return (
    <a
      className="speaker"
      href={`speakers/${speaker.slug}`}
    >
      <img src={speaker.image} alt={speaker.name} />
      <h3>{speaker.name}</h3>
    </a>
  );
}

function Speakers() {
  return (
    <div id="speakers" className="section">
      <div className="container">
        <h1>{content.title}</h1>
        <div className="speaker-container">
          {
            content.data.speakers.map(speaker => (
              <Speaker {...speaker} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Speakers;
