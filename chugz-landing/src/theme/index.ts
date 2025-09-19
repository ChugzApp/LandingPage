import { createTheme } from '@mui/material/styles';

// TODO: Create custom MUI theme with Chugz branding
// Chugz Color Palette:
// - Background (page): #1B1523 (very dark plum)
// - Primary: #6F3CC3 (Chugz purple)
// - Primary Deep (hover/gradient stops): #4C1D95
// - Accent Lavender (highlights): #A78BFA
// - Foam (light text/cards): #FFF7E6
// - Beer (micro-accent, badges/underlines): #FFC857

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6F3CC3', // Chugz purple
      dark: '#4C1D95', // Primary deep for hover states
    },
    secondary: {
      main: '#A78BFA', // Accent lavender
    },
    background: {
      default: '#1B1523', // Very dark plum
      paper: '#2A1F3D', // Slightly lighter than default for cards/surfaces
    },
    text: {
      primary: '#FFF7E6', // Foam - light text
      secondary: '#A78BFA', // Accent lavender for secondary text
    },
    warning: {
      main: '#FFC857', // Beer - micro-accent color
    },
  },
  shape: {
    borderRadius: 12, // Medium rounded shapes
  },
  typography: {
    // TODO: Configure typography with high contrast settings
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    // TODO: Configure component defaults
    // - Button: rounded, medium size
    // - Container: appropriate maxWidth
    // - Enable CssBaseline
  },
});

export default theme;