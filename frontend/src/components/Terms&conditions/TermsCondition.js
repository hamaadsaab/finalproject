import React from 'react';
import './TermsCondition.css';
import weblogo from '../logo/logo.jpg';

const TermsCondition = () => {
    return (
        <>
            <div className='Header-tc'>
                <img
                    src={weblogo}
                    className="d-inline-block align-top weblogo-tc"
                    alt="Logo"
                />
            </div>

            <div className='termCondition-text'>
                <h1 className='Heading-tc'><u>Terms and Conditions</u> </h1>


                <h2 className='Heading-tc'> 1. Acceptance of Terms</h2>

                By accessing and using Beyond the Words, you agree to comply with and be bound by these <br />terms and conditions.
                If you do not agree to these terms, please refrain from using the website.


                <h2 className='Heading-tc'> 2. Description of Service</h2>

                Beyond the Words provides a platform for signed language translation services. Users can [describe <br />the main features and services your website offers].
                The use of this service is subject to these terms.


                <h2 className='Heading-tc'> 3. User Accounts</h2>

                a. To access certain features of the website, you may be required to create a user account.<br /> You are
                responsible for maintaining the confidentiality of your account information.
                <br />
                b. You must provide accurate and complete information when creating your account.
                <br />

                <h2 className='Heading-tc'>4. User Responsibilities</h2>

                a. Users must use Beyond the Words in compliance with all applicable laws and regulations.
                <br />
                b. Users shall not engage in any activity that may interfere with the proper functioning of the website.


                <h2 className='Heading-tc'> 5. Intellectual Property</h2>

                a. Beyond the Words and its content are protected by copyright and other intellectual property laws.
                <br />
                b. Users may not reproduce, distribute, or create derivative works from the content on Beyond the Words <br /> without explicit permission.


                <h2 className='Heading-tc'> 6. Privacy Policy</h2>

                a. Beyond the Words collects and uses personal information in accordance with its Privacy Policy<br />[provide a link to your privacy policy].


                <h2 className='Heading-tc'>  7. Limitation of Liability</h2>

                Beyond the Words is not liable for any direct, indirect, incidental, consequential, or special  <br />damages arising out of or in any way connected with the use of its services.


                <h2 className='Heading-tc'>   8. Termination</h2>

                Beyond the Words reserves the right to terminate or suspend user accounts for any reason without prior notice.
                <br />

                <h2 className='Heading-tc'> 9. Changes to Terms</h2>

                Beyond the Words reserves the right to modify these terms and conditions at any time. Users are responsible for regularly reviewing these terms.
                <br />
            </div>
        </>
    );
};

export default TermsCondition;
