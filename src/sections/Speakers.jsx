import React from 'react';

function Speaker(speaker) {
  console.log(speaker);
  return (
    <a
      className="speaker"
      href={speaker.fields.slug}
    >
      <div className="img-container">
        <img src={speaker.frontmatter.image} alt={speaker.frontmatter.name} />
      </div>
      <p>{speaker.frontmatter.name}</p>
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
