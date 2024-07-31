import { HeaderContainer } from './styles'

import { BracketsAngle, UserSquare } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <h1>My portfolio</h1>

      <nav>
        <NavLink to="/" title="About">
          <UserSquare size={24} />
        </NavLink>
        <NavLink to="/projects" title="Projects">
          <BracketsAngle size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
