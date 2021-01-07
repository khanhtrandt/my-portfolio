import React, { useEffect } from "react"
import styled from "styled-components"
import SkillCard1 from "./SkillCard1"
import SkillCard2 from "./SkillCard2"
import SkillCard3 from "./SkillCard3"
import Aos from "aos"
import "aos/dist/aos.css"
export default function SkillCard() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Wrapper>
      <div data-aos="fade-up">
        <SkillCard1 />
      </div>
      <div data-aos="fade-up">
        <SkillCard2 />
      </div>
      <div data-aos="fade-up">
        <SkillCard3 />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  overflow: hidden;
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
  @media (max-width: 450px) {
    justify-content: center;
    padding: 20px;
    transform: translateY(-100px);
    gap: 20px;
  }
`
