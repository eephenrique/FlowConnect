import { Header } from './Components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

import styles from './App.module.css'


export function App() {
  return( 
  <>
    <Header />


    <div className={styles.wrapper}>

      <Sidebar />

      <main>
        <Post 
          author="Marcos Henrique" 
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eius at totam, alias facilis quae. Quaerat, ipsam excepturi molestias est, iusto hic, vero nostrum ut doloremque soluta culpa laboriosam placeat!"
        />
        <Post 
          author="João Silva" 
          content="Um novo POST muito legal" 
        />
      </main>
    </div>
    </>
  )
}