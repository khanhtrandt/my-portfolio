import React from "react"
import { themes } from "../styles/ColorStyles"
import styled from "styled-components"
import FooterBackground from "../backgrounds/FooterBackground"
import { MediumText } from "../styles/TextStyles"
export default function Footer() {
  return (
    <Wrapper>
      <FooterBackground />
      <ContentWrapper>
        <FooterWrapper>
          <img src="/images/logos/logo_text.svg" alt="logo" />
          <Text>
            2020 All rights reserved <br /> Designed and code by Khanh Trandt
          </Text>
        </FooterWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
`

const FooterWrapper = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
  transform: translateY(435px);
`
const Text = styled(MediumText)`
  max-width: 480px;
  text-align: center;
  color: ${themes.dark.text1};
`
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 30px;
`
