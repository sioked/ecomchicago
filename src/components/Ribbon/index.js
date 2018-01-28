import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import tinycolor from 'tinycolor2';
import { Title } from 'bloomer';

const ribbonColor = '#fff';
const darkText = '#000';
const ribbonColorLight = tinycolor(ribbonColor).lighten(10).toHex();
const ribbonColorDark = tinycolor(ribbonColor).darken(10).toHex();

const ribbonBeforeAfter = {
  content: ' ',
  position: 'absolute',
  display: 'block',
  bottom: '-1em',
  border: `1.5em solid #${ribbonColorLight}`,
  zIndex: '-1',
};

const ribbonContentBeforeAfter = {
  content: ' ',
  position: 'absolute',
  display: 'block',
  borderStyle: 'solid',
  borderColor: `#${ribbonColorDark} transparent transparent`,
  bottom: '-1em',
};

const styles = {
  container: css({
    position: 'relative',
    zIndex: '1',
    bottom: '0px',
    marginBottom: '1.7rem',
  }),
  ribbon: css({
    '&::before': {
      ...ribbonBeforeAfter,
      left: '-2em',
      borderRightWidth: '1.5em',
      borderLeftColor: 'transparent',
    },
    '&::after': {
      ...ribbonBeforeAfter,
      right: '-2em',
      borderLeftWidth: '1.5em',
      borderRightColor: 'transparent',
    },
    maxWidth: '400px',
    fontSize: '16px',
    position: 'relative',
    background: ribbonColor,
    color: darkText,
    fontWeight: 'normal',
    textAlign: 'center',
    padding: '0.6em 1em',
    margin: '2em auto 0em',
  }),
  ribbonContent: css({
    ':before': {
      ...ribbonContentBeforeAfter,
      left: 0,
      borderWidth: '1em 0 0 1em',
    },
    ':after': {
      ...ribbonContentBeforeAfter,
      right: 0,
      borderWidth: '1em 1em 0 0',
    },
  }),
};

function ribbon({...props}) {
  return (
    <div {...styles.container} className="ribbon-container">
      <div {...styles.ribbon} className="ribbon">
        <div {...styles.ribbonContent} className="ribbon-content">
          <Title isSize={4}>{props.children}</Title>
        </div>
      </div>
    </div>
  );
}

ribbon.defaultProps = {};

ribbon.propTypes = {
  children: PropTypes.node,
};
export default ribbon;
