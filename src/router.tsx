import { Routes, Route } from 'react-router-dom'
import { About } from './pages/about'
import { Projects } from './pages/projects'
import { DefaultLayout } from './layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Route>
    </Routes>
  )
}
