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
import GPopOver from '../../../../util/GPopOver';
import { useSession } from "next-auth/react";

import AppConfig from '../../../../../appConfig';

import AutoFill from './AutoFill'

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {

  //console.log("Topbar ::: ",pages)

  const { data: session, status } = useSession();
  const [flag, setFlag] = React.useState(false);

  console.log("Topbar session ::: ",session);
  console.log("Topbar status ::: ",status);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openedPopoverId,setOpenedPopoverId] = React.useState(null);

  // React.useEffect(async ()=>{
  //   console.log("TopBar ::: UseEffect , ",status);
  //   if(status === "authenticated"){
  //     setFlag(true);
  //     console.log("Session after login ::: ", session);
  //     const res = await fetch(AppConfig.baseUrl+AppConfig.api.menu, {method: 'POST'});
  //     const data = await res.json();
  //     console.log("Login Data menu ::: ", data);
  //   }

  // },[status])

  const handlePopoverOpen = (event,popoverId) => {
    //alert('hehhehehe');
    setOpenedPopoverId(popoverId);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpenedPopoverId(null);
    setAnchorEl(null);
  };

  // const getAuth = () => {
  //   if (status === "authenticated") {
  //     return <Box marginRight={2}
  //               padding={0.5}
  //               display={'inline-flex'}
  //               borderRadius={1}
  //               bgcolor={'primary.main'}
  //               marginLeft={1}
  //             >
  //               <Button  onClick={() => signOut()}>
  //                 <Typography
  //                   variant={'caption'}
  //                   sx={{ color: 'common.white', lineHeight: 1 }}
  //                 >
  //                     SignOut
  //                 </Typography>
  //               </Button>
  //         </Box>
  //   }else{
  //     return <Box marginRight={2}
  //               padding={0.5}
  //               display={'inline-flex'}
  //               borderRadius={1}
  //               bgcolor={'primary.main'}
  //               marginLeft={1}
  //             >
  //               <Button  onClick={() => signIn()}>
  //                 <Typography
  //                   variant={'caption'}
  //                   sx={{ color: 'common.white', lineHeight: 1 }}
  //                 >
  //                     SignIn
  //                 </Typography>
  //               </Button>
  //         </Box>
  //   }
  // }

  const open = Boolean(anchorEl);
  const state = useSelector((state) => state);
  console.log(">>>>>>>>>>>>>>  REDUX STATE FROM TOPBAR <<<<<<<<<<<<<<<<< new", state.persistedReducer.headerfooter.headerData.navs);
  const pages = state.persistedReducer.headerfooter.headerData.navs === undefined ? undefined :state.persistedReducer.headerfooter.headerData.navs[0];

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
      <Box>
        <Box>
            <AutoFill pages={pages}/>
        </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {
         pages && pages.elements.map((element,i)=>(
            <>
              {/* onMouseLeave={handlePopoverClose}    */}
                <Box key={i} marginLeft={3} onMouseEnter={(e) => handlePopoverOpen(e, i)} >
                  {/* <Link  underline="none" href={element.url ? '/summary/'+element.url :''}>
                    {element.breadCrumpName}
                  </Link> */}

                  <Link key={i} underline="none" href={element.url ? '/summary/'+element.url :''}>
                    {element.breadCrumpName}
                  </Link>
  
                </Box>
                {/* <div id="popup-container" onMouseEnter={(e) => handlePopoverOpen(e, i)}>
                  <GPopOver data={element.target.elements} open={openedPopoverId===i} colorInvert={colorInvert} anchorEl={anchorEl} id={i}/> 
                </div> */}
              
               {/* <Box marginLeft={2}>
                        <NavItem
                          title={element.breadCrumpName}
                          id={i}
                          items={element.target.elements}
                          colorInvert={colorInvert}/>  
              </Box> */}
            </>
          ))
        }

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
      </Box>
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
