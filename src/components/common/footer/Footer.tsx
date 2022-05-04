import React, { FC, useState } from 'react';
import styles from './Footer.module.scss';
import AppLogo from 'components/shared/logo/Logo';
import {
  ROUTE_ABOUT_US,
  ROUTE_BLOG,
  ROUTE_COMPANY_RATING,
  ROUTE_EMPLOYER,
  ROUTE_JOB_PLACEMENT,
  ROUTE_TERMS_OF_USE,
  ROUTE_PRIVACY_POLICY,
  ROUTE_POSTING_GUIDELINES,
} from 'app-constants';
import { Link } from 'react-router-dom';
import { FooterNavLink } from 'interfaces';
import Button from 'components/shared/button/Button';
import { MODAL_TYPES, useGlobalModalContext } from 'contexts/GlobalModalContext';

export const Footer: FC = () => {
  const { hideModal, showModal } = useGlobalModalContext();

  const socialLinks = [
    { icon: 'facebook', link: 'https://www.facebook.com/DiverseUp/' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/company/diverseup/about/' },
    { icon: 'twitter', link: 'https://twitter.com/diverseup' },
  ];

  const onContactsClick = () => {
    showModal(MODAL_TYPES.CONTACT_US_MODAL);
  };

  const footerLinks: FooterNavLink[] = [
    { name: 'Company Rating', link: ROUTE_COMPANY_RATING },
    { name: 'Job Placement', link: ROUTE_JOB_PLACEMENT },
    { name: 'Blog', link: ROUTE_BLOG },
    { name: 'Employer', link: ROUTE_EMPLOYER },
    {
      name: 'About',
      link: ROUTE_ABOUT_US,
      subLinks: [
        { name: 'About us', link: `/${ROUTE_ABOUT_US}` },
        { name: 'Privacy Policy', link: ROUTE_PRIVACY_POLICY },
        { name: 'Terms of Use', link: ROUTE_TERMS_OF_USE },
        { name: 'Posting Guidelines', link: ROUTE_POSTING_GUIDELINES },
      ],
    },
    {
      name: 'Contacts',
      onClick: onContactsClick,
      subLinks: [
        { name: '650-397-1446', link: 'tel:650-397-1446', subClass: 'phone' },
        { name: 'info@diverseup.com', link: 'mailto:info@diverseup.com', subClass: 'mail' },
        {
          name: 'Contact form',
          button: true,
          onClick: onContactsClick,
        },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className="section">
          <div className={styles.mainFooterWrapper}>
            <div className={styles.leftPart}>
              <AppLogo footer={true} />
              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.link}
                      className={`${styles.socialLink} ${styles[link.icon]}`}
                    />
                  );
                })}
              </div>
            </div>
            <div className={styles.rightPart}>
              <ul className={styles.footerMenu}>
                {footerLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      {!item?.subLinks?.length && (
                        <Link className={styles.title} to={item?.link || ''}>
                          {item.name}
                        </Link>
                      )}
                      {item?.subLinks?.length && (
                        <>
                          <p className={styles.title}>{item.name}</p>
                          <ul className={styles.footerSubMenu}>
                            {item.subLinks.map((subItem, subIndex) => {
                              return (
                                <li
                                  key={subIndex}
                                  className={
                                    subItem?.subClass
                                      ? `${styles.withIcon} ${styles[subItem?.subClass]}`
                                      : ''
                                  }
                                >
                                  {!subItem?.button && (
                                    <a href={subItem?.link || ''}>{subItem.name}</a>
                                  )}
                                  {subItem?.button && (
                                    <Button
                                      text={subItem.name}
                                      onClick={subItem.onClick}
                                      classList={['footer']}
                                    />
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subFooter}>
        <span>Copyright DiverseUp 2022. All Right Reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
