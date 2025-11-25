import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ListPokemon from './pages/ListPokemon'
import PokemonDetails from './pages/PokemonDetails'
import SearchPokemon from './pages/SearchPokemon'
import RandomPokemon from './pages/RamdomPokemon'
import FightPage from './pages/FightPage'
import FightPokemonType from './pages/FightPokemonType'



let router = createBrowserRouter(  [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/listePokemon",
    Component: ListPokemon,
  },

  {
    path: "/detailsPokemon/:id",
    Component: PokemonDetails,
  },

  {
    path: "/recherche/:name",
    Component: SearchPokemon,
  },

  {
    path: "/aleatoire",
    Component: RandomPokemon,
  },

  {
    path: "/jouer",
    Component: FightPage,
  },

  {
    path: "/jouer/:type",
    Component: FightPokemonType,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
    
    
  </StrictMode>,
)
