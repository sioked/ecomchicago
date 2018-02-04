import React from 'react';
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
import qs from 'query-string';
import { get } from 'lodash';

function Contact() {
  /* eslint-disable no-restricted-globals */
  const isSubmitted = get(qs.parse(location.search), 'submitted');
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
              Got it! Thanks for the message!
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
              value="//ecomchicago.com/contact?submitted=true"
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

Contact.defaultProps = {};

Contact.propTypes = {};

export default Contact;
