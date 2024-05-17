import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import  { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import csr from '../../assets/csr.jpg';
import acmw from '../../assets/acmw.jpg';
import gradslam from '../../assets/gradslam.jpeg';
import research from '../../assets/research.jpeg';
import volunteer from '../../assets/volunteer.jpeg';
import wil from '../../assets/wil.jpeg';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: csr,
    title: 'CSR Scholarship',
    width: '40%',
    content:'In summer 2023, I applied with a proposal mentored by my professor and got accepted for the fall 2023 semester, receiving a $1000 scholarship. I worked on my project and presented it at the annual CSR showcase in spring 2024.',
  },
  {
    url: wil,
    title: 'WIL Fellowship',
    width: '20%',
    content:'My professor recommended me for the WIL Fellowship program. I applied by writing three essays on my leadership goals and was interviewed by committee members in fall 2022. Accepted for the Spring 2023 program with 1000$ stipend, I worked on a social impact project, received mentorship, and enrolled in a WIL course. I built a strong, lifelong community and network.',
  },
  {
    url: research,
    title: 'Research Assistant',
    width: '40%',
    content:'I reached out to the graduate coordinator and searched the ongoing research at the CS department. Based on my interests, I volunteered at one of my professors research lab, which later became a paid position. I learned machine learning, deep learning, drone programming, research skills, and documentation. I also represented our research lab to visiting Japanese students.',
  },
  {
    url: gradslam,
    title: 'Grad Slam',
    width: '38%',
    content:'Grad Slam is an annual research presentation competition. In spring 2024, I submitted my project proposal and was selected. As a semifinalist, I created a 3-minute pitch video. In the final round at CSUEB, I presented my research in a 3-minute pitch, winning first place at the university. I then represented CSUEB at the CSU-wide Grad Slam, where I was selected as one of the top 13 finalists.',
  },
  {
    url: acmw,
    title: 'ACMW Club',
    width: '38%',
    content:'ACMW is a CS club, alongside others like IEEE and Google Developer in the department. Members can join clubs or participate in elections to become club officers. I served as a club officer at ACMW, where I fostered community, designed the clubs t-shirt, and organized events such as movie socials and LeetCode sessions.',
  },
  {
    url:volunteer,
    title: 'Volunteering',
    width: '24%',
    content:'I volunteered at the commencement ceremony, selling flowers. It was exciting to be part of one of the biggest events on campus. You can also volunteer for such events by building your community and staying updated through CSUEBs Instagram and LinkedIn pages.',
  },
];

export default function ExploreEastBay() {
  const [openDialogIndex, setOpenDialogIndex] = useState(null);

  const handleOpenDialog = (index) => {
    setOpenDialogIndex(index);
  };

  const handleCloseDialog = () => {
    setOpenDialogIndex(null);
  };
  
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }} id="explore">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Explore East Bay with me
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (
        <ImageIconButton
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => handleOpenDialog(index)}
        >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
                flexDirection: 'column',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
                sx={{
                  marginBottom: '1%', 
                }}
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
              <Typography variant="caption" color="inherit">
                Click to know more
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
        {openDialogIndex !== null && (
          <Dialog open={openDialogIndex !== null} onClose={handleCloseDialog}>
            <DialogTitle>{images[openDialogIndex].title}</DialogTitle>
            <DialogContent>
              <Typography>{images[openDialogIndex].content}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Box>
    </Container>
  );
}
