import React, { useEffect } from "react";
import "./privacy.css";
import { NavLink } from "react-router-dom";
// import Header from "../Header/Header";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="privacy_section">
        <div className="privacy_content_wrapper">
          <NavLink to="/">
            <span className="back">{"< BACK TO HOME"}</span>
          </NavLink>
          <div className="privacy_title_wrapper">
            <span className="privacy_title">VIDMATE PRIVACY POLICY</span>
          </div>
          <div className="pcontent_1">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">{"1) Overview :"}</p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                This Privacy Policy describes the information collected by Short
                Video Status App through our mobile applications and how we use
                that information. Also Our Product Category is “ Photography,
                Video, Entertainment”. These all class Apps we created is only
                for User Entertainment purpose. Our Company developers
                continuously work on All Apps And We Give Periodic Updates to
                Solve Problems And Bugs as well as to provide new features all
                for smooth User Experience.
              </p>
            </div>
          </div>
          <div className="pcontent_2">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">
                {"2) Information that we collect :"}
              </p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                Information that we get about you from other services Such as
                Google Analytics, Flurry, Google Play and others. This
                information includes:
              </p>
              <p className="pcontent">
                -Device information - Device-specific information such as your
                hardware model and operating system version. We DO NOT collect
                any of your unique identification.
              </p>
              <p className="pcontent">
                -Anonymous identifiers - we use anonymous identifiers when you
                interact with services such as advertising services and others.
              </p>
            </div>
          </div>
          <div className="pcontent_3">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">
                {"3) Personal Information That We May Collect :"}
              </p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                Take Photos and Videos: This permission allows us to use your
                device’s camera to take photos / videos and turn ON/OFF Camera
                Flash.
              </p>
              <p className="pcontent">
                Modify system settings: This permission is used in settings, in
                order to switch or adjust ringtone, vibration and brightness
                level of the screen.
              </p>
              <p className="pcontent">
                Expand/collapse status bar:This permission is used for the
                gesture feature of User System to expand and collapse the status
                bar.
              </p>
              <p className="pcontent">
                Anonymous identifiers:we use anonymous identifiers when you
                interact with services such as advertising services and others.
              </p>
              <p className="pcontent">
                Photos / Media Files:Modify or delete the contents of your
                Storage.
              </p>
              <p className="pcontent">
                Full network access:This permission is used to access the
                device’s network for certain functions including receiving
                update notifications or accessing app classification labels.
              </p>
              <p className="pcontent">
                Connect and disconnect from WI-Fi:This permission is used in
                settings and notification toolbar in order to connect and
                disconnect from WI-Fi.
              </p>
              <p className="pcontent">
                Measure app storage space:This permission is used to acquire the
                amount of storage space used by an application.
              </p>
            </div>
          </div>
          <div className="pcontent_4">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">
                {"4) Non- Personal Information :"}
              </p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                We may collect and use non-personal information in the following
                circumstances: To have a better understanding in user’s behavior
                , to solve problems in products and services, improve our
                products, services and advertising. We may collect non-personal
                information such as installed application name and package name,
                Installed data, frequency of use, country, equipment and
                channel. If non-personal information is combined with personal
                information, we treat the combined information as personal
                information for the purposes of this Privacy Policy.
              </p>
              <p className="pcontent">
                We use the information that we collect from all of our
                applications to improve our applications and make it better for
                you. We may share aggregated, non-personally identifiable
                information with our partners such as publishers and
                advertisers. Our Privacy Policy may change from time to time. We
                will not reduce your rights under this Privacy Policy without
                your explicit consent.
              </p>
            </div>
          </div>
          <div className="pcontent_5">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">{"5) Third- Party Sites :"}</p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                We may provide links to third-party Web sites, such as Facebook,
                as a service to our Users. The Site may also carry
                advertisements from other companies. When you click on links of
                third parties in an Application, the Services or the Site, you
                may leave the Application, the Services or the Site. We do not
                collect your information on and through and This Policy does not
                address, and we are not responsible for, the privacy practices
                of Web sites operated by third parties, whether they are linked
                to or otherwise accessible from an Application, the Services or
                the Site. The inclusion of a link or accessibility of third
                party Websites does not imply endorsement of such third party
                Website by us.
              </p>
            </div>
          </div>
          <div className="pcontent_6">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">{"6) Security :"}</p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                Short Video Status App is very concerned about safeguarding the
                confidentiality of your information. We do not collect Personal
                Information, and we employ administrative, physical and
                electronic measures designed to protect your Non-Personal
                Information from unauthorized access and use. Please be aware
                that no security measures that we take to protect your
                information is absolutely guaranteed to avoid unauthorized
                access or use of your Non-Personal Information which is
                impenetrable. We haven't any Intention To Copy or use Others
                Product use and Access in company’s Application...
              </p>
            </div>
          </div>
          <div className="pcontent_7">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">{"7) Privacy Policy Changes :"}</p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                We reserve the right, at our sole discretion, to change, modify
                or otherwise alter this Policy at any time. In Our Privacy
                Policy may change from time to time, we will post any privacy
                policy changes on this page, so please review it periodically.
                We may provide you additional forms of notice of modifications
                or updates as appropriate under the circumstances. If you do not
                agree to any modifications to this Policy, your sole recourse is
                to immediately stop all use of all Applications, the Services
                and the Site.Your continued use of any Application, the Services
                or the Site following the posting of any modifications to this
                Policy will constitute your acceptance of the revised Policy.
                Please note that none of our employees or agents has the
                authority to vary any of our Policies.
              </p>
            </div>
          </div>
          <div className="pcontent_8">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">
                {"8) UGC (User Generated Content) Disclaimers :"}
              </p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                Users who create images, videos or any content from the apps to
                share on social media or other platforms are solely responsible
                on their own. We have all rights to remove such content from our
                Apps. We don’t make any commitments about the content within the
                Services, the specific functions of the Services, or their
                reliability, availability, or ability to meet your needs. We
                provide the Services “as is”. When you upload, submit, store,
                send or receive content to or through our Services, you give us
                (and those we work with) a worldwide license to use, host,
                store, reproduce, modify, create derivative works (such as those
                resulting from translations, adaptations or other changes we
                make so that your content works better with our Services),
                communicate, publish, publicly perform, publicly display and
                distribute such content. The rights you grant in this license
                are for the limited purpose of operating, promoting, and
                improving our Services, and to develop new ones. This license
                continues even if you stop using our Services (for example, for
                a business listing you have added to Location Apps). Some
                Services may offer you ways to access and remove content that
                has been provided to that Service. Also, in some of our
                Services, there are terms or settings that narrow the scope of
                our use of the content submitted in those Services. Make sure
                you have the necessary rights to grant us this license for any
                content that you submit to our Services.
              </p>
            </div>
          </div>
          <div className="pcontent_9">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">{"9) Advertisement in App :"}</p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                We use Google Admob and Facebook Audience Network SDK for
                advertisements in our applications. There could be errors in the
                programming and sometime programming errors may cause unwanted
                side effects.To Check Facebook Ads Privacy Policy Click HereTo
                check Admob Policy Click Here
              </p>
            </div>
          </div>
          <div className="pcontent_10">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">
                {"10) Children / Children's Online Privacy Protection Act :"}
              </p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                Our App comply with the Children's Online Privacy Protection Act
                ("COPPA"). We don't knowingly collect personal information from
                children under the age of 13 in violation of COPPA, and if in
                the event that a user identifies himself or herself as a child
                under the age of 13 through a support request, we will not
                collect, store or use, and will delete in a secure manner, any
                personal information of such user.
              </p>
              <p className="pcontent">
                We allow users to contact us if they have support questions
                about use of our mobile applications. If you submit a support
                request, we may receive your email address and other information
                you provide related to your support request ("Support
                Information"). We use Support Information only for the support
                for the internal operations of our App as provided under Section
                312.2 of the COPPA rules effective July 1, 2013.
              </p>
              <p className="pcontent">
                We do not knowingly collect or use any Personal Information from
                children under the age of 13. To the extent we feel that our App
                is directed to children under the age of 13, we will not collect
                Personal Information from users of our Apps.
              </p>
              <p className="pcontent">
                If you are a parent of a child under 13 years of age and you
                believe your child has provided us with Personal Information,
                please contact us and we will delete the information from our
                system.
              </p>
              <p className="pcontent">
                We may collect Non-personal Information, such as a device ID or
                other persistent identifier linked to the device or computer,
                which may be used by a child to play our App. The data collected
                will be anonymous and not tied to any Personal Information. In
                addition, this data will be used solely for internal purposes
                such as personalization of content, security, and contextual
                (not behavioral) advertising.
              </p>
              <p className="pcontent">
                Certain of our App may permit in-game purchases, even if the
                applicable game was free to download. Such purchases do not
                always require the re-entry of credit card information because
                they may be made through an existing third-party account. If you
                are a parent who is concerned about this feature, you may
                disable the ability to make in-game purchases.If you are between
                the age of 13 and 18, please obtain your parents' permission
                prior to registering with our Platform or providing us with any
                Personal Information.Our Company developers continuously work on
                All Photography & Video Apps and We Give Periodic Updates to
                Solve Problems and Bugs as well as to provide new features all
                for smooth User Experience.
              </p>
            </div>
          </div>
          <div className="pcontent_11">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">
                {"11) General Data Protection Regulation (GDPR) :"}
              </p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                Our Apps comply with the General Data Protection Regulation
                (GDPR) as per EU data protection rules of European Commission.To
                use our apps you must agree to our terms/conditions and privacy
                policy as no personal information is required to use the app.We
                do not collect or use any Personal Information from children
                under the age of 13 in any case. To the extent we feel that our
                App is directed to children under the age of 13, we will not
                collect Personal Information from users of this App.
              </p>
            </div>
          </div>
          <div className="pcontent_12">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">{"12) Contacting us :"}</p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">
                If you have any questions about this Privacy Policy, the
                practices of this site, or your dealings with this site please
                feel free to contact us.
              </p>
            </div>
          </div>

          <div className="pcontent_13">
            <div className="pcontent_title_wrapper">
              <p className="pcontent_title">{"CONTACT US"}</p>
            </div>
            <div className="pcontent_wrapper">
              <p className="pcontent">E-mail us at</p>
              <p className="pcontent p-0 lh-1">lizaheadan@gmail.com</p>
              <p className="pcontent p-0 lh-1">Privacy | Terms</p>
              <p className="pcontent p-0 lh-1">
                Contact Us: lizaheadan@gmail.com
              </p>
              <p className="pcontent p-0 lh-1">
                Copyright © 2023 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
