import React from 'react'
import CustomerList from './screens/CustomerList'
import Sidebar from './components/Sidebar'


const App = () => {
  return (
      <div className='app'>
        <Sidebar />
        <div className='content'>
          <CustomerList />
        </div>
      </div>
  )
}

export default App