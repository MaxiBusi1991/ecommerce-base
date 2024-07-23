import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import { LinkContainer } from 'react-router-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
//import Badge from 'react-bootstrap/esm/Badge'
import { useContext } from 'react'
import { Store } from './Store'

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto text-white mt-1'>
                <Link to='/cart' className='nav-link' />
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg='danger' className='ms-2 px-2 py-1'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-4'>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen/>}/>
              <Route path="/" element={<HomeScreen/>}/>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
