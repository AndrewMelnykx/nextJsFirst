import React, { useEffect, useState, useMemo } from 'react';
import { Box } from '@mui/material';
import { PropsForCardsData } from '../../data/fetched_data/rating_popular_data';
import MovieTemplate from './card_template';
import { tokenFromRegistration } from 'components/utilits/helpers/const_for_modal';
import { useSelector } from 'react-redux';
import { selectCards } from '../../redux/selectors/selectors_for_authorization';
import {
  selectSelectorsOptions,
  selectPageCurrent,
  selectSearchData,
} from '../../redux/selectors/selectors_for_filter';
import { selectInFavorites } from '../../redux/selectors/selectors_for_data_handling';
import {
  fetchDataByPopularity,
  fetchDataByRating,
  fetchFavoriteList,
  setFavoriteMovie,
} from '../../redux/middleware_data/handle_thunk_data';
import { useMegaDispatch } from '../../redux/store';

const MemoizedMovieTemplate = React.memo(MovieTemplate);

export default function CardsByCondition() {
  const areCardsVisible = useSelector(selectCards);
  const [data, setData] = useState<PropsForCardsData[]>([]);
  const [optimisticData, setOptimisticData] = useState<PropsForCardsData[]>([]);
  const AppDispatcher = useMegaDispatch();
  const page = useSelector(selectPageCurrent);
  const dataBySearch = useSelector(selectSearchData);
  const selectorOptionValue = useSelector(selectSelectorsOptions);
  const inFavorites = useSelector(selectInFavorites);

  const fetchMovies = async () => {
    try {
      let dataBySelect;
      switch (selectorOptionValue) {
        case 'Popularity':
          dataBySelect = await AppDispatcher(fetchDataByPopularity(page));
          break;
        case 'Rating':
          dataBySelect = await AppDispatcher(fetchDataByRating(page));
          break;
        default:
          if (dataBySearch) {
            setData(dataBySearch);
            return;
          }
      }
      setData(
        dataBySelect.map((movie: PropsForCardsData) => ({
          ...movie,
          isFavorite: false,
        })) ?? [],
      );
    } catch (error) {
      console.error('Failed to fetch', error);
    }
  };

  useEffect(() => {
    fetchMovies();
    console.log('page', page);
  }, [selectorOptionValue]);

  useEffect(() => {
    const handleFavoriteFetch = async () => {
      try {
        const data = await AppDispatcher(
          fetchFavoriteList(tokenFromRegistration, page),
        );
        console.log(data);
        return data;
      } catch (error) {
        console.error('Failed to fetch', error);
      }
    };
    handleFavoriteFetch();
  }, []);
  const handleFavoriteList = async (movieId: number) => {
    try {
      const isFavorite = inFavorites.find(
        (favoriteMovie) => favoriteMovie.id === movieId,
      );
      const updatedOptimisticData = optimisticData.map((movie) => {
        if (movie.id === movieId) {
          return { ...movie, isFavorite: !isFavorite };
        }
        return movie;
      });
      setOptimisticData(updatedOptimisticData);
      await AppDispatcher(
        setFavoriteMovie(movieId, tokenFromRegistration, !isFavorite),
      );

      const updatedMovies = data.map((movie) => {
        if (movie.id === movieId) {
          return { ...movie, isFavorite: !isFavorite };
        }
        return movie;
      });
      setData(updatedMovies);
    } catch (error) {
      console.error('Failed to add movie to favorites', error);
    }
  };
  const memoData = useMemo(() => {
    return dataBySearch?.length > 0 ? dataBySearch : data;
  }, [dataBySearch, data]);
  return areCardsVisible ? (
    <Box
      className="black-background"
      display={'grid'}
      gridTemplateColumns="repeat(auto-fill, minmax(200px,1fr))"
      gap={'65px'}
      width={'100%'}
      marginLeft={'2%'}
      mb={-167}
    >
      {memoData.map((movie) => (
        <MemoizedMovieTemplate
          key={movie.id}
          movie={movie}
          handleFavoriteList={handleFavoriteList}
        />
      ))}
    </Box>
  ) : null;
}
