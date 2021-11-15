import TextField from '@mui/material/TextField';
const GTextField = ({field,register,errors}) => {

    const validations = field.validations;
    return (
      <TextField
        fullWidth
        label={field.label}
        type={field.type}
        {...register(field.name, validations)}
        error={Boolean(errors[field.name] && errors[field.name])}
        helperText={errors[field.name]?.message}
      />
    )
  }
  export default GTextField;