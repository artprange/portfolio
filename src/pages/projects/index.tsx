import { ImageContainer } from './styles'
import movies from '../../assets/movies.png'
import pizzaShop from '../../assets/pizzaShop.png'

import pomodoro from '../../assets/pomodoro.png'
import shirtShop from '../../assets/shirtShop.png'
import tranceBook from '../../assets/tranceBook.png'
import { Link } from 'react-router-dom'

export function Projects() {
  return (
    <ImageContainer>
      <Link to="https://pomodoro-timer-delta-eight.vercel.app/">
        <img src={pomodoro} alt="" title="Pomodoro Timer" />
      </Link>
      <Link to="https://pizza-shop-six.vercel.app/">
        <img src={pizzaShop} alt="" title="Pizza shop - developing" />
      </Link>
      <Link to="https://we-fit-assignment.vercel.app/">
        <img src={movies} alt="" title="Movie catalog" />
      </Link>

      <Link to="https://shirt-shop-deployed.vercel.app/">
        <img src={shirtShop} alt="" title="Shirt shop" />
      </Link>
      <Link to="https://trancebook-deployed.vercel.app/">
        <img src={tranceBook} alt="" title="TranceBook" />
      </Link>
    </ImageContainer>
  )
}
