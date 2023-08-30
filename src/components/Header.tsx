import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import type { UserType } from '../types';
import Loading from './loading';

function Header() {
  const [userInfo, setUserInfo] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const user = await getUser();
    setUserInfo(user);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <header data-testid="header-component">
        <div>
          <NavLink
            data-testid="link-to-search"
            to="/search"
          >
            Pesquisar
          </NavLink>
          <NavLink
            data-testid="link-to-favorites"
            to="/favorites"
          >
            Favoritos
          </NavLink>
          <NavLink
            data-testid="link-to-profile"
            to="/profile"
          >
            Perfil
          </NavLink>
        </div>
        <div>
          {loading ? (<Loading />) : (
            <p data-testid="header-user-name">{userInfo?.name}</p>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
