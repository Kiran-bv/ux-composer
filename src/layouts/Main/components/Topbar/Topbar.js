import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import { useSelector } from 'react-redux';

import {signIn, signOut } from "next-auth/react"


import Link from 'next/link'
import Typography from '@mui/material/Typography';
import GPopOver from '../../../../util/GPopOver'

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {

  console.log("Topbar ::: ",pages)

  const[data, setData] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openedPopoverId,setOpenedPopoverId] = React.useState(null);

  const handlePopoverOpen = (event,popoverId) => {
    //alert('hehhehehe');
    setOpenedPopoverId(popoverId);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpenedPopoverId(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  


  const state = useSelector((state) => state);

  console.log(">>>>>>>>>>>>>>  REDUX STATE FROM TOPBAR <<<<<<<<<<<<<<<<<", state);

  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="wishkarma"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          // src={
          //   mode === 'light' && !colorInvert
          //     ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
          //     : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          // }

          src={
            mode === 'light' && !colorInvert
              ? '/small-panda.jpeg'
              : 'https://www.wishkarma.com/wishkarma-with-title.svg'
          }

          
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>

        {
          pages.elements.map((element,i)=>(
            <>
                <Box marginLeft={3} onMouseEnter={(e) => handlePopoverOpen(e, i)} onMouseLeave={handlePopoverClose}>
                  <Link href="/table">
                    {element.breadCrumpName}
                  </Link>
                </Box>
                <GPopOver open={openedPopoverId===i} anchorEl={anchorEl} id={'contact'} data={element.target.elements}/>
            </>
          ))
        }
      
      {/* <Box>
        <Link href="/hello">
            <NavItem
              title={'Landings'}
              id={'landing-pages'}
              items={landingPages}
              colorInvert={colorInvert}
            />
        </Link>
      </Box> */}


       {/* <Box marginLeft={4}>
          <Link href="/contact">
            <Typography
                aria-owns={open ? 'contact' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                    Contact.
              </Typography>
          </Link>
        </Box>
        <GPopOver open={open} anchorEl={anchorEl} id={'contact'} data={10}/>
        <Box marginLeft={4}>
            <Typography
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
                Hover with a Popover.
          </Typography>
        </Box>
        <GPopOver open={open} anchorEl={anchorEl} data={34} id={'mouse-over-popover'}/>
        <Box marginLeft={4}>
        <Button color="inherit" onClick={() => signIn()} >SIGN IN</Button>
        </Box>
        <Box marginLeft={4}>
          <Button color="inherit" onClick={() => signOut()}>SIGN OUT</Button>
          </Box>

        <Box marginLeft={4}>
        <Link href="/table">
          Table
        </Link>
        </Box>

        <Box marginLeft={4}>
        <Link href="/card">
          Gallery
        </Link>
        </Box>*/}

        {/* <Box marginLeft={4}>
          <NavItem
            title={'Furniture'}
            id={'furniture-pages'}
            items={furniturePages}
            colorInvert={colorInvert}
          />
        </Box>

        <Box marginLeft={4}>
          <NavItem
            title={'Bathrooms'}
            id={'bathtoom-pages'}
            items={bathroomPages}
            colorInvert={colorInvert}
          />
        </Box> */}

        {/* <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Buy now
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
