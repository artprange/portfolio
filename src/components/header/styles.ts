import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-00']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    object-fit: fill;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;

    align-items: start;

    h1 {
      display: none;
    }
  }
`
