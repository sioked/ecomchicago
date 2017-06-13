import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="speaker-name">{speaker.frontmatter.name}</div>
      <div className="speaker-short">{speaker.frontmatter.short}</div>
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
              <Speaker {...speaker.node} key={speaker.node.frontmatter.name} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

Speakers.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        name: PropTypes.string,
        short: PropTypes.string,
        image: PropTypes.string,
      }),
    }),
  })),
};

export default Speakers;
