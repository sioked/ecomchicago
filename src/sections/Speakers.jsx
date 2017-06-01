import React from 'react';

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

function Speakers(props) {
  return (
    <div id="speakers" className="section">
      <div className="container">
        <h1>Speakers</h1>
        <div className="speaker-container">
          {
            props.speakers && props.speakers.map(speaker => (
              <Speaker {...speaker.node} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Speakers;
