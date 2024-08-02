import { AboutContainer, ImageContainer, TextContainer } from '../styles'
import { Link } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'

const imgUrl = 'https://avatars.githubusercontent.com/u/104018176?v=4'

export function AboutPortuguese() {
  return (
    <AboutContainer>
      <SpeedInsights />
      <TextContainer>
        <h1>Olá! Sou o Arthur, dev front-end</h1>
        <h1>
          Atuei como advogado por 5 anos mas não consegui ficar distante da
          minha verdadeira paixão: Tecnologia.
        </h1>
        <h1>
          Tenho um pouco mais de 18 meses de experiência como Dev e aqui está um
          pouco do{' '}
          <Link to="/projects">
            <span> meu trabalho</span>
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
