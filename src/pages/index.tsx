import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Test from '../components/Test'


const Home: NextPage = () => {

  const data = {
    info : { 
      name : "hong",
      age : 20,
    }
  }

  return (
    <div>
      <Test info={data.info}/>
    </div>
  )
}

export default Home
