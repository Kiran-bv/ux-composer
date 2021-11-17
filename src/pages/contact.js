import { React,useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { LoadingButton } from '@mui/lab';
import GTextField from '../ui/GTextField';
import GRadioButtons from '../ui/GRadioButtons';
import GSelectBox from '../ui/GSelectBox';
import GCheckbox from '../ui/GCheckbox';
import APPConfig from '../../appConfig';

import Container from '../../components/Container';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useSession } from "next-auth/react"

export default function Contact(props) {

  const { data: session } = useSession();

  console.log("session data ,",session);

  const [formFields, setFormFields] = useState([]);

  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    mode: "all"
  });

  useEffect(() => {
    fetch(APPConfig.api.contact)
      .then(response => {
        console.log('from success callback');
        console.log(response.json);
        return response.json()
      })
      .then(data => {
        console.log("result /api/contact", JSON.stringify(data));
        console.log(data.contact.formFields);
        setFormFields(data.contact.formFields);
      });
  }, []);


  const onSubmit = (data) => {
    console.log('from submit -----');
    console.log(data);
  }
  console.log('form errors', errors);
  return (
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
              <Box>

              <Grid container spacing={4}>
              <Stack spacing={2}>
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        formFields && formFields.map((field) => {
          if (['text', 'password', 'number', 'email'].includes(field.type)) {
            return <>
            
              <GTextField field={field} register={register} errors={errors}/>
             
            </>;
          }
          if ('radio' === field.type) {
            return <GRadioButtons field={field} register={register} errors={errors}/>;
          }
          if ('select' === field.type) {
            return <GSelectBox field={field} register={register} errors={errors}/>;
          }
          if ('checkbox' === field.type) {
            return <GCheckbox field={field} register={register} errors={errors}/>;
          }
        })
      }
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        Register
      </LoadingButton>
      
    </form>
    </Stack>
    </Grid>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </Box>
  )
}
