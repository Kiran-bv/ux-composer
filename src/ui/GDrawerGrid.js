import {React,useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GDrawerGrid(props) {

    console.log('::: GDrawerGrid ::::', props)

    const [menuData, setMenuData] = useState(props.data);

    return (
        <Box sx={{ flexGrow: 1, padding: '10px', display:'flex', flexDirection:'column'}}>
          
          {menuData && menuData.map((menu) => (
                <Link href={menu.path===undefined?"/":menu.path } key={menu.name}>
                  <Button color="inherit">{menu.name}</Button>
                </Link>
              
            ))
            }
        </Box>
    );
}
