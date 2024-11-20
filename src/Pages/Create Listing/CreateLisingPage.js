import React from 'react';
import InputField from '../../components/InputField/InputField';
import './CreateListingPage.css';

const CreateListingPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Submit Your Business Listing</h1>
      <form className="space-y-6">
        <div>
          <InputField title="Username:" type="text" />
        </div>
        <div>
          <InputField title="Password:" type="password" />
        </div>
        <div>
          <InputField title="Confirm Password:" type="password" />
        </div>
        <div>
          <InputField title="Business Name:" type="text" />
        </div>
        <div>
          <InputField title="Company Address:" type="text" />
        </div>
        <div>
          <InputField title="Phone*:" type="text" />
        </div>
        <div>
          <InputField title="Latitude*:" type="text" />
        </div>
        <div>
          <InputField title="Longitude*:" type="text" />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description*:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListingPage;

