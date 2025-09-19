import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import AppRouter from './AppRouter'

// TODO: Mount React app with Router + MUI Theme Provider
// - ThemeProvider with custom Chugz theme
// - CssBaseline for consistent styling
// - AppRouter for routing functionality

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)
