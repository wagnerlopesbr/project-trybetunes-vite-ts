import { Link } from 'react-router-dom';
import { AlbumType } from '../types';

type AlbumProps = {
  album: AlbumType;
};

function Albuns({ album }: AlbumProps) {
  return (
    <div>
      <img src={ album.artworkUrl100 } alt={ album.collectionName } />
      <Link
        to={ `/album/${album.collectionId}` }
        data-testid={ `link-to-album-${album.collectionId}` }
      >
        {album.collectionName}
      </Link>
    </div>
  );
}

export default Albuns;
