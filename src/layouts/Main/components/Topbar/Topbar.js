import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import { useSelector } from 'react-redux';



import Link from 'next/link'

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const state = useSelector((state) => state);

  console.log(">>>>>>>>>>>>>>  REDUX STATE FROM TOPBAR <<<<<<<<<<<<<<<<<", state);

  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    furniture:furniturePages,
    bathrooms:bathroomPages,
    equipment:equipmentPages,
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

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
      
      <Box>
        <Link href="/hello">
        
            <NavItem
              title={'Landings'}
              id={'landing-pages'}
              items={landingPages}
              colorInvert={colorInvert}
            />
         
        </Link>
        </Box>


        <Box marginLeft={4}>
        <Link href="/contact">
          Contact
        </Link>
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
        </Box>

        <Box marginLeft={4}>
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
        </Box>

        {/* <Box marginLeft={4}>
          <NavItem
            title={'Equipment'}
            id={'equipment-pages'}
            items={equipmentPages}
            colorInvert={colorInvert}
          />
        </Box> */}

        {/* <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
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