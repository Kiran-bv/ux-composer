import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks({applicableFilters}) {
  const [personName, setPersonName] = React.useState([]);
  const [filters, setFilters] = React.useState({});
  const filtersArr = [];
  

  const handleChange = (event,key) => {
    const {
      target: { value },
    } = event;
    console.log('filters Array:::', filtersArr)
    console.log("filter key ::: ", key);
    console.log("filter value ::: ", value);
    filtersArr[key] = value;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const filterView = (key) => {
    let filterObj = {[key]:[]}
    filtersArr.push(filterObj);
    //setFilters({...filters, key:[]})
    // setMyState({
    //   ...myState,
    //   propB: false
    // });
    
    if(key.includes('$'))
      return;
    return (
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">{key}</InputLabel>
      <Select
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={personName}
      onChange={(e)=>handleChange(e,key)}
      input={<OutlinedInput label="Tag" />}
      renderValue={(selected) => selected.join(', ')}
      MenuProps={MenuProps}
      >
      {applicableFilters[key].map((name) => (
          <MenuItem key={name} value={name}>
          <Checkbox checked={personName.indexOf(name) > -1} />
          <ListItemText primary={name} />
          </MenuItem>
      ))}
      </Select>
</FormControl>

    )
  }

  return (
    <div>
      {
        Object.keys(applicableFilters).map((key)=>(
          filterView(key)
        ))
      }  
    </div>
  );
}
