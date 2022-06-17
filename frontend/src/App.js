import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import SurfProductScreen from './screens/SurfProductScreen'
import HomeScreen from './screens/HomeScreen'
import SurfItemScreen from './screens/SurfItemScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/surfProducts' element={<SurfProductScreen />} />
            <Route path='/surfProduct/:id' element={<SurfItemScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
