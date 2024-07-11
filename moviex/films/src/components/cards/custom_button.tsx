import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Star } from '@mui/icons-material';

interface FavoriteButtonProps {
  isFavorite: boolean;
  handleFavoriteToggling: (
    buttonId: number,
    ApiKey: string | undefined,
  ) => Promise<void>;
  buttonId: number;
  ApiKey: string | undefined;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  handleFavoriteToggling,
  buttonId,
  ApiKey,
}) => {
  const [favorite, setFavorite] = useState<boolean>(isFavorite || false);

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite]);

  const handleClick = async () => {
    try {
      await handleFavoriteToggling(buttonId, ApiKey);
      setFavorite(!favorite);
    } catch (error) {
      console.error('Failed to toggle', error);
    }
  };

  return (
    <IconButton
      id={buttonId.toString()}
      onClick={handleClick}
      style={{ color: favorite ? 'yellow' : undefined }}
    >
      <Star />
    </IconButton>
  );
};

export default FavoriteButton;
