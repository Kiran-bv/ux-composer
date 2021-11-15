import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup'
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
const GCheckbox = ({field,register,errors}) => {
    const validations = field.validations;
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">{field.label}</FormLabel>
          <FormGroup>
            {
              field.formLabels.map((item) => (
                <FormControlLabel control={<Checkbox defaultChecked={item.defaultCheck} />}
                  {...register(field.name, validations)} value={item.value} label={item.label} />
              ))
            }
          </FormGroup>
          {
            <Typography control="span" sx={{ color: 'red' }}>{errors[field.name]?.message}</Typography>
          }
        </FormControl>
      </Box>
    )

  }
  export default GCheckbox;