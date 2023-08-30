import { AlbumType } from '../types';
import Albuns from './albuns';

type AlbumMapperProps = {
  albuns: AlbumType[];
  artistName: string;
};

function AlbumMapper({ albuns, artistName }: AlbumMapperProps) {
  return (
    <div>
      <h2>{`Resultado de álbuns de: ${artistName}`}</h2>
      {albuns.map((album) => (
        <Albuns key={ album.collectionId } album={ album } />
      ))}
    </div>
  );
}

export default AlbumMapper;
