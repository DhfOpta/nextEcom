

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



const loading=()=> {
  return (
    
    <Box sx={{ display: 'flex' ,width:'100%',height:'80vh',justifyContent:"center",alignItems:"center"}}>
      <CircularProgress />
    </Box>
  );
}
export default loading