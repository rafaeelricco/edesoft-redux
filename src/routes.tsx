import { Route, Routes } from 'react-router-dom'
import Edit from './components/Edit/Edit'
import Register from './components/Register/register'
import { UsersTable } from './components/Table/Table'

export default function Main() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<UsersTable />} />
        <Route path="register" element={<Register />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}
