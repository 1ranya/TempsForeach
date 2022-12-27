import React, { useState } from 'react'
import { HeaderContainer, Item, LogoContainer, Logo, Text } from './Components.style'
import ThemesLogo from '../assets/Paint Palette.svg'

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  return (
    <HeaderContainer
      isMenuOpened={isMenuOpened}
    >
        <Item>
          <LogoContainer onClick={() => handleMenu()}>
            <Logo src={ThemesLogo}></Logo>
          </LogoContainer>
          {isMenuOpened && 
          <Text>Themes</Text>}
        </Item>
    </HeaderContainer>
  )
}
