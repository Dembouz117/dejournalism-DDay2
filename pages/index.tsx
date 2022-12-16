import HomeProfile from '../src/HomeProfile'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainHeader from '../src/MainHeader'
import Articles from '../src/Articles'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div style = {{border:"none"}}>
      <div >
        <br></br><br></br>
          <h1 className = {styles.authorName}>Your Page.</h1><br></br><br></br><br></br>
      </div>
      <Articles></Articles>
      <HomeProfile/>
    </div>

  )
}
