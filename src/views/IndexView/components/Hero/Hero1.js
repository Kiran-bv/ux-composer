import React from 'react';
import { alpha,useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Main from '../../../../layouts/Main';
import Container from '../../../../../components/Container';

//import { Form } from './components';

const Hero1 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    // <Main>
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
        <Box paddingY={{ xs: 0,sm: '4rem', md: '8rem' }}>
      <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
      >
        <Container>
          <Grid container spacing={6}>
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              WishKarma
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                {/* <Typed
                  strings={['startup.', 'future.', 'success.']}
                  typeSpeed={80}
                  loop={true}
                /> */}
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
             World Largest Catalog of Buidling & Construction materials
            </Typography>
            </Box>
            </Grid>
            {isMd ? (
              <Grid item container justifyContent={'center'} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Box
                    component={'img'}
                    src={
                      'https://www.wishkarma.com/landing-banner.jpg'
                    }
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </Box>
    </Box>
  );
};

export default Hero1;
