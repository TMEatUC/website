import React from "react"
import ProjectCard from "../components/project-card"
import ProfileCard from "../components/profile-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  ProfileCard: ({ imageLink, name, description, children, bg}) => {
      <ProfileCard imageLink={imageLink} name={name} description={description} children={children} bg={bg}>
          {children}
      </ProfileCard>
  }
}

export default components