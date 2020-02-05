import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  Field,
  Label,
  Control,
  Input,
  TextArea,
  Container,
  Title,
  Subtitle,
  Section,
  Hero,
  HeroBody,
  Button,
  Notification,
} from 'bloomer';

function ContactPage({ isSubmitted = false }) {
  /* eslint-disable no-restricted-globals */
  return (
    <div>
      <Hero isColor="info">
        <HeroBody>
          <Container>
            <Title>We&#39;d love to hear from you!</Title>
            <Subtitle>
              Send us a message using the form below and we&#39;ll get back to
              you as soon as we can!
            </Subtitle>
          </Container>
        </HeroBody>
      </Hero>
      <Section>
        <Container>
          {isSubmitted ? (
            <Notification isColor="primary">
              Got it! Thanks for the message!&nbsp;
              <Link to="/">Go Back</Link>
            </Notification>
          ) : null}
          <form
            action={`https://formspree.io/${process.env.GATSBY_FORM_TO_EMAIL}`}
            method="post"
          >
            <Field>
              <Label>Name:</Label>
              <Control>
                <Input placeholder="Your Name" name="name" />
              </Control>
            </Field>
            <Field>
              <Label>Email Address:</Label>
              <Control>
                <Input placeholder="Your Email Address" name="_replyto" />
              </Control>
            </Field>
            <Field>
              <Label>Message:</Label>
              <Control>
                <TextArea placeholder="How can we help?" name="message" />
              </Control>
            </Field>
            <input
              type="hidden"
              name="_next"
              value="//ecomchicago.com/contact-success"
            />
            <Button type="submit" isColor="danger">
              Submit
            </Button>
          </form>
        </Container>
      </Section>
    </div>
  );
}

ContactPage.defaultProps = {
  isSubmitted: false,
};

ContactPage.propTypes = {
  isSubmitted: PropTypes.bool,
};

export default ContactPage;
