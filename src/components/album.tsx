import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../types';
import getMusics from '../services/musicsAPI';
import Loading from './loading';
import MusicCard from './MusicCard';

function Album() {
  const [albumInfo, setAlbumInfo] = useState<AlbumType | undefined>(undefined);
  const [albumMusics, setAlbumMusics] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchSongs = async () => {
      if (id) {
        const musics = await getMusics(id);
        setAlbumInfo(musics[0]);
        setAlbumMusics([...musics.slice(1)] as SongType[]);
        setLoading(false);
      }
    };
    fetchSongs();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {albumMusics.length > 0 ? (
        <div>
          <img
            src={ albumInfo?.artworkUrl100 }
            alt={ albumInfo?.collectionName }
          />
          <h1 data-testid="artist-name">
            {albumInfo?.artistName}
          </h1>
          <h1 data-testid="album-name">
            {albumInfo?.collectionName}
          </h1>
          <div>
            {albumMusics.map((song) => (
              <MusicCard
                key={ song.trackId }
                song={ song }
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 data-testid="artist-name">
            Artista inexistente
          </h1>
          <h1 data-testid="album-name">
            Album inexistente
          </h1>
        </div>
      )}
    </div>
  );
}

export default Album;
