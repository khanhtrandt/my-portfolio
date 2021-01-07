import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { menuData } from "../../data/menuData"
export default function HamburgerTooltips(props) {
  const { isHamburger } = props
  return (
    <Wrapper isHamburger={isHamburger}>
      {menuData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: absolute;
  top: 90px;
  right: 30px;
  background: rgba(15, 14, 71, 0.7);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 12px;
  padding: 16px;
  opacity: ${props => (props.isHamburger ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 4px;
  grid-template-columns: 120px;
  transition: 0.3s ease-in-out;
  visibility: ${props => (props.isHamburger ? "visible" : "hidden")};
  transform: ${props =>
    props.isHamburger
      ? "skewY(0) rotate(0) translateY(0)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
  @media (max-width: 450px) {
    right: 20px;
    top: 70px;
  }
`
