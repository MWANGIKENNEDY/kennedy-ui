import Footer from '@/components/footers/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import SimpleAnnouncement from './components/announcements/simpleAnnouncement'


type Props ={
    children:React.ReactNode
}
const layout = ({children}:Props) => {
  return (
    <>
    <SimpleAnnouncement/>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default layout