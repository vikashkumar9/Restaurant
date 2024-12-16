import CommonBanner from "@/components/CommonBanner/CommonBanner";

import MealsFooter from "@/components/Footer/MealsFooter";
import UserHeader from "@/components/Userheader/UserHeader";
import React from "react";

const page = () => {
  return (
    <div>
     <UserHeader />
     <CommonBanner
        heading="Refund Policy"
        description="we strive to provide the best service and products to our customers"
      />
      <div className="px-4 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="my-4 text-3xl text-blue-900 font-bold">
            Our Refund Policy
          </h2>
          <p className="text-gray-700 text-lg font-normal">
            At Paydhara, we strive to provide the best service and products to
            our customers. However, if for any reason you are not satisfied with
            your purchase, we offer a clear and transparent refund policy.
          </p>
        </div>
      </div>

      <div className="px-6 py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Eligibility for a Refund
            </h3>
            <p className="text-gray-700">
              To be eligible for a refund, the request must be made within 14
              days of purchase. The product or service must be unused and in its
              original condition. Refunds will be processed to the original
              method of payment.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              How to Request a Refund
            </h3>
            <p className="text-gray-700">
              If you would like to request a refund, please contact our customer
              support team at{" "}
              <a
                href="mailto:vikashparjapati59@gmail.com"
                className="text-blue-600 font-semibold"
              >
                vikashparjapati59@gmail.com
              </a>
              . Make sure to provide your order number and reason for the
              refund.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Non-Refundable Items
            </h3>
            <p className="text-gray-700">
              Some products or services are non-refundable, including digital
              products, gift cards, or items marked as Final Sale. Please read
              the product descriptions carefully before making a purchase.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-900">
              Processing Time
            </h3>
            <p className="text-gray-700">
              Refund requests are typically processed within 5-7 business days
              after approval. The refund will be credited back to the original
              payment method.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-900">Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions or concerns about our refund policy,
              feel free to reach out to our support team. We are here to assist
              you.
            </p>
          </section>
        </div>
      </div>

      <MealsFooter />
    </div>
  );
};

export default page;