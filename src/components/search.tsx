import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './loading';
import AlbumMapper from './albumMapper';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [artistName, setArtistName] = useState('');
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState<AlbumType[]>([]);
  const [searched, setSearched] = useState(false);

  const buttonValidation = searchInput.length >= 2;

  const handleClick = async () => {
    setLoading(true);
    setArtistName(searchInput);
    const album = await searchAlbumsAPI(searchInput);
    setSearchInput('');
    setAlbuns(album);
    setSearched(true);
    setLoading(false);
  };

  return (
    <div>
      <input
        data-testid="search-artist-input"
        type="text"
        value={ searchInput }
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <button
        data-testid="search-artist-button"
        disabled={ !buttonValidation }
        onClick={ handleClick }
      >
        Procurar
      </button>
      {loading && <Loading />}
      {searched && !loading && albuns.length > 0 ? (
        <AlbumMapper albuns={ albuns } artistName={ artistName } />
      ) : searched && !loading && albuns.length === 0 && (
        <h2>Nenhum álbum foi encontrado</h2>
      )}
    </div>
  );
}

export default Search;
