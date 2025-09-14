
import './App.css'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import AddEmployeeComponent from './Components/AddEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
      <>
  <BrowserRouter>
  <HeaderComponent/>
  <Routes>

    {/* http://localhost:3000 */}
      <Route path='/' element={ <ListEmployeeComponent/> }></Route>

    {/* http://localhost:3000/employee */}
      <Route path='/employee' element={ <ListEmployeeComponent/> }></Route>

    {/* http://localhost:3000/add-employee */}
    <Route path='/add-employee' element= { <AddEmployeeComponent/> }></Route>
  
    {/* http://localhost:3000/update-employee/1 */}
    <Route path='/update-employee/:id' element = { <AddEmployeeComponent/>}></Route>
  </Routes>
  <FooterComponent/>
  </BrowserRouter>
  </>
  )
}

export default App
