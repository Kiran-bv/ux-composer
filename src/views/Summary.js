import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
const SummaryView = ({subElements,summaryLink}) => {

    const linkUrl = (str) => {
        str = str.replace(/\W+(?!$)/g, '-').toLowerCase();
        str = str.replace(/\W$/, '').toLowerCase();
        return str;
    }

    return(
        <>
            <h1>Summary View for {summaryLink}</h1>
            <Box style={{padding: '20px'}}>
                {
                    subElements && subElements.map((ele,i)=>(
                        
                        <Box key={i} style={{margin:'50px'}}>
                            
                            <Box>
                                <Typography style={{marginLeft:'17px'}} fontWeight={ 400}>
                                        {ele.displayName}
                                </Typography>
                            </Box>
                            <Box display="flex">
                                {
                                    ele.target.elements && ele.target.elements.map((subProd,i)=>(


                                        // <Box key={i} marginLeft={2}>
                                        //     <Link underline="none" href={ '/summaryDetails/'+JSON.stringify(subProd)}>
                                        //         <Button id={subProd.displayName} variant="outlined"> A {subProd.displayName} </Button>
                                        //     </Link>
                                        // </Box>

                                        <Box key={i} marginLeft={2}>
                                            <Link underline="none" href={ '/summaryDetails/'+subProd.displayName}>
                                                <Button id={subProd.displayName} variant="outlined"> A {subProd.displayName} </Button>
                                            </Link>
                                        </Box>

                                    ))
                                }

                            </Box>
                           

                        </Box>

                    ))
                }

            </Box>
        </>

    )

}
export default SummaryView;