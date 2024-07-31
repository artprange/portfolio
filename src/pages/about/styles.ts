import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 3rem;
  span {
    color: ${(props) => props.theme['green-500']};
  }
`

export const TextContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;

  h1 {
    letter-spacing: 1.2px;
    line-height: 140%;
    padding-bottom: 5rem;
  }

  span {
    color: ${(props) => props.theme['green-500']};
  }
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    line-height: 100%;
    letter-spacing: 1px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
