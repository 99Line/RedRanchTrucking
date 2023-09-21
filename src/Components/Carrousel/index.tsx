import Box from '@mui/material/Box';
import Image1 from '@Assets/Image1.jpeg'
import { theme } from '@Theme/theme';

export default function Carrousel() {
    //TODO Change colors to theme
  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, height: '70vh' }} >
        <img src={Image1} className='Carrousel-Images' alt="black and white truck" />
        
    </Box>
  )
}
