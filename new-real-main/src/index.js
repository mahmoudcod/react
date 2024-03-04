import { createRoot } from 'react-dom/client';
import './styles.css';
// import { Logo } from '@pmndrs/branding'
import { App } from './App';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './page/about'; // Import your AboutPage component

function Root() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/about" element={< About />} />
      <Route path="/*" element={< App />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
