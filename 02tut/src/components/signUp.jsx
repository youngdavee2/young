import React from 'react';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="text-3xl text-center font-bold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
