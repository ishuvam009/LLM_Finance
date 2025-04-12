import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Index } from "./pages/Index"
import Chat from './pages/Chat'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
