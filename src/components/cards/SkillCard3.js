import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

import { MediumText, H3 } from "../styles/TextStyles"
export default function SkillCard3() {
  return (
    <ContentWrapper>
      <img src="/images/graphics/skill3.png" alt="skill3" className="skill3" />
      <SkillWrapper>
        <TextWrapper>
          <Title>Code Programming</Title>
          <Description>
            Made some projects in React with CSS and IOS App with SwiftUI, kwow
            about the hand-off process.
          </Description>
        </TextWrapper>
        <ContainerWrapper>
          <LogoWrapper>
            <img src="/images/graphics/react.png" alt="react" />
            <Text>React/CSS</Text>
          </LogoWrapper>
          <LogoWrapper>
            <img src="/images/graphics/swiftui.png" alt="swiftui" />
            <Text>SwiftUI</Text>
          </LogoWrapper>
        </ContainerWrapper>
      </SkillWrapper>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: grid;
  /* grid-template-columns: auto; */
  gap: 30px;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15) inset 0 0 0 0.5px
    rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  justify-items: center;
  @media all and (min-width: 768px) {
    &:hover {
      box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.3) inset 0 0 0 0.5px
        rgba(255, 255, 255, 0.6);
      transform: scale(1.05) translateY(-3px);
    }
  }
  @media (prefers-color-scheme: dark) {
    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15) inset 0 0 0 0.5px
      rgba(255, 255, 255, 0.6);
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 580px) {
    grid-template-columns: auto;
    padding: 30px 20px;
  }
`
const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 10px;
  }
  @media (max-width: 580px) {
    grid-template-columns: auto auto;
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
`
const SkillWrapper = styled.div`
  display: grid;
  gap: 16px;
`
const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: 48px auto;
  gap: 8px;
  justify-content: start;
  align-items: center;
`
const Text = styled(MediumText)`
  color: ${themes.light.text1};
  font-weight: 600;
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`
const Description = styled(MediumText)`
  color: ${themes.light.text2};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text2};
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled(H3)`
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
