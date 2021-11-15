import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
const GRadioButtons = ({field,register,errors}) => {

    const validations = field.validations;

    return (
      <FormControl component="fieldset">
        <FormLabel error={Boolean(errors && errors[field.name])}
          component="legend">{field.label}</FormLabel>
        <RadioGroup row defaultValue={field.defaultValue}
          name={field.name}
        >
          {
            field.controlLabels.map(radioField => (
              <FormControlLabel {...register(field.name, validations)} value={radioField.value} control={<Radio />} label={radioField.label} />
            ))
          }
        </RadioGroup>
        {
          <Typography control="span" sx={{ color: 'red' }}>{errors[field.name]?.message}</Typography>
        }
      </FormControl>
    )

  }
  export default GRadioButtons;