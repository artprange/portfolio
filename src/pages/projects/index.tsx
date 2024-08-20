import { ImageContainer } from './styles'
import movies from '../../assets/movies.png'

import pomodoro from '../../assets/pomodoro.png'

import tranceBook from '../../assets/tranceBook.png'
import store from '../../assets/store.png'
import { Link } from 'react-router-dom'

export function Projects() {
  return (
    <>
      <ImageContainer>
        <Link to="https://pomodoro-timer-delta-eight.vercel.app/">
          <img src={pomodoro} alt="" title="Pomodoro Timer" />
          <p>Pomodoro Timer</p>
        </Link>

        <Link to="https://we-fit-assignment.vercel.app/">
          <img src={movies} alt="" title="Movie catalog" />
          <p>Movie catalog</p>
        </Link>

        <Link to="https://trancebook-deployed.vercel.app/">
          <img src={tranceBook} alt="" title="TranceBook" />
          <p>Social media coment section</p>
        </Link>

        <Link to="https://bike-shop-blush.vercel.app//">
          <img src={store} alt="" title="Shop" />
          <p>Store - under development!</p>
        </Link>
      </ImageContainer>
    </>
  )
}
