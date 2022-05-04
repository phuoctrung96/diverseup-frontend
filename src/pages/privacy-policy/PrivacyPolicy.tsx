import React, { FC } from 'react';
import styles from './PrivacyPolicy.module.scss';

import PageTitle from 'components/common/page-title/PageTitle';

export const PrivacyPolicy: FC = () => {
  return (
    <section className="section">
      <div className="section__block no-top-padding">
        <PageTitle title={'Privacy Policy'} />

        <div className={styles.sectionContent}>
          <p className={styles.description}>
            Your privacy is important to us. DiverseUp, Inc. (“DiverseUp”, “Company”, “our”, “us” or
            “we”) provides this Privacy Policy (this “Policy”) to inform you of our policies and
            procedures regarding the collection, use and disclosure of personal information we
            receive from users of{' '}
            <a className={styles.siteLink} href="https://www.diverseup.com">
              www.DiverseUp.com
            </a>{' '}
            (the “Site”) and our Services, and to assist you in making informed decisions when using
            our Services. For purposes of this Policy, “Service” or “Services” refers to the
            Company’s service which can be accessed via the Site in which users can view data about
            their repositories. This Policy applies only to information that you provide to use
            through the Site and Service.
          </p>
          <p className={styles.description}>
            You are advised to consult this Policy regularly for any changes. Unless otherwise
            defined in this Policy, terms used in this Policy have the same meanings as in our
            DiverseUp Terms of Use, accessible at{' '}
            <a className={styles.siteLink} href="https://www.diverseup.com/terms-of-use">
              https://www.diverseup.com/terms-of-use
            </a>{' '}
            (the “Terms of Use”). By accepting our Policy and Terms of Use, you consent to our
            collection, storage, use and disclosure of your personal information as described in
            this Policy.
          </p>
          <p className={styles.description}>
            As used in this policy, the terms “using” and “processing” information include using
            cookies on a computer, subjecting the information to statistical or other analysis and
            using or handling information in any way, including but not limited to collecting,
            storing, evaluation, modifying, deleting, using, combining, disclosing and transferring
            information within our organization or among our affiliates within the United States or
            internationally.
          </p>
          <ol className={styles.alphaOrderedList}>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>Information We Collect and How We Use It</h3>
              <ol className={styles.decimalOrderedList}>
                <li>
                  <p className={styles.description}>
                    <a>Personal Information That You Provide Us Actively.</a> We may collect and
                    store information about you when you use DiverseUp. When you fill out
                    registrations forms or provide us with other information actively, you will know
                    what information we are collecting because you are actively submitting it.
                    Because we change our offerings and features from time to time, the options you
                    have to provide us with personal information also may change, but here are some
                    examples of situations in which you may decide to provide personal information
                    to us:
                  </p>
                  <ol className={styles.defaultList}>
                    <li>
                      <p className={styles.description}>Creating an account;</p>
                    </li>
                    <li>
                      <p className={styles.description}>Signing up for email alerts;</p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Completing a form related to one of our products or services; or
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Contacting us for technical support or customer service.
                      </p>
                    </li>
                  </ol>
                  <p className={styles.description}>
                    If you connect to DiverseUp using Facebook, Google+, or another social
                    networking site (each a “Social Networking Site”) we may receive information
                    that you authorize the Social Networking Site to share with us, including
                    information about your friends and connections on that Social Networking Site.
                    Any information that we collect from your Social Networking Site account may
                    depend on the privacy settings you have set with the Social Networking Site, so
                    please consult the Social Networking Site's privacy and data practices.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>Information We Collect by Automated Means.</a> We also collect information
                    using cookies to help us identify you when you visit the Site. Cookies may
                    transmit information about you and your use of the Service, such as your browser
                    type, search preferences, IP address, data relating to advertisements that have
                    been displayed to you or that you have clicked on, and the date and time of your
                    use. Cookies may be persistent or stored only during an individual session.
                  </p>
                  <p className={styles.description}>
                    You are able to disable cookies at any time. While you will still be able to use
                    the Services if you disable cookies in your browser, certain parts of the
                    Services may not function as effectively.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <h3 className={styles.title}>How We Use Information</h3>
          <p className={styles.description}>We may use the information we collect: </p>
          <ol className={styles.defaultList}>
            <li>
              <p className={styles.description}>
                to provide you with personalized content and services;
              </p>
            </li>
            <li>
              <p className={styles.description}>
                to moderate and display the employer reviews, interview reviews, salary reports and
                other content you have submitted for the benefit of our other users;
              </p>
            </li>
            <li>
              <p className={styles.description}>
                to customize and improve the features, performance, and support of the site;
              </p>
            </li>
            <li>
              <p className={styles.description}>
                to show you relevant information, if you connect to DiverseUp through a Social
                Networking Site, from your Social Networking Site friends and connections, and to
                allow you to share job and profile information with them;
              </p>
            </li>
            <li>
              <p className={styles.description}>
                to provide relevant advertising, including interest-based advertising from us and
                third parties, which may mean that we share non-personally identifiable information,
                such as your job title, to third-party advertisers;
              </p>
            </li>
            <li>
              <p className={styles.description}>to provide recruiting services to employers;</p>
            </li>
            <li>
              <p className={styles.description}>
                for internal operations, including troubleshooting, data analysis, testing,
                research, and service improvement;
              </p>
            </li>
            <li>
              <p className={styles.description}>to communicate with you regarding our services;</p>
            </li>
            <li>
              <p className={styles.description}>
                to analyze use of DiverseUp and improve DiverseUp;
              </p>
            </li>
            <li>
              <p className={styles.description}>
                to create aggregate and statistical data that does not identify you individually and
                that we can commercialize;
              </p>
            </li>
            <li>
              <p className={styles.description}>
                for other purposes that you separately authorize as you interact with DiverseUp.
              </p>
            </li>
          </ol>
          <h3 className={styles.title}>Do Not Track Signals</h3>
          <p className={styles.description}>
            We do not currently respond to 'do not track' signals and similar settings or
            mechanisms. When you use DiverseUp, we try to provide a customized experience.
          </p>
          <h3 className={styles.title}>How We Share Your Information</h3>
          <p className={styles.description}>
            DiverseUp does not provide detailed information about individual site visits, nor user
            provided information to outside companies without users' consent. DiverseUp may share
            aggregated information about the use of its sites that cannot be used to identify you
            individually.
          </p>
          <p className={styles.description}>
            The information that you contribute through the Service is intended for public
            consumption, including your reviews, suggestions and comments. DiverseUp may display
            this information through the Service, share it with businesses, and further distribute
            it to a wider audience through third party sites and services without disclosing your
            personal information.
          </p>
          <p className={styles.description}>
            We may invite you to include your resume or other information in more generally
            available formats. Subject to visibility settings that you control, employers and
            recruiters will be able to view your resume.
          </p>
          <p className={styles.description}>
            We may share information that does not identify you personally such as job title that
            you have submitted during the time of registration or on your profile; when we share
            such information, we do not link job titles with your name when we provide this
            information to others, such as advertisers, recruiters or employers.
          </p>
          <p className={styles.description}>
            You can invite your friends to join the Service by providing us with their contact
            information, or by allowing us to access your contacts from your computer, mobile
            device, or third party sites to select which friends you want to invite. If you allow us
            to access your contacts, we may transmit that information to DiverseUp long enough to
            process your invitations.
          </p>
          <h3 className={styles.title}>Links to Other Websites</h3>
          <p className={styles.description}>
            As part of the Service, we may provide links to other websites or applications which are
            compatible with the Service. However, we are not responsible for the privacy practices
            employed by those websites or the information or content they contain. This Policy
            applies solely to information collected by us through the Site and the Service.
            Therefore, this Policy does not apply to your use of a third party website accessed by
            selecting a link on our Site or via our Service. The fact that we link to a website is
            not an endorsement, authorization or representation of our affiliation with that third
            party, nor is it an endorsement of their privacy or information security policies or
            practices. We do not exercise control over third party websites. These other websites
            may place their own cookies or other files on your computer, collect data or solicit
            personal information from you. Other websites follow different rules regarding the use
            or disclosure of the personal information you submit to them. We encourage you to read
            the privacy policies or statements of the other websites you visit.
          </p>
          <h3 className={styles.title}>Compliance with Laws and Law Enforcement</h3>
          <p className={styles.description}>
            DiverseUp cooperates with government and law enforcement officials and private parties
            to enforce and comply with the law. We will disclose any information about you to
            government or law enforcement officials or private parties as we, in our sole
            discretion, believe necessary or appropriate to respond to claims and legal process
            (including but not limited to subpoenas), to protect the property and rights of
            DiverseUp or a third party, to protect the safety of the public or any person, or to
            prevent or stop an activity we may consider to be, or to pose a risk of being, illegal,
            unethical or legally actionable.
          </p>
          <h3 className={styles.title}>Business Transfers</h3>
          <p className={styles.description}>
            In the event we undergo a business transaction such as a merger, acquisition by another
            company, sale of all or a portion of our assets or in the event of bankruptcy, your
            information may be among the assets transferred or sold. You acknowledge and consent
            that such transfers may occur and are permitted by this Policy, and that any acquirer of
            our assets may continue to process your information as set forth in this Policy.
          </p>
          <h3 className={styles.title}>Choices Regarding Your Personal Information</h3>
          <p className={styles.description}>
            DiverseUp may send you newsletter and marketing emails from time to time. You may
            unsubscribe from these services at any time. If you'd like to delete your DiverseUp
            account entirely, please contact us at{' '}
            <a className={styles.emailLink} href="mailto:customercare@DiverseUp.com">
              customercare@DiverseUp.com
            </a>{' '}
            and let us know that you would like to permanently close your account. Any personal
            information collected will be deleted from our active databases but may remain in our
            archives for legal and back-up purposes, as permitted by applicable law.
          </p>
          <h3 className={styles.title}>Security</h3>
          <p className={styles.description}>
            DiverseUp is concerned with safeguarding your information. The security of your
            information is important to us. But remember that no method of transmission over the
            Internet, or method of electronic storage, is 100% secure. We implement security
            measures designed to protect your information from unauthorized access. Your account is
            protected by your account password and we urge you to take steps to keep your personal
            information safe by not disclosing your password and by logging out of your account
            after each use. We further protect your information from potential security breaches by
            implementing certain technological security measures including encryption, firewalls and
            secure socket layer technology (SSL). However, these measures do not guarantee that your
            information will not be accessed, disclosed, altered or destroyed by breach of such
            firewalls and secure server software. By using our Service, you acknowledge that you
            understand and agree to assume these risks.
          </p>
          <p className={styles.description}>
            We will make any legally required disclosures of any breach of the security,
            confidentiality, or integrity of your unencrypted electronically stored “personal data”
            (as defined in applicable state statutes on security breach notification) to you via
            email or conspicuous posting to the Site or through the Service in the most expedient
            time possible and without unreasonable delay, insofar as such disclosure is consistent
            with (i) the legitimate needs of law enforcement or (ii) any measures necessary to
            determine the scope of the breach and to restore the reasonable integrity of the data
            system. If you see a suspicious activity, please email:{' '}
            <a className={styles.emailLink} href="mailto:customercare@DiverseUp.com">
              customercare@DiverseUp.com
            </a>
            .
          </p>
          <h3 className={styles.title}>Privacy of Minors</h3>
          <p className={styles.description}>
            Protecting the privacy of young children is especially important. For that reason,
            DiverseUp is not intended for or directed to persons under the age of 13. Any person who
            provides their information to DiverseUp represents to us that they are 13 years of age
            or older. If DiverseUp learns that personally identifiable information of persons less
            than 13 years of age has been collected on DiverseUp without verifiable parental
            consent, then DiverseUp will take the appropriate steps to delete this information.
          </p>
          <h3 className={styles.title}>Notification of Privacy Policy Changes</h3>
          <p className={styles.description}>
            DiverseUp reserves the right to change, modify, add, or remove portions of this Policy
            at any time. All changes will be posted on this page to inform our users what
            information we collect, how we use it, and under what circumstances, if any, we may
            disclose it. You should check www.DiverseUp.com frequently to see recent changes. Unless
            stated otherwise, our current privacy notice applies to all information that we have
            about you and your account. We will not materially change our policies and practices to
            make them less protective of personal information collected in the past without the
            consent of affected users.
          </p>
          <h3 className={styles.title}>Contact Us</h3>
          <p className={styles.description}>
            If you have any questions or suggestions regarding this Policy please contact us by
            sending us an email to{' '}
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

export default PrivacyPolicy;
