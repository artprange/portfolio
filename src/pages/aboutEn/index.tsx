import { AboutContainer, ImageContainer, TextContainer } from '../styles'
import { Link } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'

const imgUrl = 'https://avatars.githubusercontent.com/u/104018176?v=4'

export function AboutEnglish() {
  return (
    <AboutContainer>
      <SpeedInsights />
      <TextContainer>
        <h1>Hello there! I am Arthur, </h1>

        <h1>
          Working as a Developer for 3 years and here is a small compilation of{' '}
          <Link to="/projects">
            <span>my work</span>
          </Link>
          .
        </h1>
      </TextContainer>
      <ImageContainer>
        <img src={imgUrl} width={300} alt=""></img>
        <Link to="https://github.com/artprange" title="GitHub">
          GitHub
        </Link>
      </ImageContainer>
    </AboutContainer>
  )
}
