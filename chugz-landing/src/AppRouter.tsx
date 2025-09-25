import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Privacy from './pages/Privacy';
import DeleteAccount from './pages/DeleteAccount';
import Nav from './components/Nav';
import { Box, Link } from '@mui/material';

// TODO: Implement React Router v6 structure
// Routes:
// / → Landing page
// /privacy → Privacy Policy page
// /delete-account → Account deletion guide page

function AppRouter() {
  return (
    <BrowserRouter>
      {/* TODO: Add Navigation component */}
      <Nav />
      
      {/* TODO: Add minimal footer component */}
      <Box component="main" sx={{ minHeight: '100vh', pt: 8 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </Box>
      
      {/* TODO: Add Footer component with copyright and privacy link */}
      <Box component="footer" sx={{ textAlign: 'center', py: 2, color: 'text.secondary' }}>
        © {new Date().getFullYear()} Chugz • <Link href="/privacy" sx={{ color: 'inherit', textDecoration: 'none' }}>Terms & Privacy</Link>
      </Box>
    </BrowserRouter>
  );
}

export default AppRouter;