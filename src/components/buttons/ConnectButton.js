import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Caption2 } from "../styles/TextStyles"
export default function ConnectButton() {
  return (
    <Link to="https://www.linkedin.com/in/khanhtrandt99/">
      <Wrapper>
        <IconWrapper>
          <img src="/images/icons/linkedin.svg" alt="linkedin" />
          <Text>Connect</Text>
        </IconWrapper>
        <img
          src="/images/icons/arrow-right.svg"
          className="arrow"
          alt="arrow"
        />
      </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
  max-width: 198px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 10px;
  align-items: center;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));
  border-radius: 12px;
  *,
  & {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  @media all and (min-width: 768px) {
    &:hover {
      background: #491edc;
      border: 2px solid #491edc;
      box-shadow: 0px 5px 10px rgba(114, 83, 227, 0.25);
      border-radius: 12px;
      transform: scale(1.05) translateY(-3px);

      .arrow {
        transform: rotate(360deg);
      }
    }
  }
`
const Text = styled(Caption2)`
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
`
const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  gap: 8px;
  align-items: center;
  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(130%) saturate(120%);
  }
`
