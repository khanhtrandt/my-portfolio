import React from "react"
import styled from "styled-components"
export default function CurveBackground() {
  return (
    <Wrapper>
      <Background />
      <Star src="/images/waves/stars.svg" />
      <Wave
        src="/images/waves/curve-background1.svg"
        style={{ top: "510px" }}
      />
      <Wave
        src="/images/waves/curve-background2.svg"
        style={{ top: "540px" }}
      />
      <Wave
        src="/images/waves/curve-background3.svg"
        style={{ top: "570px" }}
      />
      <Wave
        src="/images/waves/curve-background4.svg"
        style={{ top: "600px" }}
      />
      {/* <Wave
        src="/images/waves/curve-background5.svg"
        style={{ top: "600px" }}
      /> */}
      <BottomWave
        src="/images/waves/curve-background6.svg"
        style={{ top: "630px" }}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
`
const Star = styled.img`
  position: absolute;
  @media (prefers-color-scheme: light) {
    display: none;
  }
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;
  mix-blend-mode: overlay;
`
const BottomWave = styled.img`
  position: absolute;
  z-index: -1;
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/curve-background6-dark.svg");
  }
`
const Background = styled.div`
  position: absolute;
  background: linear-gradient(180deg, #491edc 0%, rgba(73, 30, 220, 0.5) 100%);
  width: 100%;
  height: 900px;
  z-index: -1;
  @media (max-width: 450px) {
    height: 900px;
  }
`
