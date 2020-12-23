import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Triangle from '../components/Triangle';
import { CardContainer, Card } from '../components/Card';
import Section from '../components/Section';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const getMonthDayYear = (date) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date(date)

  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}


const Meeting = ({meetingName, date, speaker, videoLink}) => (
  <a
    href={videoLink}
    target="__blank"
    title={meetingName}
    style={{ textDecoration: 'none' }}
  >
    <Card pb={4}>
      <div style={{
          display: 'flex', 
          justifyContent: 'flex-end',
          flexDirection: 'column',
          height: '25%'
        }}
      >
        <EllipsisHeading m={3} p={0} color="text">
          {meetingName}
        </EllipsisHeading>
      </div>
      
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <iframe 
          title={meetingName} 
          width="400" 
          height="200" 
          src={`https://www.youtube.com/embed/${  videoLink.substring(32)}`} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
      
      <Text m={3} color="text">
        {speaker}
      </Text>
      <Text m={3} color="text">
        {getMonthDayYear(date)}
      </Text>
    </Card>
  </a>
)


Meeting.propTypes = {
  meetingName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired
}

const Meetings = () => (
  <Section.Container id="meetings" Background={Background}>
    <Section.Header name="Meetings" icon="" label="notebook" />
    <StaticQuery
      query={graphql`
        query MeetingsQuery {
          contentfulAbout {
            meetings {
              id
              meetingName
              date
              speaker
              videoLink
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.meetings.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Meeting {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
)

export default Meetings;