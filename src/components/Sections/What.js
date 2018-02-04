import React from 'react';
import {
  Hero,
  HeroBody,
  Container,
  Image,
  Notification,
  Columns,
  Column,
  Title,
} from 'bloomer';
import photo from '../Images/section-photo-2.jpg';

function What() {
  return (
    <Hero isSize="medium">
      <HeroBody>
        <Container>
          <Columns isVCentered>
            <Column isSize={6}>
              <Notification isColor="primary">
                <Title>Accomplished Speakers</Title>
                You&#39;ll hear from speakers with proven track records and having
                real-world case studies.We have pros from the e-commerce world
                who have grown world class businesses.
              </Notification>
              <Notification isColor="primary">
                <Title>Top-Notch Attendees</Title>
                Attendees will range from those operating million dollar
                e-commerce businesses to those just getting started. The wealth
                of experience, knowledge and enthusiasm will be mind blowing.
                Whether you are a savvy eCommerce professional or an eCommerce
                “newbie” you will have the opportunity to share your best tips
                and tricks, challenges and successes and learn from each other
                as well as from the professional speakers and sponsors.
              </Notification>
              <Notification isColor="primary">
                <Title>Informative Vendor Demos</Title>
                Make sure to arrive early so you can attend the vendor demo day!
                We&#39;ve made arrangements with various different software vendors
                to provide demos of their software, tools, and services. You&#39;ll
                find new products that can help you streamline your business or
                or new ideas to increase your online sales!
              </Notification>
            </Column>
            <Column isSize={6}>
              <Image src={photo} alt="The hosts" />
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
}

What.defaultProps = {};

What.propTypes = {};

export default What;
