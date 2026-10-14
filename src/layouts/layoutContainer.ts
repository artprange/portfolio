import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  @media (max-width: 400px) {
    padding: 1rem;
  }
`
