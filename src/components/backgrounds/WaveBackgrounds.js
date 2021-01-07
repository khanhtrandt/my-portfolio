import React from "react"
import styled from "styled-components"
export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Star src="/images/waves/stars.svg" />
      <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "100px", filter: "blur(60px)" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "360px" }} />
      <BottomWave src="/images/waves/hero-wave3.svg" style={{ top: "640px" }} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
`
const Star = styled.div``
const Wave = styled.img`
  position: absolute;
  z-index: -1;
`
const Background = styled.div`
  position: absolute;
  background: linear-gradient(180deg, #491edc 0%, rgba(73, 30, 220, 0.5) 100%);
  width: 100%;
  height: 800px;
  z-index: -1;
`
const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave4.svg");
  }
`
