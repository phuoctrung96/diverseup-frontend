import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, ROUTE_ROOT } from 'app-constants';
import { INavLink } from 'interfaces';
import AppLogo from 'components/shared/logo/Logo';
import SearchForm from 'components/shared/search-form/SearchForm';

interface IHeaderProps {
  showSearch: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<IHeaderProps> = ({ showSearch, setShowModal }) => {
  return (
    <header className={styles.header}>
      <div className="section">
        <div className={styles.headerWrapper}>
          <Link to={ROUTE_ROOT}>
            <AppLogo width={128} height={38} />
          </Link>
          <div className={styles.rightPart}>
            <nav className={styles.headerMenu}>
              <ul>
                {NAV_LINKS.map((link: INavLink) => {
                  return (
                    <li key={link.id}>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? styles.active : '';
                        }}
                        to={link.link}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button
              type="button"
              className={styles.signInButton}
              onClick={() => setShowModal(true)}
            >
              Sing in
            </button>
          </div>
        </div>
      </div>
      {showSearch && (
        <div className={styles.searchForm}>
          <SearchForm />
        </div>
      )}
    </header>
  );
};

export default Header;
