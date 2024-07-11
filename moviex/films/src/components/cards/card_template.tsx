import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { PropsForCardsData } from 'data/fetched_data/rating_popular_data';
import { api_image_link } from 'data/fetched_data/rating_popular_data';
import FavoriteButton from './custom_button';
import { useSelector } from 'react-redux';
import { selectInFavorites } from '../../redux/selectors/selectors_for_data_handling';
import Cookies from 'js-cookie';

const MovieTemplate: React.FC<{
  movie: PropsForCardsData;
  handleFavoriteList: (
    movieId: number,
    token: string | undefined,
  ) => Promise<void>;
}> = ({ movie, handleFavoriteList }) => {
  const currentStateFavorites = useSelector(selectInFavorites);
  const apiKey = Cookies.get('token');

  return (
    <Box width={'100%'} key={movie.id}>
      <Card>
        <Paper>
          <Link to={`/inf_about/${movie.id}`}>
            <CardMedia
              component="img"
              image={`${api_image_link}${movie.poster_path}`}
              alt={movie.title}
              height={150}
              width={300}
            />{' '}
          </Link>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            columnGap={'10px'}
          >
            <CardContent>
              <Typography
                fontFamily={'Roman Jelly'}
                fontSize={17}
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                {movie.vote_average}
              </Typography>
              <Typography
                fontFamily={'Roman Jelly'}
                fontSize={20}
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                {movie.title}
              </Typography>
              <FavoriteButton
                buttonId={movie.id}
                handleFavoriteToggling={handleFavoriteList}
                ApiKey={apiKey}
                isFavorite={currentStateFavorites.some(
                  (fav) => fav.id === movie.id,
                )}
              />
              <Link to={`/inf_about/${movie.id}`}></Link>
            </CardContent>
          </Box>
        </Paper>
      </Card>
    </Box>
  );
};
export default MovieTemplate;
