import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    extraBackgrounds: {
      footerColor: React.CSSProperties["color"];
      burgundyColor: React.CSSProperties["color"];
      grayColor: React.CSSProperties["color"];
      blackColor: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    extraBackgrounds: {
      footerColor: React.CSSProperties["color"];
      burgundyColor: React.CSSProperties["color"];
      grayColor: React.CSSProperties["color"];
      blackColor: React.CSSProperties["color"];
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ED3237",
    },
    secondary: {
      main: "#A93235",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      color: "#323232",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "133.4%",
    },
    h2: {},
    h3: {
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "36px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
      fontStyle: "normal",
      color: "#00000099",
    },
    body2: {},
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: "21px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: "0px",
          marginBottom: "0px",
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
          color: "#FFF",
          backgroundColor: "red",
          padding: "12px",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "#A93235",
          },
          "&:disabled": {
            backgroundColor: "#A93235",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "#323232",
          width: "fit-content",
        },
        flexContainer: {
          width: "fit-content",
        },
        scroller: {
          width: "fit-content",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#F1F1F1",
          display: "flex",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#F1F1F1",
        },
      },
    },
  },
  extraBackgrounds: {
    footerColor: "#323232",
    burgundyColor: "#A93235",
    grayColor: "#F1F1F1",
    blackColor: "#323232",
  },
});
