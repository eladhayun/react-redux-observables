import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    useNextVariants: true
  },
  palette: {
    primary: { main: '#2196f3' },
    secondary: { main: '#f50057' }
  },
  overrides: {}
})
