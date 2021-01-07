import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Caption2, H3 } from "../styles/TextStyles"
export default function ProjectCard3() {
  return (
    <Wrapper>
      <TextWrapper>
        <Caption>THE COFFEE HOUSE</Caption>
        <Title>The digital retail in food and berverage chain</Title>
      </TextWrapper>
      <img
        src="/images/graphics/thecoffeehouse.png"
        alt="thecoffeehouse"
        className="thecoffeehouse"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 680px;
  /* width: 540px; */
  background: #f98900;
  box-shadow: 0px 10px 20px rgba(68, 35, 215, 0.15) inset 0 0 0 0.5px
    rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  overflow: hidden;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  .thecoffeehouse {
    position: absolute;
    top: 190px;
    left: 100px;
    @media (max-width: 450px) {
      left: 40px;
    }
  }
  :hover {
    box-shadow: 0px 10px 20px rgba(68, 35, 215, 0.3) inset 0 0 0 0.5px
      rgba(255, 255, 255, 0.6);
    transform: scale(1.02);
    @media (max-width: 768px) {
      transform: scale(1);
    }
    .thecoffeehouse {
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
  padding: 30px;
`
const Title = styled(H3)`
  color: ${themes.dark.text1};
  max-width: 360px;
`
const Caption = styled(Caption2)`
  font-weight: 600;
  color: ${themes.dark.text2};
`
