import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Header/>
        <div className='container col-md-8 text-center'>
          <h1 className='mt-5 ' style={{fontSize: 120}}>404</h1>
          <h2>Not Found</h2>
          <p>ขออภัย ไม่พบหน้าที่ค้นหา มีสินค้ามากมายให้เลือกดูในหน้าหลัก</p>
          <Link className='text-success text-decoration-none' to="/"><button className='btn btn-success'>Go to home</button></Link>
        </div>

      <Footer/>
    </div>
  )
}

export default NotFound