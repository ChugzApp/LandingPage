import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Alert,
  Stack,
  Divider,
  Snackbar
} from '@mui/material';
import { 
  Security, 
  DeleteForever, 
  CheckCircle,
  ArrowBack,
  PhoneAndroid,
  Email
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import step images
import openAppImg from '../assets/deleteAccountSteps/openApp.png';
import openMenuImg from '../assets/deleteAccountSteps/openMenu.png';
import clickSettingsImg from '../assets/deleteAccountSteps/clickSettings.png';
import userSettingsImg from '../assets/deleteAccountSteps/userSettings.png';
import deleteAccountImg from '../assets/deleteAccountSteps/deleteAccount.png';
import optionalSurveyImg from '../assets/deleteAccountSteps/optionalSurvey.png';
import finalDeletionImg from '../assets/deleteAccountSteps/finalDeletion.png';
import completeImg from '../assets/deleteAccountSteps/complete.png';

function DeleteAccount() {
  const [showEmail, setShowEmail] = useState(false);
  const navigate = useNavigate();

  const handleContactSupport = () => {
    setShowEmail(true);
  };

  const handleCloseEmail = () => {
    setShowEmail(false);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const steps = [
    {
      label: 'Open the Chugz App',
      description: 'Launch the Chugz app on your mobile device',
      image: openAppImg
    },
    {
      label: 'Open the Menu',
      description: 'Tap on the menu icon (three lines) in the top left corner to access the main menu',
      image: openMenuImg
    },
    {
      label: 'Navigate to Settings',
      description: 'From the menu, tap on "Settings" to access your account settings',
      image: clickSettingsImg
    },
    {
      label: 'Find Account Options',
      description: 'In the settings menu, scroll down to find the "Account" section and tap on "User Settings"',
      image: userSettingsImg
    },
    {
      label: 'Select Delete Account',
      description: 'Scroll down to find the "Delete Account" option and tap on it',
      image: deleteAccountImg
    },
    {
      label: 'Optional Survey',
      description: 'You may be asked to complete a brief survey about why you\'re leaving (this is optional)',
      image: optionalSurveyImg
    },
    {
      label: 'Confirm Deletion',
      description: 'Read the warning message carefully, then tap "Delete My Account" to confirm the permanent deletion',
      image: finalDeletionImg
    },
    {
      label: 'Account Deleted',
      description: 'Your account has been successfully deleted. All your data will be permanently removed within 24 hours',
      image: completeImg
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        {/* Header */}
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main', textAlign: 'center' }}>
          How to Delete Your Account
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Follow these simple steps to permanently delete your Chugz account
        </Typography>
        
        {/* Important Warning */}
        <Alert severity="warning" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Important: Account deletion is permanent and cannot be undone.
            </Typography>
            <Typography variant="body2">
              All your data, including profile information, game history, and matches will be permanently deleted.
            </Typography>
          </Box>
        </Alert>

        {/* Step-by-Step Guide */}
        <Card sx={{ bgcolor: 'background.paper', mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              <DeleteForever />
              Step-by-Step Guide
            </Typography>
            
            <Stepper orientation="vertical" sx={{ pl: 0 }}>
              {steps.map((step, index) => (
                <Step key={step.label} active={true} completed={false}>
                  <StepLabel 
                    sx={{ 
                      '& .MuiStepLabel-label': { 
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: 'text.primary'
                      }
                    }}
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 2 }}>
                      {step.description}
                    </Typography>
                    
                    {/* Step Image */}
                    <Box 
                      sx={{ 
                        borderRadius: 2,
                        mb: 2,
                        overflow: 'hidden',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        display: 'flex',
                        justifyContent: 'center',
                        bgcolor: 'background.default'
                      }}
                    >
                      <img 
                        src={step.image} 
                        alt={`Step ${index + 1}: ${step.label}`}
                        style={{ 
                          maxWidth: '100%', 
                          height: 'auto',
                          maxHeight: '400px',
                          objectFit: 'contain'
                        }}
                      />
                    </Box>
                    
                    {index < steps.length - 1 && <Divider sx={{ my: 2 }} />}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </CardContent>
        </Card>

        {/* What Happens After Deletion */}
        <Card sx={{ bgcolor: 'background.paper', mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'secondary.main', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Security />
              What Happens After Deletion?
            </Typography>
            
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <CheckCircle sx={{ color: 'warning.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Immediate Effects
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Your account will be deactivated immediately and you won't be able to log in
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <CheckCircle sx={{ color: 'warning.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Data Removal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All your personal data, photos, and game history will be permanently deleted within 24 hours
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <CheckCircle sx={{ color: 'warning.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    No Recovery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Once deleted, your account and data cannot be recovered. You'll need to create a new account if you want to use Chugz again
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Need Help?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            If you have questions about account deletion or need assistance, contact our support team:
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<PhoneAndroid />}
            onClick={handleContactSupport}
            sx={{ 
              bgcolor: 'warning.main', 
              color: 'black', 
              '&:hover': { bgcolor: '#E6B054' },
              mr: 2
            }}
          >
            Contact Support
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<ArrowBack />}
            onClick={handleBackToHome}
            sx={{ 
              borderColor: 'primary.main', 
              color: 'primary.main', 
              '&:hover': { borderColor: 'primary.dark', bgcolor: 'rgba(111, 60, 195, 0.1)' }
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>

      {/* Email Snackbar */}
      <Snackbar
        open={showEmail}
        autoHideDuration={10000}
        onClose={handleCloseEmail}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseEmail} 
          severity="info" 
          sx={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Email />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Contact us at:
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
              chugz0137@gmail.com
            </Typography>
          </Box>
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default DeleteAccount;
