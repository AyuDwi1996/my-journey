import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

function Contact() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
      id="contact"
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Got any questions?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Get in touch!
      </Typography>
      <Grid container justifyContent="center" spacing={2} sx={{ width: 'fit-content' }}>
        <Grid item>
          <IconButton href="https://github.com/AyuDwi1996" sx={iconStyle}>
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.linkedin.com/in/ayushi-dwivedi-15b469196/" sx={iconStyle}>
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="mailto:adwivedi@horizon.csueastbay.edu" sx={iconStyle}>
            <EmailIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
