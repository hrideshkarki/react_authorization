import React, { navigate, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/signup'
import SignInSide from './components/signin'
// import Navbar from './components/Navbar'
import ToDo from './Views/ToDo'
import Navbar from './Navbar'
import Message from './components/Message';
import Products from './Views/Products'
import Product from './components/Product'
import Cart from './Views/Cart'
import SingleProduct from './Views/SingleProduct'




const getUserFromLocalStorage = () => {
  const found = localStorage.getItem('user9')
  if ( found ) {
    return JSON.parse(found)
  }
  return {}
}

export default function App() {
  const [user, setUser] = useState(getUserFromLocalStorage)
  const [cart, setCart] = useState([])
  const [messages, setMessages] = useState([])

  const getTotal = (cart) => {
    let total = 0
    for (let item of cart) {
      total += parseFloat(item.price)
    }
    return total.toFixed(2)
  }
  
  const addToCart = (item) => {
    setCart([...cart, item])
  };

  const removeFromCart = (item) => {
    const copy = [...cart]
    for (let i = cart.length-1; i>=0; i--){
      if (item.id === cart[i].id){
        copy.splice(i, 1);
        break
      }
    }
    setCart(copy)
  };

  useEffect(()=>{
    getCart()
  }, [user])


  const getCart = async () => {
    if (user.apitoken){
      const res = await fetch('http://127.0.0.1:5000/api/cart', {
      headers: {Authorization: `Bearer ${user.apitoken}`}
      });
      const data = await res.json();
      if (data.status === 'ok'){
        setCart(data.cart)
      }
    }
    
    else{
      setCart([])
    }
  }

  const logMeIn = (user, rememberMe) => {

    setUser(user)
    if (rememberMe) {
      localStorage.setItem('user9', JSON.stringify(user))
    }
  };

  const logMeOut = () => {
    setUser({});
    localStorage.removeItem('user9');
  };


  
  const showMessages = () => {
    return messages.map(({text, color}, index) => {return <Message key={index} text={text} color={color} messages={messages} setMessages={setMessages} index={index} />})
  }

  useEffect(()=>{
    const query = new URLSearchParams(window.location.search);

    const copy = [...messages]

    if (query.get('success')) {
        copy.push({
            text: "You have successfully checked out.",
            color: "success"
        })
        setMessages(copy)
    }
    if (query.get('canceled')) {
        copy.push({
            text: "Order canceled. Please continue to shop and then try checking out again.",
            color: "warning"
        })
        setMessages(copy)
      }
  },[])

    return (
      <>
        <Navbar user={user} isLoggedIn={!!user.apitoken}  logMeOut={logMeOut}/>
        <Routes>
          <Route path='/signup' element = {<SignUp />} />
          <Route path="/" element={<home/>}/>
          <Route path='/signin' element = {<SignInSide logMeIn={logMeIn} user={user} />} />
          {/* <Route path='/to-do' element={<Todo/>}/> */}
          <Route path='/todo' element = {<ToDo />} />
          <Route path='/sarah' element = {<sarah />} />
          <Route path='/products' element={<Product user={user}/>}/>
          <Route path='/products/:productId' element={<SingleProduct user={user}/>}/> 
          <Route path='/cart' element={<Cart user={user}/>}/>
        </Routes>
        </>
    )
  }