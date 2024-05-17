import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import PageHeroLayout from './PageHeroLayout';
import backgroundHero from '../../assets/backgroundHero.png'
const backgroundImage =backgroundHero

export default function PageHero() {
  return (
    <PageHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        I'm Ayushi Dwivedi
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
      I graduated with a master's in Computer Science in May 2024, specializing in Software Engineering & AI, achieving a GPA of 3.97. Throughout my masters program, I've excelled in research, received scholarships, and represented my university Cal State East Bay at CSU-wide competitions.  
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="https://drive.google.com/file/d/1jzAY8DT-xyVkYa6d_oApmB4Zn9rexUle/view?usp=drive_link"
        sx={{ minWidth: 200 }}
      >
        Resume
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Look at my journey
      </Typography>
    </PageHeroLayout>
  );
}
