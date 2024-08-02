import { Routes, Route } from 'react-router-dom'
import { AboutEnglish } from './pages/aboutEn'
import { Projects } from './pages/projects'
import { DefaultLayout } from './layouts/defaultLayout'
import { AboutPortuguese } from './pages/aboutBr'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<AboutEnglish />}></Route>
        <Route path="/about-br" element={<AboutPortuguese />}></Route>

        <Route path="/projects" element={<Projects />}></Route>
      </Route>
    </Routes>
  )
}
