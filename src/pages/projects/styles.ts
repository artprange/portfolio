import styled from 'styled-components'

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 2rem;
  padding: 2rem;

  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
  }

  img {
    max-width: 20rem;
    border-radius: 8px;

    &:hover {
      opacity: 0.8;
    }
  }
`
