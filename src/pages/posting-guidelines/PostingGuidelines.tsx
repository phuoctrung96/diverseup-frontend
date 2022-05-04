import React, { FC } from 'react';
import styles from './PostingGuidelines.module.scss';

import PageTitle from 'components/common/page-title/PageTitle';

export const PostingGuidelines: FC = () => {
  return (
    <section className="section">
      <div className="section__block no-top-padding">
        <PageTitle title={'Posting Guidelines'} />
        <div className={styles.sectionContent}>
          <p className={styles.description}>
            DiverseUp wants its users to get the information they need and we need your help doing
            that. As a DiverseUp user, we encourage you to share information about your employer(s).
            All we ask is that you follow these simple rules:
          </p>
          <ol className={styles.orderedList}>
            <li>
              <p className={styles.description}>
                Rate only your current or former employers and rate the same employer only once.
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Tell the truth – This includes both honesty and transparency. Don't make allegations
                that are unfounded or libelous.
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Comments must be detailed, helpful, polite and on topic. Don't use ALL CAPS. If you
                disagree with other opinions, please do so respectfully.
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Don't post illegal, obscene, threatening, racist, objectionable or injurious
                content.
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Don't personally attack anyone, or mention anyone by name, initials or function.
                Don't publish personal contact information such as e-mail, phone, address or any
                other information which could lead to your or someone else identity.
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Avoid using “definitive” language such as “always”, “never” and don't state your
                opinion as fact (e.g. “This is the worst employer ever” vs “This is my worst
                employer ever”).
              </p>
            </li>
            <li>
              <p className={styles.description}>
                Don't denounce illegal activities such as drug or alcohol usage, sexual harassment,
                software piracy or even overtime not being paid. This is not a forum to resolve
                legal grievances.
              </p>
            </li>
          </ol>
          <p className={styles.description}>
            The Company reserves the right in its unfettered discretion, to remove any content that
            you submit or post on the Company’s website.
          </p>
          <p className={styles.description}>
            If you have a question or you’d like to report a post that violates these Posting
            Guidelines, please email us at{' '}
            <a className={styles.emailLink} href="mailto:customercare@DiverseUp.com">
              customercare@DiverseUp.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostingGuidelines;
