import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
  'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
  'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
  'https://assets.maccarianagency.com/svg/logos/slack-original.svg',
];

const mockNew = [
  'https://res.cloudinary.com/dzd0mlvkl/image/upload/v1611429186/aeb9200d-6ab1-b9a1-4284-841c2f577514',
  'https://res.cloudinary.com/dzd0mlvkl/image/upload/v1611429186/vlgqy0p2upeljer5tpsf',
  'https://res.cloudinary.com/dzd0mlvkl/image/upload/v1611429186/d6040273-4a57-6959-1510-810f949ed5b1',
  'https://res.cloudinary.com/dzd0mlvkl/image/upload/v1611429186/aeb9200d-6ab1-b9a1-4284-841c2f577514',
  'https://res.cloudinary.com/dzd0mlvkl/image/upload/v1611429186/vlgqy0p2upeljer5tpsf',
  'https://res.cloudinary.com/dzd0mlvkl/image/upload/v1611429186/d6040273-4a57-6959-1510-810f949ed5b1'

]

const Partners = () => {
  console.log("------->  From Partners");
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box style={{padding:'60px',backgroundColor:'blue'}}>
       <Slider {...sliderOpts}>
        {mockNew.map((item, i) => (
          <Box maxWidth={120} key={i} marginX={3}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
              
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Partners;
