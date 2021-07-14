import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  Container,
  Paper,
} from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
        primary: { main: '#334257', secondary: '#66DE93' },
        secondary: { main: '#ffffff' },
        alternate: { main: '#161616' },
      },
    })
  )

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Router>Hi</Router>
        </Paper>
      </MuiThemeProvider>
    </>
  )
}

export default App
