import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Header/>
            <div className='container col-md-5'>
                <h3>สวัสดีครับ</h3>
                <p className='title text-justify mt-4 mb-4'>ล่าลาล่าลา</p>
                <h4 className='text-success'>จากเต๋าสมชาย</h4>
            </div>

        <Footer company="Worapong" email="worapongpp@hotmail.com"/>
    </div>
  )
}

export default About;