import React, { useCallback } from 'react';
import '../../App.css';
import { Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { HANDLE_PAGINATION } from '../../redux/actions/action_types';
import { selectPageCurrent } from '../../redux/selectors/selectors_for_filter';

function PaginationImport() {
  const page = useSelector(selectPageCurrent);
  const dispatch = useDispatch();
  const handlePaginationChange = useCallback(
    (_event: React.ChangeEvent<unknown>, page: number) => {
      dispatch({
        type: HANDLE_PAGINATION,
        payload: page,
      });
    },
    [dispatch],
  );
  return (
    <Pagination
      classes={{ root: 'custom-pagination' }}
      count={500}
      onChange={handlePaginationChange}
      page={page}
      size="small"
    ></Pagination>
  );
}

export default PaginationImport;
