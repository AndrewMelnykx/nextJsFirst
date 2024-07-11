import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';

import { Star, ArrowBack } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { FilmCreditsProps, FilmDetailsProps } from './types';
import { api_image_link } from 'data/fetched_data/rating_popular_data';
import { useMegaDispatch } from '../../redux/store';
import { fetchDetailsData } from '../../redux/middleware_data/handle_thunk_data';

export default function MovieCards() {
  const [creditsData, setCreditsData] = useState<FilmCreditsProps>();
  const [detailsData, setDetailsData] = useState<FilmDetailsProps>();
  const { movieId } = useParams();
  const AppDispatcher = useMegaDispatch();
  const castEntry = creditsData?.cast;
  const movieCountry = detailsData?.production_countries;

  useEffect(() => {
    async function handleCreditsDetails() {
      try {
        const movieCreditsData = await AppDispatcher(
          fetchDetailsData(movieId, '/credits?language=en-US'),
        );
        const movieDetailsData = await AppDispatcher(
          fetchDetailsData(movieId, '?language=en-US'),
        );
        console.log('Data with poster', movieDetailsData);
        console.log('Credits', movieCreditsData);

        setCreditsData(movieCreditsData);
        setDetailsData(movieDetailsData);
      } catch (error) {
        console.error('Failed to fetch', error);
      }
    }

    handleCreditsDetails();
  }, [movieId]);

  return (
    <Box
      display={'grid'}
      gridTemplateColumns="repeat(auto-fill, minmax(200px,1fr))"
      gap={'65px'}
      width={'100%'}
      ml={25}
      mt={4}
    >
      <Box width={'200%'}>
        <Card>
          <Paper>
            <CardMedia
              component="img"
              image={`${api_image_link}${detailsData?.poster_path}`}
              alt={detailsData?.title}
              width={2000}
              height={500}
            ></CardMedia>
          </Paper>
        </Card>
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      ></Box>

      <Box display="flex" width={900} alignItems={'center'} mb={51}>
        <Link to={'/'}>
          <CardActions sx={{ marginLeft: '-60%' }}>
            <IconButton>
              <ArrowBack />
            </IconButton>
          </CardActions>
        </Link>
        <Typography variant="h4" alignItems={'center'}>
          {detailsData?.title} (
          {detailsData?.release_date
            ? detailsData.release_date.split('-')[0]
            : ''}
          )
        </Typography>
        <CardActions>
          <IconButton>
            <Star />
          </IconButton>
        </CardActions>
      </Box>
      <Box display="flex" width={700} flexDirection={'column'} mt={12} ml={-42}>
        <Typography variant="h4">
          <i>Cast : </i>
        </Typography>
        {castEntry?.slice(0, 5).map((castMember, index) => (
          <Typography key={index} variant="h5">
            {castMember.name}
          </Typography>
        ))}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={'column'}
        mt={12}
        ml={-55}
      >
        <Typography variant="h4">
          <i>Details : </i>
        </Typography>
        <Typography variant="h5">
          {' '}
          Vote : {detailsData?.vote_average}(average)
        </Typography>
        <Typography variant="h5">
          {' '}
          Runtime : {detailsData?.runtime} min / (
          {Math.round((detailsData?.runtime ?? 0) / 60)} hrs)
        </Typography>
        <Typography variant="h5">
          {' '}
          Country : {movieCountry?.map((country) => country.name).join(', ')}
        </Typography>
        <Typography variant="h5">
          {' '}
          <i>
            Genres :{' '}
            {detailsData?.genres?.map((genre) => genre.name).join(' ,  ')}
          </i>
        </Typography>
        <Typography variant="h5"> Budget : {detailsData?.budget}$</Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} mt={40} ml={-75} width={400}>
        <Typography variant="h4">
          Description :
          <Typography variant="h5" ml={-20}>
            {detailsData?.overview}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
