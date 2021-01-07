import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MenuButton(props) {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem>{item.title}</MenuItem>
    </Link>
  )
}
const MenuItem = styled.div`
  color: rgba(255, 255, 255, 1);
  align-items: center;
  padding: 10px 10px;
  transition: 0.5s ease-out;
  @media all and (min-width: 768px) {
    &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }
  }
`
