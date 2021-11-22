import {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
const GPopOverData = ({items,colorInvert}) => {
    const theme = useTheme();
    const [activeLink, setActiveLink] = useState('');
    useEffect(() => {
      setActiveLink(window && window.location ? window.location.pathname : '');
    }, []);
  
    const hasActiveLink = () => items.find((i) => i.href === activeLink);
    const linkColor = colorInvert ? 'common.white' : 'text.primary';

    return(
        <Grid container spacing={0.5}>
          {items.map((p, i) => (
            <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
              <Button
                component={'a'}
                href={p.href}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color:
                    activeLink === p.href
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeLink === p.href
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  fontWeight: activeLink === p.href ? 600 : 400,
                }}
              >
                  <Typography fontWeight={ 400}>
                        {p.displayName}
                </Typography>
            </Button>

                    <Box display="flex">
                        {
                             p.target.elements && p.target.elements.map((subProd)=>(
                                <Box marginLeft={2}>
                                   <Button variant="outlined"> {subProd.displayName} </Button>
                                </Box>

                             ))
                        }

                    </Box>
            </Grid>
          ))}
        </Grid>
    )

}
export default GPopOverData;