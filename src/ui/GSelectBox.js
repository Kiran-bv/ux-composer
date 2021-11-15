import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
const GSelectBox = ({field,register,errors}) => {
    console.log('select box field', field)

    const validations = field.validations;

    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={field.label}
            {...register(field.name, validations)}
          >
            <MenuItem value="">Please Select</MenuItem>
            {
              field.menuItems.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))
            }
          </Select>
          {
            <Typography control="span" sx={{ color: 'red' }}>{errors[field.name]?.message}</Typography>
          }
        </FormControl>
      </Box>
    )
  }
  export default GSelectBox;