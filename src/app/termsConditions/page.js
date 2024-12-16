import CommonBanner from "@/components/CommonBanner/CommonBanner";

import MealsFooter from "@/components/Footer/MealsFooter";
import UserHeader from "@/components/Userheader/UserHeader";
import React from "react";

const page = () => {
  return (
    <div>
     <UserHeader />
      <CommonBanner
        heading="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our services."
      />

      {/* Terms & Conditions Content */}
      <div className="px-4 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="my-4 text-3xl text-blue-900 font-bold">
            Terms & Conditions
          </h2>
          <p className="text-gray-700 text-lg font-normal">
            By using this website or our services, you agree to comply with and
            be bound by these terms and conditions. If you do not agree to these
            terms, please do not use our services.
          </p>
        </div>
      </div>

      <div className="px-6 py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Introduction
            </h3>
            <p className="text-gray-700">
              These Terms and Conditions (Terms) govern your use of the services
              provided by Paydhara, including the website and other online
              services. By accessing or using our services, you agree to be
              bound by these Terms and all applicable laws and regulations.
            </p>
          </section>

          {/* Use of Services */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Use of Services
            </h3>
            <p className="text-gray-700">
              You agree to use our services only for lawful purposes and in a
              manner consistent with these Terms. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Use the services in a way that violates any applicable law,
                regulation, or third-party rights.
              </li>
              <li>
                Engage in any activity that interferes with or disrupts the
                website or services.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of our services
                or systems.
              </li>
            </ul>
          </section>

          {/* User Accounts */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              User Accounts
            </h3>
            <p className="text-gray-700">
              If you create an account with us, you are responsible for
              maintaining the confidentiality of your account and password. You
              agree to notify us immediately if you suspect any unauthorized use
              of your account.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Intellectual Property
            </h3>
            <p className="text-gray-700">
              All content, features, and functionality of the services are the
              exclusive property of Paydhara and are protected by copyright,
              trademark, and other intellectual property laws. You may not copy,
              modify, distribute, or otherwise use our content without our
              express permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Limitation of Liability
            </h3>
            <p className="text-gray-700">
              Paydhara will not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits,
              revenue, or data arising out of or related to your use of the
              services, even if we have been advised of the possibility of such
              damages.
            </p>
          </section>

          {/* Privacy Policy Reference */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Privacy Policy
            </h3>
            <p className="text-gray-700">
              Your use of the services is also governed by our Privacy Policy,
              which explains how we collect, use, and protect your personal
              information. Please review our{" "}
              <a href="/privacy-policy" className="text-blue-600 font-semibold">
                Privacy Policy
              </a>{" "}
              for more details.
            </p>
          </section>

          {/* Modifications to Terms */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Modifications to Terms
            </h3>
            <p className="text-gray-700">
              We may update these Terms from time to time. When we make changes,
              we will post the updated Terms on our website and update the
              Effective Date at the top of this page. We encourage you to review
              these Terms periodically to stay informed about any updates.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Termination
            </h3>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate your access to the
              services at any time, without notice, if we believe you have
              violated these Terms or engaged in fraudulent or illegal
              activities.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Governing Law
            </h3>
            <p className="text-gray-700">
              These Terms will be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law principles. Any disputes arising from these Terms will be
              subject to the exclusive jurisdiction of the courts in [Your
              Jurisdiction].
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a
                href="mailto:vikashparjapati59@gmail.com"
                className="text-blue-600 font-semibold"
              >
                vikashparjapati59@gmail.com
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