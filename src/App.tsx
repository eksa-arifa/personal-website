import Body from './Body'
import Header from './Header'
import Layout from './Layout'
import { ScrollContextProvider } from './providers/ScrollContext'


function App() {
  return (
    <ScrollContextProvider>
      <Layout>
        <Header />
        <Body />
      </Layout>
    </ScrollContextProvider>
  )
}

export default App
