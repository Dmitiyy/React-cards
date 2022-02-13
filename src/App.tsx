import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';

const cardImgLink = 'https://images.unsplash.com/photo-1644728169742-a36597989b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80';

function App() {
  return (
    <div className="app">
      <div className='app__container'>
        <Card sx={{ maxWidth: 345 }} style={{backgroundColor: '#1d1d1d'}}>
          <CardActionArea>
            <CardContent>
              <Box className='app__container-add'>
                <Typography color='#fff' variant='h6'>Create new card</Typography>
                <Typography color='#fff' variant='h1'>+</Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        {
          [0, 1, 2, 3, 4, 5, 6].map(item => {
            return (
              <Card sx={{ maxWidth: 345, maxHeight: 450 }} style={{backgroundColor: '#1d1d1d'}} key={item}>
                <CardHeader title={
                  <Typography color='#fff' variant='h6'>John Smith</Typography>
                } action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon style={{ fill: '#fff' }} />
                  </IconButton>
                } />
                <CardMedia component='img' height='194' image={cardImgLink} alt='card photo' />
                <CardContent>
                  <Typography component='p' variant='body1' color='#fff'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </Typography>
                  <Typography component='p' variant='subtitle1' color='#fff' marginTop='10px'>
                    Принимает участие N пользователей
                  </Typography>
                </CardContent>
              </Card>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
