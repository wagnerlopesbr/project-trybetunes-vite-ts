import { useState } from 'react';
import { SongType } from '../types';
import checked_heart from '../images/checked_heart.png';
import empty_heart from '../images/empty_heart.png';

type MusicsProps = {
  song: SongType;
};

function MusicCard({ song }: MusicsProps) {
  const [favorited, setFavorited] = useState(false);
  return (
    <div key={ song.trackId }>
      <h3>{song.trackName}</h3>
      <audio data-testid="audio-component" src={ song.previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>
      <div>
        <label
          data-testid={ `checkbox-music-${song.trackId}` }
          htmlFor={ `favorited-${song.trackId}` }
        >
          {
            favorited
              ? (<img src={ checked_heart } alt="favorite" />)
              : (<img src={ empty_heart } alt="favorite" />)
          }
        </label>
        <input
          data-testid={ `favorited-${song.trackId}` }
          checked={ favorited }
          onChange={ () => {
            setFavorited(!favorited);
            console.log(favorited);
          } }
          type="checkbox"
        />
      </div>
    </div>
  );
}
export default MusicCard;
