//O _document fica por volta da aplicação, é carregado apenas uma vez
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document{
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main /> {/* Onde vai ficar a aplicação */} 
          <NextScript /> {/* Onde vai ficar os next scripts */}
        </body>
      </Html>
    )
  }
}

export default MyDocument