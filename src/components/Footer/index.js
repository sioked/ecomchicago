import React from 'react';

import {
  Footer as BFooter,
  Container,
  Columns,
  Column,
  Title,
  Content,
} from 'bloomer';
import content from '../../constants/content';

function Footer() {
  return (
    <BFooter>
      <Container>
        <Columns>
          <Column isSize="1/2">
            <Title isSize="6">{content.footerTitle}</Title>
            <Columns>
              <Column isSize="1/2">
                <ul className="is-size-6">
                  <li>
                    <a href="/#about">About</a>
                  </li>
                  <li>
                    <a href="/#speakers">Speakers</a>
                  </li>
                  <li>
                    <a href="/#sponsors">Sponsors</a>
                  </li>
                  <li>
                    <a href="/travel">Travel</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </Column>
              <Column isSize="1/2">
                <ul className="is-size-6">
                  <li>
                    <a href="http://2016.ecomchicago.com">ecomChicago 2016</a>
                  </li>
                  <li>
                    <a href="http://2017.ecomchicago.com">ecomChicago 2017</a>
                  </li>
                  <li>
                    <a href="http://2018.ecomchicago.com">ecomChicago 2018</a>
                  </li>
                  <li>
                    <a href="http://2019.ecomchicago.com">ecomChicago 2019</a>
                  </li>
                </ul>
              </Column>
            </Columns>
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
