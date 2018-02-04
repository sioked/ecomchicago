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
          <Column>
            <Title isSize="5">Attributions</Title>
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
