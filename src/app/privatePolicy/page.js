import CommonBanner from "@/components/CommonBanner/CommonBanner";

import MealsFooter from "@/components/Footer/MealsFooter";
import UserHeader from "@/components/Userheader/UserHeader";
import React from "react";

const page = () => {
  return (
    <div>
     <UserHeader />
     <CommonBanner
        heading="Privacy Policy"
        description="A privacy policy is a legal document or statement that explains how a party handles a customer's, client's, or employee's data."
      />

      {/* Privacy Policy Content */}
      <div className="px-4 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="my-4 text-3xl text-blue-900 font-bold">
            Your Privacy Matters to Us
          </h2>
          <p className="text-gray-700 text-lg font-normal">
            At Paydhara, we take your privacy seriously. This Privacy Policy
            outlines how we collect, use, and protect your personal information
            when you visit our website or use our services.
          </p>
        </div>
      </div>

      <div className="px-6 py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction Section */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Introduction
            </h3>
            <p className="text-gray-700">
              This Privacy Policy applies to all personal data we collect
              through our website, mobile applications, and other services. We
              are committed to protecting your personal data and ensuring that
              your privacy is respected.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Information We Collect
            </h3>
            <p className="text-gray-700">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Personal Identification Information (e.g., name, email address,
                phone number)
              </li>
              <li>
                Transaction Information (e.g., billing address, purchase
                history)
              </li>
              <li>
                Usage Data (e.g., browsing activity, device information,
                location data)
              </li>
              <li>
                Cookies and Tracking Technologies (e.g., tracking user behavior
                on the site)
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              How We Use Your Information
            </h3>
            <p className="text-gray-700">
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>To provide, maintain, and improve our services</li>
              <li>
                To communicate with you, including sending promotional emails or
                important updates
              </li>
              <li>To process transactions and deliver services or products</li>
              <li>To personalize your experience on our website</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Data Security
            </h3>
            <p className="text-gray-700">
              We implement a variety of security measures to maintain the safety
              of your personal information when you place an order or enter,
              submit, or access your personal information. We use encryption
              protocols and secure servers to safeguard your data.
            </p>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Sharing Your Information
            </h3>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with trusted
              partners and service providers who assist us in operating our
              business or providing services to you, as long as they agree to
              keep your information confidential.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Cookies and Tracking Technologies
            </h3>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to enhance your
              experience on our website, track users movements, and gather
              demographic data. Cookies are small files stored on your device,
              and you can disable them in your browser settings. However,
              disabling cookies may limit your ability to use certain features
              of our site.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Your Rights
            </h3>
            <p className="text-gray-700">
              You have the right to access, update, or delete your personal
              information at any time. If you wish to exercise any of these
              rights or have questions about how we use your data, please
              contact us at{" "}
              <a
                href="mailto:support@paydhara.com"
                className="text-blue-600 font-semibold"
              >
                vikashparjapati59@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Changes to This Privacy Policy
            </h3>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on our website
              and updating the Effective Date at the top of this page. We
              encourage you to review this Privacy Policy periodically for any
              updates or changes.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or our
              practices regarding your personal information, please do not
              hesitate to contact us at{" "}
              <a
                href="mailto:vikashparjapati59@gmail.com"
                className="text-blue-600 font-semibold"
              >
                mailto:vikashparjapati59@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <MealsFooter />
    </div>
  );
};

export default page;