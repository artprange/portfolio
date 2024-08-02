import { HeaderContainer, LeftContainer } from './styles'

import { BracketsAngle, UserSquare } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'
import brFlag from '../../assets/brFlag.svg'
import ukFlag from '../../assets/ukFlag.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <h1>My portfolio</h1>
        <Link to="/">
          <img src={ukFlag} alt="" width={45} title="English" />
        </Link>
        <Link to="/about-br">
          <img src={brFlag} alt="" width={45} title="Português" />
        </Link>
      </LeftContainer>

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
