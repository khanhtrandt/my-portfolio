import React, { useEffect } from "react"
import styled from "styled-components"
import CommentCard from "./CommentCard"
import ProjectCard1 from "./ProjectCard1"
import ProjectCard2 from "./ProjectCard2"
import ProjectCard3 from "./ProjectCard3"
import ProjectCard4 from "./ProjectCard4"
import Aos from "aos"
import "aos/dist/aos.css"
export default function ProjectCard() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Wrapper>
      <ContentWrapper>
        <ProjectWrapper>
          <div data-aos="fade-up">
            <ProjectCard1 />
          </div>
          <div data-aos="fade-up">
            <ProjectCard2 />
          </div>
        </ProjectWrapper>
        <div data-aos="fade-right">
          <CommentCard />
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div data-aos="fade-left">
          <CommentCard />
        </div>
        <ProjectWrapper>
          <div data-aos="fade-up">
            <ProjectCard3 />
          </div>
          <div data-aos="fade-up">
            <ProjectCard4 />
          </div>
        </ProjectWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  transform: translateY(100px);
  display: grid;
  gap: 40px;
  /* justify-content: space-between; */
  grid-template-columns: auto auto;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 20px;
    transform: translateY(20px);
  }
`
const ContentWrapper = styled.div`
  display: grid;
  gap: 40px;
  @media (max-width: 450px) {
    gap: 0px;
    /* padding: 20px 0px; */
  }
`

const ProjectWrapper = styled.div`
  display: grid;
  gap: 40px;
  @media (max-width: 450px) {
    gap: 40px;
    /* padding: 20px 0px; */
  }
`
