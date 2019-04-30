import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#ed4b82',
      main: '#e91e63',
      dark: '#a31545',
      contrastText: '#fff'
    },
    secondary: {
      light: '#33bfff',
      main: '#00b0ff',
      dark: '#007bb2',
      contrastText: '#fff'
    }
  },
  overrides: {}
})
