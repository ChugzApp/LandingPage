import { Container, Typography, Box, Link, Alert } from '@mui/material';
import { Email, Gavel, Security, Warning } from '@mui/icons-material';

// Complete Terms of Use & Privacy Policy for Chugz
// Based on comprehensive legal document provided

function Privacy() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        {/* Header */}
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main', textAlign: 'center' }}>
          Chugz – Terms of Use & Privacy Policy
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Last Updated: 2025-09-19
        </Typography>
        
        <Alert severity="info" sx={{ mb: 4 }}>
          <Typography variant="body2">
            By accessing or using Chugz, you agree to these Terms of Use and Privacy Policy. 
            If you do not agree, do not use the App.
          </Typography>
        </Alert>

        {/* 1. Introduction */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Chugz ("the App," "we," "us," "our"). Chugz is a social and entertainment platform 
            designed to connect users with bars and venues through interactive games, promotions, and events.
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing or using Chugz, you agree to these Terms of Use and Privacy Policy (collectively, "Terms"). 
            If you do not agree, do not use the App.
          </Typography>
        </Box>

        {/* 2. Eligibility */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            2. Eligibility
          </Typography>
          <Alert severity="warning" sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Warning />
              You must be at least 18 years old or the legal drinking age in your jurisdiction, whichever is higher.
            </Typography>
          </Alert>
          <Typography variant="body1">
            By creating an account, you confirm you meet this requirement.
          </Typography>
        </Box>

        {/* 3. User Responsibilities */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            3. User Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Responsible Use:</strong> Chugz encourages fun but does not promote unsafe or excessive drinking. 
            You are solely responsible for your alcohol consumption.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Behavior:</strong> You may not harass, abuse, threaten, or otherwise harm other users or partners.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Compliance with Law:</strong> You must comply with all applicable laws, including alcohol and advertising laws.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Account Security:</strong> You are responsible for maintaining confidentiality of your login credentials.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Location Services:</strong> Some features (HeatMap, table-based play) require location access. 
            By enabling these features, you consent to location tracking.
          </Typography>
        </Box>

        {/* 4. Partner Responsibilities */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            4. Partner Responsibilities (Bars & Venues)
          </Typography>
          <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
            <li>Partners must ensure all promotions, pricing, and services listed in the App are accurate.</li>
            <li>Partners must comply with applicable laws on alcohol service, customer safety, and venue operations.</li>
            <li>Partners are responsible for staff conduct, promotions, and fulfillment of any offers.</li>
            <li>Misuse of Chugz tools (e.g., QR codes, NFC tags) outside of designated venues is prohibited.</li>
          </Typography>
        </Box>

        {/* 5. Payments & Fees */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            5. Payments & Fees
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Users:</strong> Payments for in-app purchases or events are final unless otherwise required by law. 
            Disputes over venue purchases must be resolved with the venue directly.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Partners:</strong> Chugz may charge subscription fees, commissions, or other agreed fees. 
            All fees are non-refundable unless otherwise agreed in writing.
          </Typography>
        </Box>

        {/* 6. Intellectual Property */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            6. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All branding, designs, content, features, and code in Chugz are owned by us and protected by 
            intellectual property laws. You may not copy, modify, or exploit Chugz materials without prior written consent.
          </Typography>
        </Box>

        {/* 7. Privacy & Data Collection */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'secondary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Security />
            7. Privacy & Data Collection
          </Typography>
          
          {/* 7.1 Data We Collect */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
              7.1 Data We Collect
            </Typography>
            <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
              <li><strong>Account Data:</strong> Name, email, date of birth.</li>
              <li><strong>Location Data:</strong> To enable HeatMap and venue-based features.</li>
              <li><strong>Usage Data:</strong> Games, interactions, and engagement.</li>
              <li><strong>Payment Data:</strong> Processed securely by third-party providers.</li>
              <li><strong>Device Data:</strong> Device type, operating system, logs.</li>
            </Typography>
          </Box>

          {/* 7.2 How We Use Data */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
              7.2 How We Use Data
            </Typography>
            <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
              <li>To provide and improve the App.</li>
              <li>To personalize offers, events, and promotions.</li>
              <li>To process payments securely.</li>
              <li>To analyze usage trends.</li>
              <li>To enforce these Terms and prevent fraud.</li>
            </Typography>
          </Box>

          {/* 7.3 Sharing of Data */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
              7.3 Sharing of Data
            </Typography>
            <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
              <li><strong>With Venues:</strong> Only anonymized analytics. Personal data is never shared without consent.</li>
              <li><strong>With Service Providers:</strong> For hosting, analytics, payment processing.</li>
              <li><strong>For Legal Compliance:</strong> When required by law.</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale.</li>
            </Typography>
          </Box>

          {/* 7.4 Data Retention & Security */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
              7.4 Data Retention & Security
            </Typography>
            <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
              <li>Data is stored securely with encryption and safeguards.</li>
              <li>We retain data only as long as needed for services or legal obligations.</li>
              <li>Users may request deletion of accounts, after which data is removed or anonymized unless required by law.</li>
            </Typography>
          </Box>

          {/* 7.5 User Rights */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
              7.5 User Rights
            </Typography>
            <Typography variant="body1" paragraph>
              Depending on your jurisdiction, you may have rights to:
            </Typography>
            <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
              <li>Access, correct, or delete your data.</li>
              <li>Withdraw consent for certain processing.</li>
              <li>Request portability of your data.</li>
            </Typography>
            <Typography variant="body1" paragraph>
              Requests can be made to: {/* TODO: Insert actual contact email */}[Insert Contact Email].
            </Typography>
          </Box>
        </Box>

        {/* 8. Disclaimers */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            8. Disclaimers
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ color: 'warning.main' }}>
            8.1 Alcohol Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            Chugz does not encourage excessive drinking or unsafe behavior. You assume full responsibility for your choices.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'warning.main' }}>
            8.2 Third-Party Services
          </Typography>
          <Typography variant="body1" paragraph>
            Bars and venues are independent third parties. Chugz does not control their services, staff, or products.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'warning.main' }}>
            8.3 No Warranties
          </Typography>
          <Typography variant="body1" paragraph>
            The App is provided "as is" and "as available." We make no warranties regarding uninterrupted service, 
            accuracy of promotions, or suitability for your purposes.
          </Typography>
        </Box>

        {/* 9. Limitation of Liability */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            9. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            To the fullest extent permitted by law:
          </Typography>
          <Typography variant="body1" paragraph>
            Chugz and its affiliates are not liable for:
          </Typography>
          <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
            <li>Injuries, damages, or health issues arising from alcohol consumption.</li>
            <li>Disputes between users or between users and venues.</li>
            <li>The quality, safety, or legality of services provided by venues.</li>
          </Typography>
          <Typography variant="body1" paragraph>
            If liability cannot be excluded, it is limited to the lesser of:
          </Typography>
          <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
            <li>The amount you paid to use the App (if any), or</li>
            <li>USD $100.</li>
          </Typography>
        </Box>

        {/* 10. Indemnification */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            10. Indemnification
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to indemnify and hold harmless Chugz, its affiliates, and employees against any claims, 
            damages, or expenses resulting from:
          </Typography>
          <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
            <li>Your use of the App.</li>
            <li>Your violation of these Terms.</li>
            <li>Your interactions with other users or venues.</li>
          </Typography>
        </Box>

        {/* 11. Termination */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            11. Termination
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>By Us:</strong> We may suspend or permanently close your account at our discretion if you violate 
            these Terms, misuse the App, or engage in fraud.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>By You:</strong> You may delete your account anytime. Upon deletion, your data will be removed 
            or anonymized unless we must retain it for legal reasons.
          </Typography>
        </Box>

        {/* 12. Dispute Resolution */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Gavel />
            12. Dispute Resolution & Arbitration
          </Typography>
          <Typography component="ul" variant="body1" sx={{ pl: 4 }}>
            <li>Any disputes shall first be attempted to be resolved informally.</li>
            <li>If unresolved, disputes will be settled by binding arbitration under the rules of {/* TODO: Insert arbitration body */}[Insert Arbitration Body].</li>
            <li>You waive the right to participate in class actions against Chugz.</li>
            <li>Nothing in this section prevents you from seeking remedies in small-claims court if permitted by law.</li>
          </Typography>
        </Box>

        {/* 13. Governing Law */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            13. Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These Terms are governed by the laws of {/* TODO: Insert jurisdiction */}[Insert Country/State]. 
            Any disputes shall be heard in the courts of [Insert Jurisdiction], unless otherwise required by mandatory law.
          </Typography>
        </Box>

        {/* 14. Changes to Terms */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            14. Changes to These Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We may update these Terms from time to time. Material changes will be communicated via the App or email. 
            Continued use of Chugz after updates constitutes acceptance of the revised Terms.
          </Typography>
        </Box>

        {/* 15. Contact Us */}
        <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Email />
            15. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            For questions, requests, or complaints, contact us at:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Link 
              href="mailto:chugz0137@gmail.com" 
              variant="h6" 
              sx={{ color: 'warning.main', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1 }}
            >
              📧 {/* TODO: Insert actual contact email */}chugz0137@gmail.com
            </Link>
          </Box>
        </Box>

        <Box sx={{ mt: 6, p: 3, bgcolor: 'rgba(111, 60, 195, 0.1)', borderRadius: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            <strong>TODO for Implementation:</strong> Before going live, please update all placeholder values:
            [Insert Date], [Insert Contact Email], [Insert Business Address], [Insert Arbitration Body], 
            and [Insert Country/State] with actual information. Consider having this reviewed by legal counsel 
            to ensure compliance with your jurisdiction's laws.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Privacy;