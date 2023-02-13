import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Layout/Navbar"
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Application, Bank, Business, Defaulter, Disbursment, Document, Enquiry, Family, Guarantor,Installment, Loan, User, Vendor} from "./Components/Pages"
import Dashboard from "./Components/Pages/Admin_app/DashboardComponents/Dashboard"
// import Sidebar from "./Components/Pages/Admin_app/DashboardComponents/Sidebar"





function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <div class="container-fluid" id="main">
              <div class="row row-offcanvas row-offcanvas-left">
                
              </div>
              <Dashboard />
            </div>
          <Routes>

            <Route path='/user' element={<User/>}/>
            <Route path="/defaulter" element={<Defaulter/>}/>
            <Route path="/application" element={<Application/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/family" element={<Family/>}/>
            <Route path="/guarantor" element={<Guarantor/>}/>
            <Route path="/enquiry" element={<Enquiry/>}/>
            <Route path="/disbursement" element={<Disbursment/>}/>
            <Route path="/installment" element={<Installment/>}/>
            <Route path="/vendor" element={<Vendor/>}/>
            <Route path="/document" element={<Document/>}/>
            <Route path="/bank" element={<Bank/>}/>
            <Route path="/loan" element={<Loan/>}/>
            

          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App