import {useEffect,useState,React} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {api} from '../scripts/api';
import FiltersView from './FiltersView'

const SummaryDetails = ({schemaRecords,summaryDetailsLink,schemaRecordsCount,payload,applicableFilters}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  
  const [page, setPage] = useState('');
  const [schemaRecordsArr, setSchemaRecordsArr] = useState(schemaRecords);

  // useEffect(() => {
  //   alert("page loading");
  //   //setSchemaRecordsArr(schemaRecords);
  // }, [schemaRecordsArr]);

  const handleChange = async (event) => {
    setPage(event.target.value);
    //alert(event.target.value);
    console.log('skip number is :: ', (event.target.value-1)*24);
    payload.skip = (event.target.value-1)*24;
    console.log("new payload is ::: ",payload);
    let schemaRecords =  await api.getSchemaRecords(payload);
    console.log("Filtered schema records :: ", schemaRecords);
    setSchemaRecordsArr(schemaRecords);
  };

  //console.log("Summary Details records new::: ", schemaRecords);
  console.log("type of schemaRecordsCount", typeof(schemaRecordsCount));
  console.log("Number of pages ", Math.ceil(schemaRecordsCount.total/24))

  return (
    <Box style={{padding:'30px'}}>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          {summaryDetailsLink}
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Better way to find a property
        </Typography>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={page}
              label="Select Page"
              onChange={handleChange}
            >
              {
                [...Array(Math.ceil(schemaRecordsCount.total/24))].map((_, i) => (<MenuItem value={i+1}>{i+1}</MenuItem>))
              }
            </Select>
        </FormControl>
        <FiltersView applicableFilters={applicableFilters}/>
      </Box>

      <Grid container spacing={4}>
        {schemaRecordsArr && schemaRecordsArr.records && schemaRecordsArr.records.map((record, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                
{

                record.value.productImages.map((imageRecord)=> imageRecord.produtImages.map((innerImageRec)=>(
                    
                    <>
                    {innerImageRec.url && 

              <Link underline="none" href={ {pathname:'/details/'+record.value.recordId, query: { org: record.value.org }}}>
                            <CardMedia
                            title={innerImageRec.caption}
                            image={innerImageRec.url}
                                sx={{
                                position: 'relative',
                                height: { xs: 240, sm: 340, md: 280 },
                                overflow: 'hidden',
                                }}
                            >
                            </CardMedia>
              </Link>
                    
                            }
                            </>
                    
                )))


}
                
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {record.value.name}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    
                    
                  </Box>
                  
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    
                  </CardActions>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
        {/*<Grid item xs={12}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            justifyContent={'center'}
            marginTop={2}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Book a space
            </Button>
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              fullWidth={isMd ? false : true}
            >
              Explore more
            </Box>
          </Box>
        </Grid>*/}
      </Grid>
    </Box>
  );
};

export default SummaryDetails;
