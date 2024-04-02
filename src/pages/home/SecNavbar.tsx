import { Box,AppBar, Toolbar, Button, Divider } from '@mui/material';

const SecNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#e4973d' }}>
      <Toolbar>
        <Box display="flex" justifyContent="center" width="100%">
          <Button color='inherit'  sx={{ color: '#6B0101', paddingX:7, '&:hover': { backgroundColor: '#D2691E' } }}>MENU</Button>
          <Divider sx={{ backgroundColor: '#fff' }} orientation="vertical" flexItem />
          <Button color='inherit'sx={{ color: '#6B0101',paddingX:7,  '&:hover': { backgroundColor: '#D2691E' } }}>TAKE OUT</Button>
          <Divider sx={{ backgroundColor: '#fff'}} orientation="vertical" flexItem />
          <Button color='inherit' sx={{ color: '#6B0101',paddingX:7,  '&:hover': { backgroundColor: '#D2691E' } }}>CATERING</Button>
          <Divider sx={{ backgroundColor: '#fff' }}  orientation="vertical" flexItem />
          <Button color='inherit' sx={{ color: '#6B0101',paddingX:7,  '&:hover': { backgroundColor: '#D2691E' } }}>ABOUT US</Button>
          <Divider sx={{ backgroundColor: '#fff' }} orientation="vertical" flexItem />
          <Button color='inherit' sx={{ color: '#6B0101',paddingX:7,  '&:hover': { backgroundColor: '#D2691E' } }}>GALLERY</Button>
          <Divider sx={{ backgroundColor: '#fff' }} orientation="vertical" flexItem />
          <Button color='inherit' sx={{ color: '#6B0101',paddingX:7,  '&:hover': { backgroundColor: '#D2691E' } }}>REVIEWS</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SecNavbar;
