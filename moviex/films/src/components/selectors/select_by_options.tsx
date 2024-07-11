import React from 'react';

import { Typography, Select, SelectChangeEvent, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectOptions } from 'data/data_selectors/data_for_select';
import { HANDLE_SELECT_OPTION } from '../../redux/actions/action_types';
import { selectSelectorsOptions } from '../../redux/selectors/selectors_for_filter';

export default function SelectByOption() {
  const dispatch = useDispatch();
  const selectValue = useSelector(selectSelectorsOptions);

  const handleOptionChanging = (e: SelectChangeEvent<string>) => {
    dispatch({
      type: HANDLE_SELECT_OPTION,
      payload: e.target.value,
    });
  };

  return (
    <>
      <Typography
        ml={1}
        position={'relative'}
        top={'30px'}
        fontFamily={'Roman Jelly'}
        fontSize={20}
      >
        <i>Sort by:</i>
      </Typography>
      <Select
        sx={{
          width: '285px',
          position: 'relative',
          top: '50px',
          fontFamily: 'Roman Jelly',
        }}
        variant="standard"
        value={selectValue}
        onChange={handleOptionChanging}
        defaultValue={'Popularity'}
      >
        {selectOptions.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
