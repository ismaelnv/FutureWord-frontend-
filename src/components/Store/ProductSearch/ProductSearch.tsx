"use client"
import styles from './ProductSearch.module.sass';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../../redux/searchSlice';

export const ProductSearch = () => {

   const dispatch = useDispatch();
   const [inputValue, setImputValue] = useState('');

    const handleSearch = () => {
        console.log("dato normal:"+ inputValue)
        dispatch(setSearchQuery(inputValue));
    }

    return(

        <div className={styles.search}>

            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Product finder"
                    inputProps={{ 'aria-label': 'product finder' }}
                    value={inputValue}
                    onChange={(e) => setImputValue(e.target.value)}
                    onKeyDown={(e) => {

                        if (e.key === 'Enter') {

                          e.preventDefault(); // Evita la recarga de la página
                          handleSearch();
                        }
                    }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton> 
            </Paper>
        </div>
    );
};