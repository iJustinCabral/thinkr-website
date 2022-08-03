import { Navbar, Footer } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import Home  from './pages/HomePage/Home'
import Dao from './pages/DAO/Dao'
import Roadmap from './pages/Roadmap/Roadmap'
import Team from './pages/Team/Team'
import Faq from './pages/FAQ/Faq'
import Scholarship from './pages/Scholarship/Scholarship';
import ScholarshipInfo from './pages/Scholarship/ScholarshipInfo';
import ScrollToTop from './components/ScollToTop';
import ScholarshipApplication from './pages/Scholarship/ScholarshipApplication';
import Mint from './pages/Mint/Mint'
import TestPage from './pages/TestPage/TestPage';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/team' element={<Team />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/mint' element={<Mint />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
