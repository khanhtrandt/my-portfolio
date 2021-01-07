import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Caption2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
export default function DownloadButton() {
  return (
    <Link to="http://m.me/khanhtrandt99">
      <Wrapper>
        <IconWrapper>
          <img src="/images/graphics/send.png" alt="message" />
          <Text>SEND A MASSEGE</Text>
        </IconWrapper>
      </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
  max-width: 245px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border: 2px solid ${themes.light.text1};
  box-sizing: border-box;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));
  border-radius: 12px;
  *,
  & {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  @media (prefers-color-scheme: dark) {
    border: 2px solid ${themes.dark.text1};
  }
  @media all and (min-width: 768px) {
    &:hover {
      background: ${themes.dark.text1};
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      border: 2px solid ${themes.dark.text1};

      @media (prefers-color-scheme: dark) {
        background: #491edc;
        border: 2px solid #491edc;
      }
    }
  }
`
const Text = styled(Caption2)`
  font-size: 20px;
  font-weight: 600;
  /* color: ${themes.dark.text1}; */
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`
const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  gap: 12px;
  align-items: center;
  color: ${themes.light.text1};
  /* ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(130%) saturate(120%);
  } */
`
