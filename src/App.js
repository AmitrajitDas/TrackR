import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  Container,
  Paper,
} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

const App = () => {
  const theme = responsiveFontSizes(
    createMuiTheme({
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
        primary: { main: '#0A1931' },
        secondary: { main: '#66DE93' },
        alternate: { main: '#161616' },
      },
    })
  )

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Navbar />
          <Router>Hi</Router>
        </Paper>
      </MuiThemeProvider>
    </>
  )
}

export default App
