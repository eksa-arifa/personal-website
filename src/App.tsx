import Body from './Body'
import Header from './Header'
import Layout from './Layout'
import { LanguageContextProvider } from './providers/LanguageContext'
import { ScrollContextProvider } from './providers/ScrollContext'


function App() {
  return (
    <LanguageContextProvider>
      <ScrollContextProvider>
        <Layout>
          <Header />
          <Body />
        </Layout>
      </ScrollContextProvider>
    </LanguageContextProvider>
  )
}

export default App
