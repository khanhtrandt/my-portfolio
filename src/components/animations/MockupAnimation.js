import React from "react"
import styled from "styled-components"
export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
      <div className="mockup4" />
      <div className="mockup5" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 580px;
  position: relative;
  perspective: 5000;
  perspective-origin: top left;
  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: top right;
  }
  * {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    transform: rotateX(0deg) rotateY(0deg);
    :hover {
      transform: scale(1);
      filter: brightness(140%) saturate(120%);
    }
  }
  /* &.mockup1 {
    transform: translate(-30px, -30px);
    transition-delay: 0.1s;
  }
  &.mockup2 {
    transform: translate(0, -30px);
    transition-delay: 0.2s;
  }
  &.mockup3 {
    transition-delay: 0s;
  }
  &.mockup4 {
    transform: translate(-120px, 30px);
    transition-delay: 0.1s;
  }
  &.mockup5 {
    transform: translate(-90px, 30px);
    transition-delay: 0.2s;
  } */
  .mockup1 {
    position: absolute;
    width: 85px;
    height: 390px;
    left: 15px;
    top: 0px;
    background: url("/images/animations/mockup1.svg"), rgba(255, 255, 255, 0.3);

    border: 0.273134px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 8px 16px rgba(105, 71, 255, 0.15);
    backdrop-filter: blur(
      40px
    ); /* Note: backdrop-filter has minimal browser support */
    border-radius: 4px;
  }
  .mockup2 {
    position: absolute;
    width: 520px;
    height: 152px;
    left: 60px;
    top: 242px;
    box-sizing: border-box;
    background: url("/images/animations/mockup2.svg"), rgba(255, 255, 255, 0.3);

    border: 0.27304px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 8px 16px rgba(105, 71, 255, 0.15);
    backdrop-filter: blur(
      40px
    ); /* Note: backdrop-filter has minimal browser support */
    border-radius: 4px;
  }
  .mockup3 {
    position: absolute;
    width: 512px;
    height: 94px;
    left: 75px;
    top: 138px;
    box-sizing: border-box;
    background: url("/images/animations/mockup3.svg"), rgba(255, 255, 255, 0.3);
    border: 0.342305px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(
      40px
    ); /* Note: backdrop-filter has minimal browser support */
    border-radius: 4px;
  }
  .mockup4 {
    position: absolute;
    width: 167px;
    height: 128px;
    left: 110px;
    top: 0px;
    background: url("/images/animations/mockup4.svg"), rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(
      40px
    ); /* Note: backdrop-filter has minimal browser support */
    border-radius: 4px;
  }
  .mockup5 {
    position: absolute;
    width: 312px;
    height: 128px;
    left: 285px;
    top: 0px;
    background: url("/images/animations/mockup5.svg"), rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    backdrop-filter: blur(
      40px
    ); /* Note: backdrop-filter has minimal browser support */
    border-radius: 4px;
  }
`
