import React, { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, ROUTE_ROOT } from 'app-constants';
import { INavLink } from 'interfaces';
import AppLogo from 'components/shared/logo/Logo';
import SearchForm from 'components/shared/forms/search-form/SearchForm';
import { MODAL_TYPES, useGlobalModalContext } from 'contexts/GlobalModalContext';
import AuthHelpers from 'utils/AuthHelpers';
import { logoutApi } from 'api/user';

interface IHeaderProps {
  showSearch: boolean;
}

export const Header: FC<IHeaderProps> = ({ showSearch }) => {
  const { showModal, store } = useGlobalModalContext();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (store && AuthHelpers.getUserInfo()) {
      setIsLoggedIn(!!AuthHelpers.getUserInfo());
    }
  }, [store]);

  const handleLoginButton = () => {
    !isLoggedIn ? showModal(MODAL_TYPES.SIGN_IN_MODAL) : logout();
  };

  useEffect(() => {
    setIsLoggedIn(!!AuthHelpers.getUserInfo());
  }, [AuthHelpers.getUserInfo()]);

  const logout = () => {
    logoutApi()
      .then(() => {
        AuthHelpers.clearStorage();
        setIsLoggedIn(false);
      })
      .catch((error) => {
        if (error.status === 401) {
          AuthHelpers.clearStorage();
          setIsLoggedIn(false);
        }
      });
  };

  return (
    <header className={styles.header}>
      <div className="section">
        <div className={styles.headerWrapper}>
          <Link to={ROUTE_ROOT}>
            <AppLogo />
          </Link>
          <div className={styles.rightPart}>
            <nav className={`${styles.headerMenu} ${showMenu && styles.opened}`}>
              <ul>
                {NAV_LINKS.map((link: INavLink) => {
                  return (
                    <li key={link.id}>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? styles.active : '';
                        }}
                        to={link.link}
                        onClick={() => setShowMenu(false)}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.signInButtonsWrapper}>
                <button type="button" className={styles.signInButton} onClick={handleLoginButton}>
                  {!isLoggedIn ? 'Sign in' : 'Log out'}
                </button>
                {!isLoggedIn && (
                  <button
                    type="button"
                    className={styles.signUpButton}
                    onClick={() => showModal(MODAL_TYPES.SIGN_UP_MODAL)}
                  >
                    Sign up
                  </button>
                )}
              </div>
            </nav>
            {!showMenu ? (
              <button
                type="button"
                className={styles.mobileBurger}
                onClick={() => setShowMenu(true)}
              />
            ) : (
              <button
                type="button"
                className={styles.mobileBurgerClose}
                onClick={() => setShowMenu(false)}
              />
            )}
          </div>
        </div>
      </div>
      {showSearch && (
        <div className={styles.searchForm}>
          <SearchForm hideOnMobile={true} />
        </div>
      )}
    </header>
  );
};

export default Header;
