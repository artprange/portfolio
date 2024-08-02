import { AboutContainer, ImageContainer, TextContainer } from '../styles'
import { Link } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'

const imgUrl = 'https://avatars.githubusercontent.com/u/104018176?v=4'

export function AboutEnglish() {
  return (
    <AboutContainer>
      <SpeedInsights />
      <TextContainer>
        <h1>Hello there! I am Arthur, a focused Front-end developer.</h1>
        <h1>
          I worked 5 years as a lawyer but I could not keep away from my big
          passion: Tecnology.
        </h1>
        <h1>
          I have a little over 18 months as a Dev and here is a small
          compilation of{' '}
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
