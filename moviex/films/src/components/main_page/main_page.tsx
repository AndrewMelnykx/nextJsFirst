import * as React from 'react';
import '../../App.css';
import './main_page.css';
import LoggingPopup from '../modals/login_modal';
import RegistrationModal from '../modals/registration_modal';
import { Box } from '@mui/material';
import MainHeader from '../header/header';
import MovieFilter from '../filter/filter';
import CardsByCondition from 'components/cards/cards_by_condition';

const MainPage = () => {
  return (
    <Box display="flex" justifyContent="space-between" height="100%">
      <MainHeader />
      <Box display="flex" alignItems="flex-end">
        <MovieFilter />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={2}
      >
        <CardsByCondition />
      </Box>
      <Box>
        <LoggingPopup contentForm={null} />
        <RegistrationModal contentForm={null} />
      </Box>
    </Box>
  );
};

export default MainPage;
