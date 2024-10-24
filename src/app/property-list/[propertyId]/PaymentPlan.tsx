import React from "react";
import { PropertyDetailFields } from "./page";

// Define the types for the fields prop
interface PaymentPlanProps {
  fields: PropertyDetailFields;
}

const PaymentPlan: React.FC<PaymentPlanProps> = ({ fields }) => {
  return (
    <div className="payment-plan">
      <h3 className="text-2xl font-bold mb-6">Payment Plan</h3>
      <div className="flex justify-between gap-6">
        {/* Down Payment Section */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center flex-1">
          <h5 className="text-lg font-bold">Down Payment</h5>
          <div className="percentage text-3xl font-bold my-2">
            {fields.downPaymentPercentage}%
          </div>
          <p className="text-gray-600 text-sm mt-2">Purchase Date</p>
        </div>

        {/* Easy Installment Section */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center flex-1">
          <h5 className="text-lg font-bold">Easy Installment</h5>
          <div className="percentage text-3xl font-bold my-2">
            {fields.easyInstallmentPercentage}%
          </div>
          <p className="text-gray-600 text-sm mt-2">During Construction</p>
        </div>

        {/* Handover Section */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center flex-1">
          <h5 className="text-lg font-bold">Handover</h5>
          <div className="percentage text-3xl font-bold my-2">
            {fields.handoverPercentage}%
          </div>
          <p className="text-gray-600 text-sm mt-2">Construction Complete</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
