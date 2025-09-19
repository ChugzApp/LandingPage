import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  Stack
} from '@mui/material';
import { Download, PlayArrow, Group, Favorite } from '@mui/icons-material';

// TODO: Implement Landing page with hero, features, and download sections
// Content structure:
// 1. Hero section with main CTA
// 2. Three feature cards
// 3. Download section with app store buttons

function Landing() {
  return (
    <Container maxWidth="lg">
      {/* TODO: Hero Section */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          py: 8,
          background: 'linear-gradient(135deg, #6F3CC3 0%, #4C1D95 100%)',
          borderRadius: 2,
          mb: 8,
          mt: 8,
          color: 'white'
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold'}}>
          Meet, Play, Chugz.
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
          Games between tables, table-only fun, and a playful dating twist.
        </Typography>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          {/* TODO: Link to download section */}
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<Download />}
            sx={{ bgcolor: 'warning.main', color: 'black', '&:hover': { bgcolor: '#E6B054' } }}
          >
            Get the App
          </Button>
          {/* TODO: Link to privacy page */}
          <Button 
            variant="outlined" 
            size="large"
            sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            Privacy Policy
          </Button>
        </Stack>
      </Box>

      {/* TODO: Three Feature Cards */}
      <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
        Why Chugz?
      </Typography>
      
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {/* Feature 1: Games Between Tables */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <PlayArrow sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Games Between Tables
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Spin-offs, trivia, and quick challenges that light up the whole venue.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 2: Table-Only Chats */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Group sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Table-Only Chats
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Keep it simple and fun—focus on the people at your table.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 3: Dating Twist */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Favorite sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Dating Twist
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Mutual like unlocks invite-to-game or chat—only after a match.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* TODO: Download Section */}
      <Box sx={{ textAlign: 'center', py: 8, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Download Chugz
        </Typography>
        <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4, color: 'text.secondary' }}>
          Coming soon to the App Store and Google Play.
        </Typography>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          {/* TODO: Replace with actual store links when available */}
          <Button 
            variant="contained" 
            size="large" 
            disabled
            sx={{ minWidth: 200 }}
          >
            App Store
          </Button>
          <Button 
            variant="contained" 
            size="large" 
            disabled
            sx={{ minWidth: 200 }}
          >
            Google Play
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Landing;