import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

function Header() {
  const currentDate = format(new Date(), 'EEEEE, d MMMM', {
    locale: ptBR
  })
  //new Date().toLocaleDateString()

  return (
    <header className={styles.headerContainer}>
    
      <img src="/logo.svg" alt="Podcastr logo (um headphone)"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}

export default Header;