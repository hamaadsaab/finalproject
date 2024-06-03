import React from 'react';
import './CookiePolicy.css';
import weblogo from '../logo/logo.jpg';

const TermsCondition = () => {
    return (
        <>
            <div className='Header-tc'>
                <img
                    src={weblogo}
                    className="d-inline-block align-top weblogo-cookie"
                    alt="Logo"
                />
            </div>

            <div className='cookiePolicy-text'>
                <h1 className='Heading-tc'><u>Cookies Policy</u> </h1>


                <h2 className='Heading-tc'> 1. Introduction
                </h2>

                Welcome to Beyond the Words. This Cookies Policy explains how we use cookies and similar tracking<br />
                technologies when you visit our website.



                <h2 className='Heading-tc'> 2. What are Cookies?
                </h2>

                Cookies are small text files that are placed on your device when you visit a website. They help us enhance
                <br />your experience by providing certain functionalities and collecting information about your browsing
                behavior.



                <h2 className='Heading-tc'>3. Types of Cookies We Use
                </h2>

                a. Essential Cookies: These cookies are necessary for the basic functionality of our website.<br />

                b. Analytical/Performance Cookies: These cookies allow us to analyze how users interact with our website, <br />
                helping us improve its performance.<br />

                c. Functionality Cookies: These cookies enable specific features to enhance your experience.<br />
                d. Targeting/Advertising Cookies: These cookies are used to deliver content more relevant to you and<br />
                your interests.


                <h2 className='Heading-tc'>4. How We Use Cookies
                </h2>

                a. We use cookies for various purposes, including improving our website's functionality, analyzing usage<br />
                patterns, and personalizing content.

                b. We do not use cookies to collect personal information unless explicitly provided by you.



                <h2 className='Heading-tc'> 5. Third-Party Cookies
                </h2>

                Beyond the Words may use third-party services that also use cookies. We encourage you to review<br />
                the privacy and cookie policies of these third parties.



                <h2 className='Heading-tc'> 6. Managing Cookies
                </h2>


                Most web browsers allow you to control cookies through their settings. However, restricting cookies<br />
                may impact the functionality of our website.



                <h2 className='Heading-tc'> 7. Changes to This Policy
                </h2>

                We may update this Cookies Policy to reflect changes in our practices or for other operational, legal, or <br />
                regulatory reasons. Please review this policy periodically for any updates.



                <h2 className='Heading-tc'>  8. Contact Information
                </h2>

                If you have any questions or concerns about our use of cookies, please contact us at:

                Beyond the Words
                [Your Address]
                [Your Email Address]
                [Your Phone Number]


                <h2 className='Heading-tc'>
                    9. Effective Date
                </h2>

                This Cookies Policy was last updated on [Insert Date].
                <br />
            </div>
        </>
    );
};

export default TermsCondition;
