import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router'

export default function ComboBox({pages}) {
    console.log("Pages ::: ",pages);
    const router = useRouter()

    let displayNames = [];
    pages.elements.forEach((element)=>{
    element.target.elements.forEach(ele => {
      ele.target.elements && ele.target.elements.forEach(subEle =>{
          let obje = {label:subEle.displayName}
          displayNames.push(obje);
        })
    })
  })

  const handleChange = (event,value,reason) => {
    //alert("from handleChange");
    //console.log(event);
    console.log(value);
    //console.log(reason);
    router.push('/summaryDetails/'+ encodeURI(value.label));
  }

  return (
    <Autocomplete
      disablePortal
      fullWidth
      autoComplete={true}
      id="combo-box-demo"
      options={displayNames}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Search here" />}
    />
  );
}