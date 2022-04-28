const theme = {
    palette: {
      background: {
        default: "#ffffff"
      },
      primary: {
        main: "#fb5c3e",
        dark: "#131415",
        light: "#2e6ef1",
        contrast: "#c9c9c9"
      },
      secondary: {
        main: "#f2efea",
        dark: "#131415",
        light: "#07c9f9",
        contrast: "#f2efea"
      },
      error: {
        main: "#f44336",
        dark: "#d32f2f",
        light: "#e57373",
        alertText: "#611a15",
        contrast: "#ffffff"
      },
      warning: {
        main: "#ffde02",
        dark: "#f9a30b",
        light: "rgba(255, 222, 2, 0.5)",
        alertText: "#663c00",
        contrast: "#131415"
      },
      info: {
        main: "#2e6ef1",
        dark: "#131415",
        light: "#07c9f9",
        alertText: "#131415",
        contrast: "#ffffff"
      },
      success: {
        main: "#4caf50",
        dark: "#388e3c",
        light: "#81c784",
        alertText: "#1e4620",
        contrast: "#ffffff"
      },
      action: {
        active: "#fb5c3e",
        hover: "rgba(0,0,0, 0.04)",
        disabled: "rgba(0,0,0, 0.26)",
        dark: {
          selected: "rgba(0,0,0, 0.08)",
          focus: "rgba(0,0,0, 0.12)",
          disabledBackground: "rgba(0,0,0, 0.12)"
        }
      },
      other: {
        divider: "rgba (0, 0, 0, 0.12)",
        backdrop: "rgba (0, 0, 0, 0.5)"
      },
      tertiary: {
        main: "#ffde02"
      },
      darker: {
        main: "#131415"
      },
      lighter: {
        main: "#f2efea"
      }
    },
    divider: "rgba(0, 0, 0, 0.12)",
    text: {
      primary: "rgba(20, 24, 34, 0.87)",
      secondary: "rgba(20, 24, 34, 0.6)",
      disabled: "rgba(20, 24, 34, 0.26)",
      light: {
        primary: "#ffffff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)"
      }
    },
    typography: {
      fontFamily: ["Poppins", "Squada One"].join(","),
      fontSize: 16,
      h1: {
        fontSize: "2.5rem",
        fontWeight: "bold"
      },
      h2: {
        fontSize: "2rem",
        fontWeight: "bold"
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: "regular"
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: "500"
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: "regular"
      },
      h6: {
        fontSize: "1rem",
        fontWeight: "600"
      },
      subtitle1: {
        fontFamily: "Squada One",
        fontWeight: "regular",
        fontSize: 30,
        lineHeight: "32px"
      },
      subtitle2: {
        fontFamily: "Squada One",
        fontSize: "0.75rem",
        fontWeight: "700"
      }
    },
    overrides: {
      MuiCssBaseline:{
        '@global': {
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(251,92,63,0.6)',
          },
          '*::-webkit-scrollbar': {
            'width': '12px',
            "background-color": "white"
          },
          '*::-webkit-scrollbar-thumb': {
            'border-radius': '10px',
            'background-color': '#FB5C3F'
          }
        },
      },
      MuiButton: {
        root: {
          fontWeight: "bold",
          borderRadius: 0,
          boxShadow: "none !important",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: "#131415"
          }
        }
      },
      MuiCard: {
        root: {
          boxShadow: "0px 5px 20px 3px rgba(0,0,0,0.2)",
          borderRadius: 0
        }
      },
      MuiAlert: {
        root: {
          borderRadius: 0
        }
      }
    },
    breakpoints: {
      values: {
        xs: 375,
        sm: 600,
        md: 960,
        laptop: 1024,
        lg: 1280,
        xl: 1920
      }
    }
};
  
module.exports = theme;
  