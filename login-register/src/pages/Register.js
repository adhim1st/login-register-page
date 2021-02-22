import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const [province, setProvince] = useState("");
  const [city, setCity] = useState([]);
  const DKI_Jakarta = [
    "Jakarta Pusat",
    "Jakarta Barat",
    "Jakarta Selatan",
    "Jakarta Utara",
    "Jakarta Timur",
  ];
  const Jawa_Tengah = [
    "Magelang",
    "Surakarta",
    "Semarang",
    "Salatiga",
    "Pekalongan",
  ];

  const onSubmit = (data) => console.log(data);

  const handleChange = (value) => {
    setProvince(value);
  };

  useEffect(() => {
    switch (province) {
      case "Jawa Tengah":
        setCity(Jawa_Tengah);
        break;
      default:
        setCity(DKI_Jakarta);
        break;
    }
  }, [province]);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased flex flex-col justify-center">
      <div className="relative sm:w-96 md:w-2/6 sm:mx-auto text-center">
        <span className="text-2xl font-light font-poppin">Register now</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-indigo-400 rounded-t-md"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 py-6 font-roboto"
          >
            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="first_name" className="block font-semibold">
                  First Name
                </label>
                <input
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  ref={register({ required: "First name required" })}
                  className="border w-full h-5 px-3 py-5 mt-2 placeho hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                {errors.first_name && (
                  <p className="px-2 pt-1 text-red-500 text-sm">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="pl-2">
                <label htmlFor="last_name" className="block font-semibold">
                  Last Name
                </label>
                <input
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  ref={register({ required: "Last name required" })}
                  className="border w-full h-5 px-3 py-5 mt-2 placeho hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                {errors.last_name && (
                  <p className="px-2 pt-1 text-red-500 text-sm">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
            <label htmlFor="email" className="block font-semibold pt-3">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              ref={register({
                required: "Email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.email && (
              <p className="px-2 pt-1 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
            <label htmlFor="password" className="block font-semibold pt-3">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: "Password required" })}
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
            {errors.password && (
              <p className="px-2 pt-1 text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
            <label htmlFor="gender" className="block font-semibold pt-3">
              Gender
            </label>
            <div className="flex flex-row justify-start items-baseline">
              <div className="px-5 pt-2">
                <input
                  name="gender"
                  type="radio"
                  value="Male"
                  ref={register({ required: "Gender required" })}
                />
                <span className="pl-2">Male</span>
              </div>
              <div className="px-5 pt-2">
                <input
                  name="gender"
                  type="radio"
                  value="Female"
                  ref={register({ required: "Gender required" })}
                />
                <span className="pl-2">Female</span>
              </div>
            </div>
            {errors.gender && (
              <p className="px-2 pt-1 text-red-500 text-sm">
                {errors.gender.message}
              </p>
            )}
            <label htmlFor="province" className="block font-semibold pt-3">
              Province
            </label>
            <select
              name="province"
              ref={register({ required: "Province required" })}
              value={province}
              onChange={(e) => handleChange(e.target.value)}
              className="border w-full h-10 pl-2 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            >
              <option value="" disabled>
                Select Province
              </option>
              <option value="DKI Jakarta">DKI Jakarta</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
            </select>
            {errors.province && (
              <p className="px-2 pt-1 text-red-500 text-sm">
                {errors.province.message}
              </p>
            )}
            <label htmlFor="city" className="block font-semibold pt-3">
              City
            </label>
            <select
              name="city"
              defaultValue=""
              ref={register({ required: "City required" })}
              className="border w-full h-10 pl-2 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            >
              <option value="" disabled>
                Select City
              </option>
              {city &&
                city.map((e) => {
                  return <option value={e}>{e}</option>;
                })}
            </select>
            {errors.city && (
              <p className="px-2 pt-1 text-red-500 text-sm">
                {errors.city.message}
              </p>
            )}
            <div className="mt-2 flex justify-between items-baseline">
              <button className="mt-4 bg-indigo-400 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">
                Sign Up
              </button>
              <Link to="/login" className="text-sm hover:underline">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
