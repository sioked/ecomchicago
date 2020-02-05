import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css, after } from 'glamor';
import { Section, Container, Content, Title, Hero, HeroBody } from 'bloomer';
import Markdown from 'react-markdown';
import MdLink from '../components/MdLink';
import RegistrationButton from '../components/Buttons/Registration.js';
import Layout from '../components/layout';

const clearFloat = css(
  after({
    content: ' ',
    display: 'table',
    clear: 'both',
  }),
);

const mdContent = css({
  '& a': {
    'text-decoration': 'underline',
  },
});

function PageTemplate(props) {
  const page = props.data.datoCmsPage;
  return (
    <Layout>
      <div>
        <Hero
          isSize="medium"
          isColor="info"
          className="is-bold"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5) ), url(${page.splashImage.fixed.src})`,
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <HeroBody>
            <Container>
              <Title>{page.title}</Title>
            </Container>
          </HeroBody>
        </Hero>
        <Section>
          <Container>
            <Content {...clearFloat}>
              <Markdown
                source={page.content}
                {...mdContent}
                renderers={{
                  link: MdLink,
                }}
                className={mdContent}
              />
            </Content>
            <RegistrationButton />
            <br />
            <Link to="/">&#8678; Go Back</Link>
          </Container>
        </Section>
      </div>
    </Layout>
  );
}
PageTemplate.propTypes = {
  data: PropTypes.shape({
    datoCmsPage: PropTypes.shape({
      slug: PropTypes.string,
      content: PropTypes.string,
      splashImage: PropTypes.shape({
        resolutions: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      title
      content
      splashImage {
        fixed(width: 1200, imgixParams: { blur: 5, auto: "compress" }) {
          src
        }
      }
    }
  }
`;
