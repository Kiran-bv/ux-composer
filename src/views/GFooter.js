import * as React from 'react';
import {  useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import useWindowDimensions from '../hooks/useWindowDimensions';
import APPConfig from '../appConfig'
import Paper from '@mui/material/Paper';

const GFooter = (props) => {

    console.log('::: GFooter :::')
    //console.log(props.data.footer.data)

    const [footerNav, setFooterNav] = useState();
    const dimensions = useWindowDimensions();
    const [dense, setDense] = React.useState(false);
    console.log("dimensions", dimensions);
    const Demo = styled('div')(({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
    }));

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    useEffect(() => {
      fetch(APPConfig.api.footer)
        .then(response => {
          console.log('from table api success callback');
          console.log(response.json);
          return response.json()
        })
        .then(data => {
          console.log("next js footer result", JSON.stringify(data));
          console.log("result", data);
          setFooterNav(data.footer.data.nav)

        });
    }, []);
    

    return (
    //   <Box sx={{ flexGrow: 1,display:'flex', backgroundColor:'black' }}>
    //     {
    //       footerNav && footerNav.map((nav)=>(
    //         <>
    //             <Grid item xs={12} md={6}>
    //               <Typography sx={{ mt: 4, ml:1, mb: 2,color:'white' }} variant="h4" component="div">
    //                 {nav.name}
    //               </Typography>
    //               <Demo>
    //                 <List sx={{ backgroundColor:'black' , color:'white'}} dense={dense}>
    //                     {
    //                       nav.links.map((link)=>(
    //                               <ListItem key={link.displayName}>
    //                                   <ListItemText
    //                                     primary={link.displayName}
    //                                   />
    //                                 </ListItem>
    //                       ))
    //                     }

    //                 </List>
    //               </Demo>
    //             </Grid>
    //         </>

    //       ))
    //     }
    // </Box>
    <Box sx={{ flexGrow: 1,backgroundColor:'black' }}>
    <Grid container spacing={2}>
     {
     footerNav && footerNav.map((nav)=>(
            <>
             <Grid item xs={3} sx={{ flexGrow: 1}}>
                   <Typography sx={{ mt: 4, ml:1, mb: 2,color:'white' }} variant="h4" component="div">
                     {nav.name}
                  </Typography>
                  <Demo>
                     <List sx={{  color:'black'}} dense={dense}>
                         {
                           nav.links.map((link)=>(
                                   <ListItem key={link.displayName}>
                                       <ListItemText
                                         primary={link.displayName}
                                       />
                                     </ListItem>
                           ))
                         }
                     </List>
                  </Demo>
                 </Grid>
            </>

          ))
        }

    </Grid>
    </Box>
    )

}
export default GFooter;