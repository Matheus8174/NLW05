import '../styles/global.scss'
import Header from '../components/Header'
import Player from '../components/Player'

import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContexts'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      
        <Player />
      </div>
    </PlayerContextProvider>
  )
}
export default MyApp

//sempre quando se troca de rota, tudo que está no _app é recarregado
//o _app fica por volta de todas as paginas
//sempre quando existir algo que está em TODAS as paginas, pode colocar ele aqui no _app