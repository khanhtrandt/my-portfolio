import React from "react"
import styled, { keyframes } from "styled-components"
// import MockupAnimation from "../animations/mockupAnimation"
import CurveBackground from "../backgrounds/CurveBackground"
// import WaveBackground from "../backgrounds/WaveBackgrounds"
import ConnectButton from "../buttons/ConnectButton"
import { H1, LargeText } from "../styles/TextStyles"
export default function HeroSection() {
  return (
    <Wrapper>
      {/* <WaveBackground /> */}
      <CurveBackground />
      <ContentWrapper>
        <ButtonWrapper>
          <TextWrapper>
            <TitleWrapper>
              <img
                src="/images/logos/logo_text.svg"
                alt="icon"
                className="logo"
              />
              <Title>
                UX/UI Designer <br />
                have an strong passion <br />
                with technology products
              </Title>
            </TitleWrapper>
            <Description>
              Currently, exploring the world of user experience in digital
              product design for 2 years and make some awesome side projects.{" "}
            </Description>
          </TextWrapper>
          <ConnectButton />
        </ButtonWrapper>
        <MockupAnimationWrapper>
          {/* <MockupAnimation /> */}
          <img
            src="/images/graphics/mockup.png"
            alt="mockup"
            className="mockup"
          />
        </MockupAnimationWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
const animation = keyframes` 
from { opacity: 0; transform: translateY(-10px); filter: blur(10px); } 
to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`
const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 30px;
  height: 900px;
  display: grid;
  grid-template-columns: 480px auto;
  gap: 80px;
  align-items: start;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px;
    gap: 0px;
    height: 900px;
    /* transform: translateY(-60px); */
  }
`
const TextWrapper = styled.div`
  max-width: 480px;
  display: grid;
  gap: 16px;
  @media (max-width: 450px) {
    gap: 8px;
  }
`
const ButtonWrapper = styled.div`
  display: grid;
  gap: 36px;
  padding: 20px 0px;
  > * {
    :nth-child(2) {
      opacity: 0;
      animation: ${animation} 1s 0.8s forwards;
    }
  }
`
const TitleWrapper = styled.div`
  display: grid;
  gap: 8px;
  .logo {
    opacity: 0;
    animation: ${animation} 1s 0.2s forwards;
  }

  /* > * {
    opacity: 0;
    animation: ${animation} 1s 0.3s forwards;
  }
  :nth-child(1) {
    opacity: 0;
    animation: ${animation} 1s 0.2s forwards;
  }
  :nth-child(2) {
    opacity: 0;
    animation: ${animation} 1s 0.4s forwards;
  } */
`
const Title = styled(H1)`
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 1);
  opacity: 0;
  animation: ${animation} 1s 0.4s forwards;
  @media (max-width: 450px) {
    font-size: 28px;
  }
  /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    background: rgba(255, 255, 255, 1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  } */
`
const Description = styled(LargeText)`
  max-width: 400px;
  font-weight: 700;
  font-size: 17px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  animation: ${animation} 1s 0.6s forwards;
  @media (max-width: 450px) {
    font-size: 15px;
    font-weight: 600;
  }
`
const MockupAnimationWrapper = styled.div`
  opacity: 0;
  animation: ${animation} 1s 1s forwards;
  @media (max-width: 450px) {
    display: none;
  }
`
