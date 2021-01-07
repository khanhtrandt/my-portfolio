import { themes } from "../styles/ColorStyles"
import { MediumText } from "../styles/TextStyles"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
export default function InfoCard() {
  return (
    <Wrapper>
      <img src="/images/graphics/design.png" alt="design" />
      <Text>Find more my projects on some social platform through</Text>
      <IconWrapper>
        <Link to="/">
          <IconItem>
            <img src="/images/icons/dribbble.svg" alt="dribbble" />
            <Title>Dribbble</Title>
          </IconItem>
        </Link>
        <Link to="/">
          <IconItem>
            <img src="/images/icons/behance.svg" alt="behance" />
            <Title>Behance</Title>
          </IconItem>
        </Link>
        <Link to="/">
          <IconItem>
            <img src="/images/icons/spotify.svg" alt="spotify" />
            <Title>Spotify</Title>
          </IconItem>
        </Link>
        <Link to="/">
          <IconItem>
            <img src="/images/icons/medium.svg" alt="medium" />
            <Title>Medium</Title>
          </IconItem>
        </Link>
        <Link to="/">
          <IconItem>
            <img src="/images/icons/instagram.svg" alt="instagram" />
            <Title>Instagram</Title>
          </IconItem>
        </Link>
        <Link to="/">
          <IconItem>
            <img src="/images/icons/linkedin-alt.svg" alt="linkedin" />
            <Title>Linkedin</Title>
          </IconItem>
        </Link>
      </IconWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  justify-items: center;
  display: grid;
  gap: 10px;
  padding: 30px;
  background: rgba(73, 30, 220, 0.7);
  backdrop-filter: blur(20px);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(68, 35, 215, 0.1) inset 0 0 0 0.5px
    rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (max-width: 450px) {
    padding: 30px 20px;
    gap: 20px;
  }
`
const Title = styled(MediumText)`
  color: ${themes.dark.text1};
  font-weight: 600;
  width: 108px;
`
const Text = styled(MediumText)`
  font-weight: 500;
  line-height: 140%;
  color: ${themes.dark.text1};
  max-width: 560px;
  text-align: center;
  padding: 0px 30px;
  @media (max-width: 450px) {
    padding: 0px 0px;
  }
`
const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  justify-content: center;
  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`
const IconItem = styled.div`
  display: grid;
  padding: 10px 15px;
  grid-template-columns: 32px auto;
  gap: 10px;
  align-items: center;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media all and (min-width: 768px) {
    &:hover {
      background: #c1366a;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
  }
`
