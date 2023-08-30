import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './loading';

function Login() {
  const [nameInput, setNameInput] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const buttonValidation = nameInput.length >= 3;

  const handleClick = async () => {
    setLoading(true);
    await createUser({ name: nameInput });
    navigate('/search');
  };

  return (
    <div>
      {loading === true ? <Loading /> : (
        <form>
          <label htmlFor="login-name-input">Nome:</label>
          <input
            data-testid="login-name-input"
            type="text"
            value={ nameInput }
            onChange={ (event) => setNameInput(event.target.value) }
          />
          <button
            data-testid="login-submit-button"
            disabled={ !buttonValidation }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>)}
    </div>
  );
}

export default Login;
