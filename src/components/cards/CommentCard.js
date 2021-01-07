import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Caption2, MediumText } from "../styles/TextStyles"
export default function CommentCard() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Text>
            With the constant goal of pushing design boundaries and maintaining
            a high standard for usability & user experience, I have consistently
            your jobs.
          </Text>
          <Text>
            For more than 5 years now, design has been the central piece of my
            world. On this fast and mind-blowing journey.
          </Text>
        </TextWrapper>
        <PersonWrapper>
          <img src="/images/graphics/person.png" alt="person" />
          <TitleWrapper>
            <Name>Tran Duy Khanh</Name>
            <Jobs>Founder of Newbies</Jobs>
          </TitleWrapper>
        </PersonWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(68, 35, 215, 0.1) inset 0 0 0 0.5px
    rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media all and (min-width: 768px) {
    &:hover {
      box-shadow: 0px 10px 20px rgba(68, 35, 215, 0.3) inset 0 0 0 0.5px
        rgba(255, 255, 255, 0.6);
      transform: scale(1.02);
    }
  }
  @media (prefers-color-scheme: dark) {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 0px rgba(68, 35, 215, 0.1) inset 0 0 0 00px
      rgba(255, 255, 255, 0.6);
  }
  @media (max-width: 450px) {
    display: none;
  }
`
const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
`
const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
`
const PersonWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  justify-items: start;
  gap: 16px;
`
const TitleWrapper = styled.div`
  display: grid;
`
const Name = styled(Caption2)`
  font-size: 20px;
  line-height: 130%;
  font-weight: 700;
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`

const Jobs = styled(MediumText)`
  color: ${themes.light.text2};
  line-height: 120%;
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text2};
  }
`

const Text = styled(MediumText)`
  font-weight: 500;
  line-height: 140%;
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`
