import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', //TODO change
    },
    secondary: {
      main: '#f50057', //TODO change
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: '#323232',
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '133.4%',
    },
    h2: {},
    h3: {},
    body1: {},
    body2: {},
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: '21px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: '0px',
          marginBottom: '0px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#FFF',
          backgroundColor: 'red',
          padding: '12px',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#A93235',
          },
          '&:disabled': {
            backgroundColor: '#A93235',
          },
        },
      },
    },
  },
})
