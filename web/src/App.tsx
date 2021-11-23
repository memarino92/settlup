import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

import FlagProvider from '@unleash/proxy-client-react'

const config = {
  url: process.env.UNLEASH_PROXY_URL,
  clientKey: process.env.UNLEASH_PROXY_SECRET,
  refreshInterval: 15,
  appName: 'unleash-playground',
  environment: process.env.ENVIRONMENT,
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider>
        <FlagProvider config={config}>
          <Routes />
        </FlagProvider>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
