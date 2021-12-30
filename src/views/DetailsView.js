import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const DetailsView = ({viewDetails}) => {

    console.log("View Details from DetailsView ::: ", viewDetails);

    return(
        <Box>
            <Box>
            <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'left'}
        >
          {viewDetails && viewDetails.record && viewDetails.record.record_header}
        </Typography>
        {
            viewDetails && viewDetails.record && viewDetails.record.productImages.map(prodImages=>(
                prodImages.produtImages.map(image=>(
                    <Box sx={{width: 300,
                        height: 300}} component="img" src={image.url}/>
                ))
            ))
        }
        
            </Box>
            <Divider/>
            <Box sx={{width:'50%'}}>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h5">Manufacturer</Typography>
                        <Typography>Test</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>Style</Typography>
                        <Typography>Test</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>Shape</Typography>
                        <Typography>Square</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider/>
            <Box>
                <Box sx={{width:'50%'}}>

                </Box>
                <Box sx={{width:'50%'}}>
                    <Typography sx={{ fontWeight: 'bold' }}>Specifications</Typography>
                    <Typography variant='p'>{viewDetails.record.specifications}</Typography>
                </Box>
            </Box>
        </Box>
    )

}
export default DetailsView;