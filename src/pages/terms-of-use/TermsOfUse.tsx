import React, { FC } from 'react';
import styles from './TermsOfUse.module.scss';

import PageTitle from 'components/common/page-title/PageTitle';

export const TermsOfUse: FC = () => {
  return (
    <section className="section">
      <div className="section__block no-top-padding">
        <PageTitle title={'Terms Of Use'} />

        <div className={styles.sectionContent}>
          <p className={styles.description}>
            Welcome to DiverseUp! The website sound at www.DiverseUp.com (the “Site”) is operated
            and presented by DiverseUp, Inc. (referred to herein as “DiverseUp”, “we”, “our” or
            “us”). These Terms of Use (these “Terms”) govern your access to and use of the Site. By
            accessing and using the Site, you represent that you are at least 18 years of age and
            agree to follow and be bound by these Terms. If you have any questions, comments, or
            concerns regarding these Terms or the Services (as defined in the DiverseUp Privacy
            Policy), please contact our customer care team by emailing us at{' '}
            <a className={styles.emailLink} href="mailto:customercare@DiverseUp.com">
              customercare@DiverseUp.com
            </a>
            .
          </p>
          <ol className={styles.alphaOrderedList}>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>Will these Terms ever change?</h3>
              <p className={styles.description}>
                We are constantly trying to improve our Services, so these Terms may need to change
                along with our Services. We reserve the right to change these Terms at any time, but
                if we do, we will bring it to your attention by placing a notice on the Site. If you
                use the Services in any way after a change to these Terms is effective, you will be
                deemed to have agreed to and accepted all of the changes. Other than changes made by
                us and as described here, no other amendment or modification of these Terms will be
                effective unless in writing and signed by both you and us.
              </p>
            </li>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>What about my privacy?</h3>
              <p className={styles.description}>
                DiverseUp takes the privacy of its users very seriously. For the current DiverseUp
                Privacy Policy please click here:{' '}
                <a className={styles.siteLink} href="https://www.diverseup.com/privacy-policy">
                  https://www.diverseup.com/privacy-policy
                </a>{' '}
                (the “Privacy Policy”).
              </p>
            </li>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>How can I start using DiverseUp?</h3>
              <p className={styles.description}>
                To access the Site and the Services, you will be required to sign up for an account.
                You agree to provide true, accurate, current and complete information about yourself
                as prompted by the registration form. If you provide any information that is untrue,
                inaccurate, not current or incomplete, or DiverseUp has reasonable grounds to
                suspects that such information is untrue, inaccurate, not current or incomplete,
                DiverseUp, its employees or designees shall have has the right to suspend or
                terminate your account and refuse any and all current or future use of DiverseUp (or
                any portion thereof).
              </p>
              <p className={styles.description}>
                You will receive a password and account designation upon completing the registration
                process. You are responsible for maintaining the confidentiality of the passwords
                and accounts, and are fully responsible for all activities that occur under your
                passwords or accounts. You agree to (a) immediately notify DiverseUp of any
                unauthorized use of your passwords or accounts or any other breach of security, and
                (b) ensure that you exit from your account at the end of each session. DiverseUp
                shall not be liable for any loss or damage arising from your failure to comply with
                these Terms.
              </p>
              <p className={styles.description}>
                If you access DiverseUp through a social networking site, such as Facebook or
                Google+ (“Social Networking Site”), you agree that DiverseUp may access, make
                available, and store (if applicable) any information, data, text, messages, tags,
                and/or other materials accessible through DiverseUp that you have provided to and
                stored in your Social Networking Site account so that it is available on and through
                DiverseUp via your account and your profile page. Subject to the privacy settings
                that you have set with the Social Networking Site account you use to access
                DiverseUp, personally identifiable information that you post to that Social
                Networking Site may be displayed on DiverseUp. Please note: your relationship with
                your Social Networking Sites are governed solely by your agreement with those Social
                Networking Sites and we disclaim any liability for personally identifiable
                information that may be provided to us by a Social Networking Site in violation of
                the privacy settings that you have set with that Social Networking Site account.
              </p>
            </li>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>What are the basics of using DiverseUp?</h3>
              <p className={styles.description}>
                DiverseUp is intended to create a friendly environment for you to express your
                thoughts and learn from others. You agree that you will only use the Site and the
                Services for your own internal, personal, non-commercial use, and not on behalf of
                or for the benefit of any third party, and only in a manner that complies with all
                laws that apply to you. If your use of the Services is prohibited by applicable
                laws, then you are not authorized to use the Services. DiverseUp shall not be
                responsible for your using the Services in a way that breaks the law.
              </p>
              <p className={styles.description}>
                You agree not to use any information obtained from DiverseUp in order to harass,
                abuse, or harm another person, or in order to contact, advertise to, solicit, or
                sell to any visitor without their prior explicit consent. You agree not to attempt
                to gain unauthorized access to DiverseUp, computer systems or networks connected to
                DiverseUp, through hacking, password mining or any other means. You agree not to
                obtain or attempt to obtain any materials or information through any means not
                intentionally made available through DiverseUp. DiverseUp may contain links to
                third-party websites as a service to those interested in this information. Your use
                of all such links to third-party websites is at your own risk. We do not monitor or
                have any control over, and make no claim or representation regarding third-party
                websites. To the extent such links are provided by us, they are provided only as a
                convenience, and a link to a third-party website does not imply our endorsement,
                adoption or sponsorship of, or affiliation with, such third-party website. When you
                leave DiverseUp, our terms and policies no longer govern.
              </p>
            </li>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>What happens to the content I upload to DiverseUp?</h3>
              <p className={styles.description}>
                Where DiverseUp enables you to submit or post content (“User Content”), you
                understand that all information and materials, whether publicly posted or privately
                transmitted, are the sole responsibility of the person from whom such User Content
                originated. “Your Content” means any work of authorship or information, including
                company and employer reviews, comments, postings, images, text, or other materials.
              </p>
              <ol className={styles.decimalOrderedList}>
                <li>
                  <p className={styles.description}>
                    <a>Representations Regarding Your Content.</a> You represent and warrant that:
                  </p>
                  <ol className={styles.defaultList}>
                    <li>
                      <p className={styles.description}>
                        You own Your Content or otherwise have the right to grant the license set
                        forth in these Terms.
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Your Content does not violate the privacy rights, publicity rights,
                        copyright rights, or other rights of any person.
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        By providing or posting Your Content, you do not violate any binding
                        confidentiality, non-disclosure, or contractual obligations you might have
                        towards a third party, including your current or former employer or any
                        potential employer.
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Any information you provide in a salary, company review, company photo,
                        employer response, or employer profile is correct.
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Any information you provide about your current, past or potential status as
                        an employee of a certain employer is correct and complete.
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Any resume you upload is accurate and submitted on your own behalf.
                      </p>
                    </li>
                  </ol>
                  <p className={styles.description}>
                    Please do not provide any information that you are not allowed to share with
                    others, including by binding contractual obligation or by law.
                  </p>
                  <p className={styles.description}>
                    We do not claim ownership in any User Content that you submit to DiverseUp, but
                    to be able to legally provide DiverseUp to our visitors, we have to have certain
                    rights to use such User Content in connection with DiverseUp, as set forth
                    herein. By submitting any User Content to DiverseUp, you hereby grant to us an
                    unrestricted, irrevocable, perpetual, non-exclusive, fully-paid and
                    royalty-free, license (with the right to sublicense through unlimited levels of
                    sublicensees) to use, copy, perform, display, create derivative works of, and
                    distribute such Content in any and all media (now known or later developed)
                    throughout the world. No compensation will be paid with respect to the User
                    Content that you post through DiverseUp. You should only submit User Content to
                    DiverseUp that you are comfortable sharing with others under these Terms.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>Prohibited Content.</a> You agree to comply with our Posting Guidelines found
                    at{' '}
                    <a
                      className={styles.siteLink}
                      href="http://www.diverseup.com/posting-guidelines"
                    >
                      http://www.diverseup.com/posting-guidelines
                    </a>
                    , and that you will not post any User Content that:
                  </p>
                  <ol className={styles.defaultList}>
                    <li>
                      <p className={styles.description}>
                        Is offensive or promotes racism, bigotry, hatred or physical harm of any
                        kind against any group or individual, or is pornographic or sexually
                        explicit in nature; bullies, harasses or advocates stalking, bullying, or
                        harassment of another person;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Involves the transmission of “junk mail”, “chain letters”, or unsolicited
                        mass mailing, or “spamming”;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Is false or misleading or promotes, endorses or furthers illegal activities
                        or conduct that is abusive, threatening, obscene, defamatory or libelous;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Promotes, copies, performs or distributes an illegal or unauthorized copy of
                        another person's work that is protected by copyright or trade secret law,
                        such as providing pirated computer programs or links to them, providing
                        information to circumvent manufacturer-installed copy-protection devices, or
                        providing pirated music, videos, or movies, or links to such pirated music,
                        videos, or movies;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Is involved in the exploitation of persons under the age of eighteen (18) in
                        a sexual or violent manner, or solicits personal information from anyone
                        under eighteen (18);
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Provides instructional information about illegal activities such as
                        violating someone's privacy, or providing or creating computer viruses and
                        other harmful code;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Contains identification information such as social security number, passport
                        number, national identification number, insurance number, driver's license
                        number, immigration number, or any other similar number, code, or
                        identifier;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Solicits passwords or personally identifying information for commercial or
                        unlawful purposes from other visitors;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Contains viruses, Trojan horses, worms, time bombs, cancelbots, corrupted
                        files, or similar software;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Posts or distributes information which would violate any binding
                        confidentiality, non-disclosure or other contractual restrictions or rights
                        of any third party, including any current or former employers or potential
                        employers;
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Implies a DiverseUp endorsement or partnership of any kind; or
                      </p>
                    </li>
                    <li>
                      <p className={styles.description}>
                        Otherwise violates these Terms or creates liability for DiverseUp.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>Removal of Content.</a> While DiverseUp has no obligation to do so, DiverseUp
                    reserves the right to review and delete (or modify) any User Content that we
                    believe, in our sole discretion, violates these Terms or other applicable
                    policies posted on DiverseUp, or that we deem, in our sole discretion,
                    inappropriate. If you see any User Content on DiverseUp that you believe
                    violates our policies, you may report that User Content by contacting us as
                    provided herein. Once notified, we will review the User Content and consider
                    whether to remove or modify it. Please note: Our interpretation of our policies
                    and the decision whether or not to edit or remove User Content is within our
                    sole discretion. You understand and agree that if we choose not to remove or
                    edit Content that you find objectionable, that decision will not constitute a
                    violation of these Terms.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>Other Enforcement Actions.</a> While we have no obligation to do so, we
                    reserve the right to investigate and take appropriate action in our sole
                    discretion against you if you violate these Terms, including without limitation:
                    removing User Content from DiverseUp (or modifying it); suspending your rights
                    to use DiverseUp; terminating your membership and account; reporting you to law
                    enforcement, regulatory authorities, or administrative bodies; and taking legal
                    action against you.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>Defending Our Members.</a> While we have no obligation to do so, we reserve
                    the right to take appropriate action to protect the anonymity of our users
                    against the enforcement of subpoenas or other information requests that seek a
                    user’s electronic address or identifying information.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>Rights to DiverseUp Content.</a> DiverseUp contains content provided by us
                    and our licensors (the “DiverseUp Content”). We and our licensors (including
                    other visitors) own and retain all proprietary (and intellectual property)
                    rights in the DiverseUp Content we each provide and DiverseUp owns and retains
                    all property rights in DiverseUp. If you are a visitor, we hereby grant you a
                    limited, revocable, non-sublicensable license under the intellectual property
                    rights licensable by us to download, view, copy and print DiverseUp Content from
                    DiverseUp solely for your personal use in connection with using DiverseUp.
                    Except as provided in the foregoing, you agree not to: (1) reproduce, modify,
                    publish, transmit, distribute, publicly perform or display, sell, or create
                    derivative works based on DiverseUp or the DiverseUp Content (excluding Your
                    Content); or (2) rent, lease, loan, or sell access to DiverseUp. The trademarks,
                    logos and service marks (“Marks”) displayed on DiverseUp are our property or the
                    property of other third parties. You are not permitted to use these Marks
                    without our prior written consent or the consent of the third party that owns
                    the Mark.
                  </p>
                </li>
              </ol>
            </li>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>Does DiverseUp cost anything?</h3>
              <p className={styles.description}>
                The DiverseUp Services are currently free, but we reserve the right to charge for
                certain or all Services in the future. We will notify you before any Services you
                are currently using begin carrying a fee, and if you wish to continue using such
                Services, you must pay all applicable fees for such Services.
              </p>
            </li>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>What if I want to stop using DiverseUp?</h3>
              <p className={styles.description}>
                You are free to do that at any time. Please refer to our Privacy Policy, as well as
                the licenses above, to understand how we treat information you provide to us after
                you have stopped using our Services.
              </p>
              <p className={styles.description}>
                Account termination may result in destruction of any User Content associated with
                your account, so keep that in mind before you decide to terminate your account.
              </p>
            </li>
            <li className={styles.listTitle}>
              <h3 className={styles.title}>What else do I need to know?</h3>
              <ol className={styles.decimalOrderedList}>
                <li>
                  <p className={styles.description}>
                    <a>Indemnity.</a> You agree to indemnify and hold DiverseUp, and its affiliates,
                    and their respective directors, officers, employees, consultants and agents
                    harmless from any claim or demand, including reasonable attorneys’ fees, made by
                    any third party due to or arising out of your use of the Site, your violation of
                    these Terms, or your violation of any rights of another person or entity, or any
                    claim alleging any of the foregoing.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>International Use.</a> By choosing to access DiverseUp from any location
                    other than the United States, you accept full responsibility for compliance with
                    all local laws that are applicable. DiverseUp makes no representation that
                    materials on its site are appropriate for use in locations outside the United
                    States, and accessing them from territories where such activity is illegal is
                    strictly prohibited.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>Disclaimer and Limitation of Liability.</a>
                  </p>
                  <p className={styles.description}>
                    THE INFORMATION ON DIVRSEGLOBE IS PROVIDED “AS-IS” WITHOUT WARRANTY OF ANY KIND,
                    EITHER EXPRESSED OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED
                    TO IMPLIED WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND
                    MERCHANTABILITY. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (a) YOUR USE OF
                    DIVERSEUP IS AT YOUR SOLE RISK. DIVERSEUP IS PROVIDED ON AN “AS IS” AND “AS
                    AVAILABLE” BASIS; (b) DIVERSEUP MAKES NO WARRANTY THAT (i) DIVERSEUP WILL MEET
                    YOUR REQUIREMENTS, (ii) DIVERSEUP WILL BE UNINTERRUPTED, TIMELY, SECURE, OR
                    ERROR-FREE, (iii) THE INFORMATION THAT MAY BE OBTAINED FROM THE USE OF DIVERSEUP
                    WILL BE ACCURATE OR RELIABLE; (c) ANY MATERIAL OBTAINED THROUGH THE USE OF
                    DIVERSEUP IS OBTAINED AND USED AT YOUR SOLE RISK AND DISCRETION AND YOU WILL BE
                    SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA; AND
                    (d) NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU THROUGH
                    OR FROM DIVERSEUP SHALL CREATE ANY WARRANTY BY DIVERSEUP.
                  </p>
                  <p className={styles.description}>
                    YOU EXPRESSLY UNDERSTAND AND AGREE THAT DIVERSEUP OR ANY OTHER PARTY INVOLVED IN
                    CREATING, PRODUCING OR DISTRIBUTING DIVERSEUP SHALL NOT BE LIABLE FOR ANY
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT
                    NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER
                    INTANGIBLE LOSSES (EVEN IF DIVERSEUP HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES), RESULTING FROM: (i) THE USE OR THE INABILITY TO USE DIVERSEUP; (ii)
                    UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iii)
                    STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON DIVERSEUP; OR (iv) ANY OTHER MATTER
                    RELATING TO DIVERSEUP. IN NO EVENT SHALL DIVERSEUP.S LIABILITY TO YOU EXCEED ONE
                    HUNDRED DOLLARS ($100). SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                    WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
                    CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY
                    TO YOU.
                  </p>
                </li>
                <li>
                  <p className={styles.description}>
                    <a>General.</a> These Terms constitute the entire agreement between you and
                    DiverseUp. DiverseUp’s failure to enforce any provision of these Terms will not
                    be construed as a waiver of any provision or right. In the event that a portion
                    of these Terms are held unenforceable, the unenforceable portion will be
                    construed in accordance with applicable law as nearly as possible to reflect the
                    original intentions of the parties, and the remainder of the provisions will
                    remain in full force and effect. These Terms shall be governed by the laws of
                    the State of California without regard to its conflict of law provisions. Both
                    parties submit to personal jurisdiction in California and further agree that any
                    cause of action relating to these Terms shall be brought in a court in Santa
                    Clara County, California.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
