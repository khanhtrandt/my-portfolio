import React, { useEffect } from "react"
import styled from "styled-components"
import MessageButton from "../buttons/MessageButton"
import PortfolioButton from "../buttons/PortfolioButton"
import ResumeButton from "../buttons/ResumeButton"
import InfoCard from "../cards/InfoCard"
import { themes } from "../styles/ColorStyles"
import { Caption2, H1, MediumText } from "../styles/TextStyles"
import Aos from "aos"
import "aos/dist/aos.css"
export default function ConnectSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Wrapper>
      <ContainerWrapper>
        <ContentWrapper>
          <PromoWrapper>
            <CaptionWrapper>
              <img src="/images/graphics/message.png" alt="message" />
              <Caption>Send me A Message</Caption>
            </CaptionWrapper>
            <TextWrapper>
              <Title>Let’s connect now!</Title>
              <Description>
                I'm ready to the new jobs. If you need a UX/UI Designer contact
                me for the conversation.
              </Description>
            </TextWrapper>
          </PromoWrapper>
          <ButtonWrapper>
            <ResumeButton />
            <PortfolioButton />
            <MessageButton />
          </ButtonWrapper>
        </ContentWrapper>
        <div data-aos="fade-up">
          <InfoCard />
        </div>
      </ContainerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 60px;
  padding: 30px 30px;
  overflow: hidden;
  transform: translateY(180px);
  @media (max-width: 450px) {
    padding: 0 20px;
    gap: 30px;
    transform: translateY(120px);
    /* transform: translateY(-120px); */
  }
`
const ButtonWrapper = styled.div`
  display: grid;
  gap: 20px;
`
const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 480px auto;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 980px) {
    grid-template-columns: auto;
    justify-content: center;
    gap: 60px;
  }
`
const ContentWrapper = styled.div`
  display: grid;
  gap: 36px;
`
const CaptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 28px auto;
  gap: 4px;
  align-items: center;
`
const PromoWrapper = styled.div`
  display: grid;
  gap: 8px;
`
const TextWrapper = styled.div`
  max-width: 480px;
  display: grid;
  gap: 16px;
  @media (max-width: 450px) {
    gap: 8px;
  }
`
const Title = styled(H1)`
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: ${themes.light.text1};

  @media (max-width: 450px) {
    font-size: 28px;
    max-width: 335px;
  }

  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`
const Description = styled(MediumText)`
  max-width: 400px;
  font-weight: 600;
  font-size: 17px;
  line-height: 140%;
  /* color: ${themes.dark.text1}; */
  color: ${themes.light.text2};
  @media (max-width: 450px) {
    font-size: 15px;
    font-weight: 500;
    max-width: 320px;
  }
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text2};
  }
`
const Caption = styled(Caption2)`
  font-weight: 600;
  color: ${themes.light.text2};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text2};
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`
