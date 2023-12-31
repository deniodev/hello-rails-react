import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Greetings from './greeting'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Greetings />} /> 
        </Routes> 
      </BrowserRouter>
    </Provider>
  )
}

export default App;