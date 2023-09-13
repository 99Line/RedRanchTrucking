import Box from '@mui/material/Box';
import Image1 from '../Assets/Image1.jpeg'

export default function Carrousel() {
    //TODO Change colors to theme
  return (
    <Box sx={{ bgcolor: 'red', height: '70vh' }} >
        <img src={Image1} className='Carrousel-Images' alt="black and white truck" />
    </Box>
  )
}
