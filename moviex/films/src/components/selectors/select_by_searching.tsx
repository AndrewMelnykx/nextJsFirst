import React, { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { Box, TextField } from '@mui/material';
import getMovieList from 'data/fetched_data/fetched_movie_list_data';
import {
  HANDLE_RESEARCH_INPUT,
  HANDLE_MOVIE_SEARCH,
} from '../../redux/actions/action_types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPageCurrent,
  selectSearchData,
} from '../../redux/selectors/selectors_for_filter';

const MemoizedTextField = React.memo(TextField);

function MovieBySearching() {
  const [inputValue, setInputValue] = useState<string>('');
  const page = useSelector(selectPageCurrent);
  const searchData = useSelector(selectSearchData);
  const dispatch = useDispatch();

  const keepTheChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      dispatch({
        type: HANDLE_RESEARCH_INPUT,
        payload: value,
      });
    },
    [dispatch],
  );
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data = await getMovieList(inputValue, page);

        dispatch({
          type: HANDLE_MOVIE_SEARCH,
          payload: data.data.results,
        });
      } catch (error) {
        console.error('Failed to fatch', error);
      }
    };
    getMovieData();
  }, [inputValue]);
  useEffect(() => {
    const resetFilter = () => {
      setInputValue('');
    };
    if (!searchData || searchData.length === 0) resetFilter();
  }, [searchData]);
  return (
    <Box mt={1.5} ml={1} width={'90%'}>
      <MemoizedTextField
        label={'Find a movie'}
        fullWidth
        value={inputValue}
        onChange={keepTheChange}
        variant="standard"
      />
    </Box>
  );
}

export default React.memo(MovieBySearching);
