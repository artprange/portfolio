import { AboutContainer, ImageContainer, TextContainer } from './styles'
import { Link } from 'react-router-dom'

const imgUrl = 'https://avatars.githubusercontent.com/u/104018176?v=4'

export function About() {
  return (
    <AboutContainer>
      <TextContainer>
        <h1>
          Hello there! I am Arthur, a focused <span>Front-end developer</span>.
        </h1>
        <h1>
          I worked 5 years as a lawyer but I could not keep away from my big
          passion: <span>Tecnology.</span>
        </h1>
        <h1>
          I have a little over 18 months as a <span>Dev</span> and here is a
          small compilation of <span>my work</span>.
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
