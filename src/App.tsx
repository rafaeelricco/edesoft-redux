import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import { fetchUsers } from './store/users'

import Footer from './components/Footer/Footer'
import Main from './routes'

export default function App() {
  const dispatch = useDispatch()

  // Fetch users from API and store in Redux
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  )
}
