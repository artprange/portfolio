import styled from 'styled-components'

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  background: ${(props) => props.theme['gray-900']};
  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme['green-500']};
  }

  .thumb {
    display: block;
    line-height: 0;

    img {
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      transition: opacity 0.3s ease;
    }

    &:hover img {
      opacity: 0.8;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1.25rem 1.25rem;
    flex: 1;
  }

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-100']};
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-400']};
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    list-style: none;

    li {
      font-size: 0.75rem;
      padding: 0.1875rem 0.5rem;
      border-radius: 999px;
      color: ${(props) => props.theme['green-300']};
      background: ${(props) => props.theme['gray-700']};
    }
  }

  .links {
    display: flex;
    gap: 1rem;
    margin-top: auto;
    padding-top: 0.5rem;

    a {
      font-size: 0.875rem;
      color: ${(props) => props.theme['green-300']};
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s ease;

      &:hover {
        border-bottom-color: ${(props) => props.theme['green-300']};
      }
    }
  }

  /* O destaque ocupa a linha inteira e vira duas colunas no desktop. */
  &.featured {
    grid-column: 1 / -1;

    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      align-items: stretch;

      .thumb img {
        height: 100%;
        aspect-ratio: auto;
      }

      .body {
        padding: 1.5rem;
        justify-content: center;
      }

      h2 {
        font-size: 1.75rem;
      }
    }
  }
`

export const Intro = styled.div`
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
