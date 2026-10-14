import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #30332e;
  .brand {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.035em;
    color: #eeeeea;
  }
  .brand span {
    white-space: nowrap;
  }
  .brand strong {
    color: #b5d6ad;
    font-weight: 800;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    .brand {
      width: 100%;
      font-size: 1.15rem;
    }
  }
  nav {
    display: flex;
    gap: 2rem;
  }
  nav a {
    font-size: 0.85rem;
    color: #9c9f9c;
    padding: 0.5rem 0;
  }
  nav a:hover,
  nav a.active {
    color: #b5d6ad;
  }
  @media (max-width: 480px) {
    nav {
      gap: 1rem;
    }
  }
`
export const LeftContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  a {
    padding: 0.5rem;
    font-size: 0.7rem;
    color: #9c9f9c;
    border-radius: 3px;
  }
  a[aria-current='true'] {
    color: #b5d6ad;
    background: #283023;
  }
  a:hover {
    color: #eeeeea;
  }
`
