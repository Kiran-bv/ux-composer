import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
//import FiltersSelectBox from './FiltersSelectBox'

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

export default function MultipleSelectCheckmarks({applicableFilters,handleFilters}) {
  const [personName, setPersonName] = React.useState([]);
  const [filters, setFilters] = React.useState({});
  const filtersArr = [];

  const [filtersNew, setFiltersNew] = React.useState(applicableFilters);
  let filtersA = {};
  Object.keys(applicableFilters).forEach(key=>{
        filtersA[key]=[]
  })
  const [filtersCopy, setFiltersCopy] = React.useState(filtersA);
  
  

  const handleChange = (event,key) => {
    const {
      target: { value },
    } = event;
    //console.log('filters Array:::', filtersArr)
    //console.log("filter key ::: ", key);
    //console.log("filter value ::: ", value)
   
    handleFilters({filterKey:key,filterValue:value})
    filtersCopy[key] = value;
    setFiltersCopy(filtersCopy);
  };

  const filterView = (key) => {
    if(key.includes('$') || applicableFilters[key].length===0)
      return;
    return (
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">{key}</InputLabel>
      <Select
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={filtersCopy[key]}
      onChange={(e)=>handleChange(e,key)}
      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}

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
