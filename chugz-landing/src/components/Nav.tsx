import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import chugzIcon from '../assets/chugzIcon.png';

// TODO: Implement top AppBar navigation
// - Brand "Chugz" on the left
// - Links: Home, Privacy on the right
// - Responsive: collapse into IconButton + Menu on small screens
// - Use MUI components with theme colors

function Nav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'primary.main' }}>
      <Toolbar>
        {/* Chugz brand with icon */}
        <Box
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <img 
            src={chugzIcon} 
            alt="Chugz" 
            style={{ width: '32px', height: '32px' }}
          />
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Chugz
          </Typography>
        </Box>

        {/* TODO: Implement responsive navigation */}
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
              <MenuItem onClick={() => handleNavigation('/privacy')}>Terms & Privacy</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/privacy">
              Terms & Privacy
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;