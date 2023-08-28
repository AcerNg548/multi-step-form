"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/navigation";
import { motion as m } from "framer-motion";

export default function Home() {
  //Router
  const router = useRouter();

  //Formik

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(26, "Name is too long")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.number().required("This field is required"),
    }),

    //Submit
    onSubmit: (values) => {
      console.log(values);
      router.push("/two");
    },
  });

  return (
    <>
      <m.div
        className="flex flex-col ml-5 h-full w-full relative "
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
      >
        <div className="flex flex-col">
          <h2 className="font-extrabold text-[28px] text-marineBlue ">
            Personal Info
          </h2>
          <p className="font-medium text-coolGray">
            Please provide your name, email address, and phone number.
          </p>
        </div>

        <div>
          <form
            className="mt-4 flex flex-col gap-6"
            action="#"
            method="POST"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="name"
                  className="block text-[14px] font-medium text-marineBlue"
                >
                  Name
                </label>
                <label
                  htmlFor="name"
                  className="block text-[10px] font-bold mr-40 text-strawberryRed"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : ""}
                </label>
              </div>
              <div className="mt-1">
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="name"
                  type="text"
                  className={`border ${
                    formik.touched.name && formik.errors.name
                      ? "border-strawberryRed"
                      : "border-coolGray"
                  } w-3/4 p-[6px] bg-none text-coolGray text-[16px] rounded-md px-[10px]
                               focus:outline-none ${
                                 formik.touched.name && formik.errors.name
                                   ? "focus:border-strawberryRed focus:ring-strawberryRed"
                                   : "focus:border-purplishBlue focus:ring-purplishBlue"
                               } focus:ring-1 focus:text-marineBlue focus:font-medium focus:bg-transparent bg-transparent`}
                  placeholder="e.g. Stephen King"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-marineBlue"
                >
                  Email Address
                </label>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-bold mr-40 text-strawberryRed"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </label>
              </div>
              <div className="mt-1">
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  type="email"
                  autoComplete="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  className={`border ${
                    formik.touched.email && formik.errors.email
                      ? "border-strawberryRed"
                      : "border-coolGray"
                  } w-3/4 p-[6px] bg-none text-coolGray text-[16px] rounded-md px-[10px]
                             focus:outline-none ${
                               formik.touched.email && formik.errors.email
                                 ? "focus:border-strawberryRed focus:ring-strawberryRed"
                                 : "focus:border-purplishBlue focus:ring-purplishBlue"
                             } focus:ring-1 focus:text-marineBlue focus:font-medium focus:bg-transparent bg-transparent`}
                  placeholder="stephenking@lorem.com"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-marineBlue"
                >
                  Phone Number
                </label>
                <label
                  htmlFor="phone"
                  className="block text-[10px] font-bold mr-40 text-strawberryRed"
                >
                  {formik.touched.phone && formik.errors.phone
                    ? formik.errors.phone
                    : ""}
                </label>
              </div>

              <div className="mt-1">
                <input
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="phone"
                  type="tel"
                  autoComplete="tel-country-code"
                  className={`border ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-strawberryRed"
                      : "border-coolGray"
                  } w-3/4 p-[6px] bg-none text-coolGray text-[16px] rounded-md px-[10px]
                               focus:outline-none ${
                                 formik.touched.phone && formik.errors.phone
                                   ? "focus:border-strawberryRed focus:ring-strawberryRed"
                                   : "focus:border-purplishBlue focus:ring-purplishBlue"
                               } focus:ring-1 focus:text-marineBlue focus:font-medium focus:bg-transparent bg-transparent`}
                  placeholder="e.g. +1 234 567 890"
                />
              </div>
            </div>

            <m.button
              type="submit"
              className="bg-marineBlue p-2 px-4 text-[14px] rounded-lg absolute
          hover:bg-[#174a8b] font-medium text-alabaster
          right-36 bottom-0
          "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Next step
            </m.button>
          </form>
        </div>

        <div></div>
      </m.div>
    </>
  );
}
