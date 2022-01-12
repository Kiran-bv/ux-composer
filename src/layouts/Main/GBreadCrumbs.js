import  { useState, useEffect, React } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useSelector, useDispatch } from 'react-redux';


function handleClick(event) {
 // event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function GBreadCrumbs() {

  const breadCrumbsState = useSelector((state) => state);
  console.log("breadCrumbsState from  GBreadCrumbs ::: ", breadCrumbsState.persistedReducer.breadCrumbs.crumbs);
  //let {crumbs} = breadCrumbsState;
  console.log("crumbs state ::: ", breadCrumbsState);

  let crumbsNew = breadCrumbsState.persistedReducer.breadCrumbs.crumbs;
  const [crumbs, setCrumbs] = useState(breadCrumbsState.persistedReducer.breadCrumbs.crumbs);
  console.log("crumbsNew state value is ", crumbsNew);
   useEffect(()=>{
    alert("crumbs from useEffect :::: ", crumbs);
    console.log("crumbs from useEffect ::::");
    setCrumbs(crumbsNew);
  },[])

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/allcategories">
          All Categories
        </Link>
        { 
          crumbs.map(crumb => (
            <Link underline="hover" color="inherit" href={crumb.path}>
              {crumb.dispalyName}
            </Link>
          ))
        }
      </Breadcrumbs>
    </div>
  );
}