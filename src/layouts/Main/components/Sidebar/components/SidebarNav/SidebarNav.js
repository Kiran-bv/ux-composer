import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import Link from 'next/link'

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
              ? '/small-panda.jpeg'
              : 'https://www.wishkarma.com/wishkarma-with-title.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {/* <Box>
          <NavItem title={'Landings'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box> */}
        <Box>
          <Link href="/contact">
            Contact
          </Link>
        </Box>
        <Box>
          <Link href="/table">
            Table
          </Link>
        </Box>
        <Box>
          <Link href="/card">
            Gallery
          </Link>
        </Box>
        {/* <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
          >
            Documentation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Purchase now
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
