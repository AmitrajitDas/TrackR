import {
  MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  Container,
  Paper,
} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar'

// screens
import Add from './screens/Add/Add'

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
    <>
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
    </>
  )
}

export default App