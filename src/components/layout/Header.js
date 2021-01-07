import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltips from "../tooltips/MenuTooltips"
import HamburberTooltips from "../tooltips/HamburgerTooltips"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHamburger, setIsHamburger] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()
  const hamburgerRef = useRef()
  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }
  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsOpen(false)
      setIsHamburger(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <Wrapper>
      <ContentWrapper>
        <Link to="/">
          <img src="/images/logos/logo_image.svg" alt="logo" className="logo" />
        </Link>
        <MenuWrapper count={menuData.length} ref={ref}>
          {menuData.map((item, index) =>
            item.link === "/downloads" ? (
              <MenuButton
                item={item}
                key={index}
                onClick={event => handleClick(event)}
              />
            ) : (
              <MenuButton item={item} key={index} />
            )
          )}
          <HamburgerWrapper onClick={() => setIsHamburger(!isHamburger)}>
            <img src="/images/icons/hamburger.svg" alt="hamburger" />
          </HamburgerWrapper>
        </MenuWrapper>
        <div ref={tooltipRef}>
          <MenuTooltips isOpen={isOpen} />
        </div>
        <div ref={hamburgerRef}>
          <HamburberTooltips isHamburger={isHamburger} />
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: #491edc;
`
const ContentWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 32px auto;
  width: 100%;
  justify-content: space-between;
  padding: 30px 30px;
  align-items: center;
  z-index: 3;
  background: #491edc;
  /* @media (max-width: 1450px) {
    padding: 40px 150px;
  }
  @media (max-width: 1400px) {
    padding: 40px 145px;
  }
  @media (max-width: 1350px) {
    padding: 40px 120px;
  }
  @media (max-width: 1300px) {
    padding: 40px 95px;
  }
  @media (max-width: 1250px) {
    padding: 40px 70px;
  }
  @media (max-width: 1200px) {
    padding: 40px 30px;
  } */
  @media (max-width: 450px) {
    padding: 20px 20px;
  }
  .logo {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      transform: scale(1.1) rotate(450deg);
      filter: hue-rotate(10deg) brightness(130%) saturate(120%);
    }
  }
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 30px;
  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media all and (min-width: 768px) {
    &:hover {
      transform: scale(1.1) rotate(360deg);
      filter: hue-rotate(10deg) brightness(130%) saturate(120%);
    }
  }
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
