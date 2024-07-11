import React from 'react';
import './filter.css';
import CheckboxGenres from '../utilits/checkbox';
import PaginationImport from '../pagination/pagination';
import { Paper, Typography, FormControl, Box, IconButton } from '@mui/material';
import { RotateLeft } from '@mui/icons-material';
import SelectByYear from '../selectors/select_by_year';
import SelectByOption from 'components/selectors/select_by_options';
import MovieBySearching from 'components/selectors/select_by_searching';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors/selectors_for_authorization';
import { HANDLE_RESET_WHOLE_FILTER } from '../../redux/actions/action_types';

function MovieFilter() {
  const dispatch = useDispatch();
  const isFilterVisible = useSelector(selectFilter);
  const handleResetClick = () => {
    dispatch({
      type: HANDLE_RESET_WHOLE_FILTER,
      genres: [],
      selectOptions: [],
      selectYears: [],
      researchInput: ' ',
    });
    console.log('Everything was reset ');
  };

  return isFilterVisible ? (
    <>
      <Paper
        sx={{
          position: 'relative',
          width: '330px',
          top: '-10%',
          marginLeft: '5%',
          height: '75%',
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position={'relative'}
          flexDirection={'column'}
        >
          <Box display={'flex'} alignItems={'center'}>
            <Typography
              variant="h4"
              component="h6"
              mr={24}
              ml={1}
              fontFamily={'Roman Jelly'}
            >
              Filters
            </Typography>
            <IconButton onClick={handleResetClick} type="reset" title="Reset">
              <RotateLeft></RotateLeft>
            </IconButton>
          </Box>
          <MovieBySearching />
          <FormControl>
            <SelectByOption />
            <SelectByYear />
            <CheckboxGenres />
            <Box mb={8}>
              <PaginationImport />
            </Box>
          </FormControl>
        </Box>
      </Paper>
    </>
  ) : null;
}
export default React.memo(MovieFilter);
