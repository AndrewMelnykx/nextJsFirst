import React, { useCallback } from 'react';
import { Slider, Box, Typography } from '@mui/material';
import { mainGreenColor } from 'components/utilits/helpers/color';
import { HANDLE_SELECT_YEAR } from '../../redux/actions/action_types';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectYears } from '../../redux/selectors/selectors_for_filter';

export default function SelectByYear() {
  const dispatch = useDispatch();
  const selectYearValue = useSelector(selectSelectYears);

  const handleYearChanging = useCallback(
    (_event: Event, changedYear: number[] | number) => {
      dispatch({
        type: HANDLE_SELECT_YEAR,
        payload: changedYear,
      });
    },
    [dispatch],
  );

  return (
    <Box width={280} top={'70px'} position={'relative'} ml={1}>
      <Typography mb={2} fontFamily={'Roman Jelly'} fontSize={20}>
        <i>Released by:</i>
      </Typography>
      <Slider
        sx={{
          color: `${mainGreenColor}`,
          '& .MuiSlider-thumb': {
            backgroundColor: `${mainGreenColor}`,
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#ccc',
          },
          fontFamily: 'Roman Jelly',
        }}
        getAriaLabel={() => 'Year range'}
        value={selectYearValue}
        onChange={handleYearChanging}
        valueLabelDisplay="auto"
        min={1960}
        max={2024}
        step={1}
      />
    </Box>
  );
}
