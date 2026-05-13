import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import AOS from 'aos'

function App() {
  const [activePage, setActivePage] = useState('HOME')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    AOS.refresh()
  }, [activePage])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true) // Open cart when item is added
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, delta) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  return (
    <div className="overflow-x-hidden min-h-screen bg-[#fdf8f1]">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {activePage === 'HOME' && <Home addToCart={addToCart} />}
      {activePage === 'ABOUT' && <About />}
      {activePage === 'PRODUCTS' && <ProductsPage addToCart={addToCart} />}
      {activePage === 'CONTACT' && <ContactPage />}
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      
      <Footer/>
    </div>
  )
}

export default App
