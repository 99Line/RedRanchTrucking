import Box from '@mui/material/Box';
import Carrousel from './Carrousel';
import Logo from '../Assets/logo.png'
import Tabs from '../Components/Tabs'
export default function Header() {
    //TODO Change colors to theme
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <Box  sx={{ bgcolor: 'black', height: '30vh', px:'43px' }}>
            <img src={Logo} className='Logo' alt='Red Ranch Trucking Logo'/>
            <Tabs/>
        </Box>
        <Carrousel></Carrousel>
    </Box>
  )
}
