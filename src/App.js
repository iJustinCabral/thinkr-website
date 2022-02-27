import { Navbar, Footer } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home  from './pages/HomePage/Home'
import Dao from './pages/DAO/Dao'
import Roadmap from './pages/Roadmap/Roadmap'
import Team from './pages/Team/Team'
import Faq from './pages/FAQ/Faq'
import ScrollToTop from './components/ScollToTop';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dao' element={<Dao />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/team' element={<Team />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
