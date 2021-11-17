import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GPopOver({open,anchorEl,data,id}) {

  console.log("GPopOver ::: ",data);

  return (
    <div>
      <Popover
        id={id}
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: { width: '100%',height:'50%' },
        }}
        //onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box sx={{ flexGrow: 1 }}>

          {
            data.map((element,i)=>(
              <>
              <Grid container spacing={2} key={i}>
                <Grid item xs={3}>
                    <Box>
                        <Box>
                            <Divider/>
                            <Button
                              component={'a'}
                              variant="contained"
                              color="primary"
                              size="large"
                              href={'/home'}
                            >
                              {element.displayName}
                            </Button>
                        </Box>
                        <Box sx={{disply:'flex'}}>
                            
                          <Box
                              display="flex"
                              flexDirection={{ xs: 'column', sm: 'row' }}
                              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                              marginTop={4}
                            >
                              
                                {
                              element.target.elements && element.target.elements.map((item)=>(
                              <>
                                    
                                    
                                <Box
                                  marginTop={{ xs: 2, sm: 0 }}
                                  marginLeft={{ sm: 2 }}
                                  width={{ xs: '100%', md: 'auto' }}
                                >
                                    <Button
                                      component={'a'}
                                      href={'/docs/introduction'}
                                      variant="outlined"
                                      color="primary"
                                      size="large"
                                    >
                                      {item.displayName}
                                    </Button>
                                </Box>
                              </>
                            ))
                        
                            }
                             

                              </Box>
                            

                            
                        </Box>
                    </Box>
                </Grid>
                
              </Grid>
              </>
            ))
          }
            {/* <Grid container spacing={2}>
              <Grid item xs={8}>
                <Item>xs=8 {data}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>xs=4 {data}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>xs=4 {data}</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>xs=8 {data}</Item>
              </Grid>
            </Grid> */}
        </Box>
      </Popover>
    </div>
  );
}
