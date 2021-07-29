import Head from 'next/head'
import ChangeColor from '../components/ChangeColor'
import styles from '../styles/Home.module.css'
import UpdateColor from '../components/UpdateColor'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Context API Trial</h1>
      <ChangeColor/>
      <UpdateColor/>
    </div>
  )
}