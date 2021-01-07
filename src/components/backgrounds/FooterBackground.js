import React from "react"
import styled from "styled-components"
export default function FooterBackground() {
  return (
    <Wrapper>
      <Wave src="/images/waves/footer-wave1.svg" alt="wave" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  transform: translateY(180px);
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;
  /* mix-blend-mode: overlay; */
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/footer-wave1-dark.svg");
  }
`

// const BottomWave = styled.img`
//   position: absolute;
//   z-index: -1;
//   @media (prefers-color-scheme: dark) {
//     content: url("/images/waves/curve-background6-dark.svg");
//   }
// `
// const Background = styled.div`
//   position: absolute;
//   background: linear-gradient(180deg, #e8ebf7 0%, #491edc 100%);
//   width: 100%;
//   height: 500px;
//   z-index: -1;
//   @media (max-width: 450px) {
//     height: 900px;
//   }
// `
