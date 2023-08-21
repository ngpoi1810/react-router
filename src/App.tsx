import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />}>
            <Route path=':id' element={<StaffItem />} />
            <Route path='add' element={<AddStaff />} />
            <Route index element={<StaffList />} />
          </Route>
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
