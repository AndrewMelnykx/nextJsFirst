import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { mainGreenColor } from './color';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  HANDLE_CARDS_VISIBILITY,
  HANDLE_FILTER_VISIBILITY,
} from '../../../redux/actions/action_types';
import { selectStatus } from '../../../redux/selectors/selectors_for_authorization';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function HandleVisibilityByStatus() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(true);
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (status !== 200) {
      dispatch({
        type: HANDLE_FILTER_VISIBILITY,
        payload: false,
      });
      dispatch({
        type: HANDLE_CARDS_VISIBILITY,
        payload: false,
      });
    } else {
      dispatch({
        type: HANDLE_FILTER_VISIBILITY,
        payload: true,
      });
      dispatch({
        type: HANDLE_CARDS_VISIBILITY,
        payload: true,
      });
    }
  }, [status, dispatch]);
  const handleClose = () => {
    setOpen(false);
  };
  return status !== 200 ? (
    <BootstrapDialog open={open} sx={{ marginBottom: '25%' }}>
      <DialogTitle sx={{ fontSize: '2.8rem' }}>
        Not authorized yet ?{' '}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{ position: 'absolute', top: 1, right: 4 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: '1.5rem',
            color: mainGreenColor,
            padding: 0.5,
          }}
        >
          <b> Please log in for further usage!</b>
        </DialogContentText>
      </DialogContent>
    </BootstrapDialog>
  ) : null;
}
