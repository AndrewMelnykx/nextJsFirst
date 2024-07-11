import React, { useEffect, useState, SyntheticEvent } from 'react';

import AutoComplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { TextField, Box, Typography, styled } from '@mui/material';
import { mainGreenColor } from './helpers/color';
import { useSelector, useDispatch } from 'react-redux';
import {
  HANDLE_GET_INITIAL_GENRES,
  HANDLE_CHECK_TOGGLING,
} from '../../redux/actions/action_types';
import { selectGenres } from '../../redux/selectors/selectors_for_filter';
import { useMegaDispatch } from '../../redux/store';
import { handleGenresToggling } from '../../redux/actions/actions_data';
import { fetchInitialGenres } from '../../redux/middleware_data/handle_thunk_data';

const CustomCheckbox = styled('span')({
  marginRight: 5,
  color: `${mainGreenColor}`,
});

export type CheckboxTypesData = {
  id: string;
  name: string;
  checked: boolean;
};

const icon = <CheckBoxOutlineBlankIcon />;
const checkedIcon = <CheckBoxIcon />;

function CheckboxGenres() {
  const [genres, setGenres] = useState<CheckboxTypesData[]>([]);
  const dispatch = useDispatch();
  const AppDispatcher = useMegaDispatch();
  const genresFromState = useSelector(selectGenres);
  useEffect(() => {
    async function fetchData() {
      const retrievedData = await AppDispatcher(fetchInitialGenres());
      const initialGenres = retrievedData.map(
        (genre: { id: string; name: string }) => {
          return {
            id: genre.id.toString(),
            name: genre.name,
            checked: false,
          };
        },
      );
      setGenres(initialGenres);
      // dispatch({
      //   type: HANDLE_GET_INITIAL_GENRES,
      //   payload: initialGenres,
      // });
    }
    fetchData();
  }, []);

  function handleChecking(
    _event: SyntheticEvent<Element, Event>,
    CheckedGenres: CheckboxTypesData[],
  ) {
    dispatch({
      type: HANDLE_CHECK_TOGGLING,
      payload: CheckedGenres,
    });
  }

  return (
    <Box width={100} ml={-0.5} mb={30}>
      <Typography
        position={'absolute'}
        top={'53%'}
        marginLeft={'4%'}
        fontFamily={'Roman Jelly'}
        fontSize={22}
      >
        {' '}
        <i>Genres:</i>
      </Typography>
      <AutoComplete
        multiple
        limitTags={2}
        value={genresFromState}
        options={genres}
        onChange={(_event, genres) => {
          handleChecking(_event, genres);
        }}
        id="genres_checkbox"
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <CustomCheckbox>{selected ? checkedIcon : icon}</CustomCheckbox>
            {option.name}
          </li>
        )}
        style={{ width: 295, position: 'absolute', top: '60%' }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose genre"
            placeholder="Genres ... "
            InputLabelProps={{
              style: { fontFamily: 'Roman Jelly' },
            }}
          />
        )}
      />
    </Box>
  );
}
export default CheckboxGenres;
