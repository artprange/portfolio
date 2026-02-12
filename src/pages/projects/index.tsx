import { ImageContainer } from './styles'

import pomodoro from '../../assets/pomodoro.png'

import tranceBook from '../../assets/tranceBook.png'
import cafe from '../../assets/cafe.svg'
import crud from '../../assets/crud.svg'

import { Link } from 'react-router-dom'

export function Projects() {
  return (
    <>
      <ImageContainer>
        <Link to="https://projedata-assessment.vercel.app/">
          <img src={crud} alt="" title="TranceBook" />
          <p>Basic crud</p>
        </Link>
        <Link to="https://pomodoro-timer-delta-eight.vercel.app/">
          <img src={pomodoro} alt="" title="Pomodoro Timer" />
          <p>Pomodoro Timer</p>
        </Link>

        {/* <Link to="https://we-movies-ten.vercel.app//">
          <img src={movies} alt="" title="Movie catalog" />
          <p>Movie catalog</p>
        </Link> */}
        <Link to="https://vercel.com/artpranges-projects/pop-menu-test/7mcuUoWjZMHqxKBheCseQ9gUnnst">
          <img src={cafe} alt="" title="Movie catalog" />
          <p>Cafe Landing Page</p>
        </Link>

        <Link to="https://trancebook-deployed.vercel.app/">
          <img src={tranceBook} alt="" title="TranceBook" />
          <p>Social media comment section</p>
        </Link>
      </ImageContainer>
    </>
  )
}
