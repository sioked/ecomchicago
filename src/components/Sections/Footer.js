import React from 'react';

import {
  Footer as BFooter,
  Container,
  Columns,
  Column,
  Title,
  Content,
} from 'bloomer';

function Footer() {
  return (
    <BFooter>
      <Container>
        <Columns>
          <Column isSize="1/2" >
            <Title isSize="6">&copy; ecomChicago 2018</Title>
            <ul className="is-size-6">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#details">Details</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </Column>
          <Column isSize="1/2" className="has-text-right-tablet">
            <Title isSize="6">Attributions</Title>
            <Content isSize="small">
              Podium icon by arejoenah from the Noun Project
            </Content>
          </Column>
        </Columns>
      </Container>
    </BFooter>
  );
}

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
