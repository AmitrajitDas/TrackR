import {
  MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  Container,
  Paper,
} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar.jsx'

// screens
import Add from './screens/Add/Add.jsx'

const App = () => {
  const theme = responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: '"Ubuntu"',
        color: {
          main: '#fff',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
        },
      },
      palette: {
        type: 'dark',
        primary: { main: '#032541' },
        secondary: { main: '#66DE93' },
        alternate: { main: '#161616' },
        body: { main: '#043359' },
      },
    })
  )

  return (
    <div className='app'>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/add' component={Add} />
            </Switch>
          </Router>
        </Paper>
      </MuiThemeProvider>
    </div>
  )
}

export default App
