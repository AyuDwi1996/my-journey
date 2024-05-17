import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import aero from '../../assets/aero.png';
import chartbuster from '../../assets/chartbuster.png';
import explore from '../../assets/Explore.jpg';
import datafest from '../../assets/datafest.png';
import crm from '../../assets/crm.jpg';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Projects() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
      id="projects"
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          My Projects
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={aero}
                alt="Aero Assist"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Aero Assist
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project focuses on implementing path planning and obstacle avoidance drone-based system to help people with limited mobility. It involves data annotation, object detection using YOLO, and Dijkstra's path planning algorithm implementation.
                  <br />
                  <Link href="https://github.com/AyuDwi1996/Aero-Assist">GitHub Repo</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={explore}
                alt="Explore East Bay"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Explore East Bay
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An extensive web platform spotlighting research opportunities, scholarships, competitions, and on-campus jobs throughout my Master's program at CSU East Bay to help upcoming students.
                  <br />
                  <Link href="#explore">Link to Demo</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={crm}
                alt="CRM System"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  CRM System
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I developed a CRM system using Spring Boot for the backend and ReactJS for the frontend, integrating a MySQL database. This system features real-time capabilities for adding and removing customers, ensuring efficient and immediate updates to the customer database.
                  <br />
                  <Link href="https://drive.google.com/drive/folders/1KJtiGocKxl5WR6W6XRD1Iu5aV5ChSBqU?usp=drive_link">Link to project</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={datafest}
                alt="DataFest 2023"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  DataFest 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I participated in the CSUEB-wide DataFest 2023, where I utilized Power BI for data cleaning, wrangling, relationship building, and visualization. My data analysis report focused on exploring the demographic distribution of clients, the types of questions they ask, and identifying time trends.
                  <br />
                  <Link href="https://drive.google.com/drive/folders/1sfkE0-9jQ83XPimkAs3f2zQajOAWxM-q?usp=sharing">Link to project</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={chartbuster}
                alt="Chartbuster"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Chartbuster
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Developed Chart Buster, a web application using object detection and deep learning concepts to analyze uploaded graphs, making trend interpretation accessible for users with limited vision.
                  <br />
                  <Link href="https://github.com/AyuDwi1996/Chartbuster">GitHub Repo</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
