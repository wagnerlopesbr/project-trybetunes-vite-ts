import { SongType } from '../types';

type MusicsProps = {
  song: SongType;
};

function MusicCard({ song }: MusicsProps) {
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
    </div>
  );
}
export default MusicCard;
