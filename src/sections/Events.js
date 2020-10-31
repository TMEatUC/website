import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { CardContainer, Card } from '../components/Card';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const Events = () => (
  <Section.Container id='events' Background={Background}>
    <Section.Header name="TME Events" label="Events">
      {/* <StaticQuery query={graphql``}>

      </StaticQuery> */}


    </Section.Header>
  </Section.Container>
);

export default Events;