import AllCategoriesJSON from '../../data/allCategories.json'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function AllCategories() {
  return (<>
    <ImageList cols={4} display="flex">
        {
            AllCategoriesJSON.pageProps.allMainCategories.map(category => (
                <ImageListItem key={category.records.name}>
                    <img
                    src={category.records.image[0].url}
                    alt={category.records.record_header}
                    loading="lazy"
                    />
                    <ImageListItemBar
                        title={category.records.record_header}
                        position="below"
                    />
                </ImageListItem>
            ))
        }
    </ImageList>
    </>
  );
}