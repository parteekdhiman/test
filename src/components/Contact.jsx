import React, { memo } from "react";

function Contact() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center p-11">
        <div className="max-w-screen-xl bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="subcontainer-1-end-details-1">
              <p>
                Get in <span className="text-color">Touch</span> With Us Today
              </p>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-color">
                Contact Us
              </h1>
              <div className="w-full flex-1 mt-8">
                <form>
                  <div className="flex -mx-3">
                    <div className="w-1/2 px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        First name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          name="user_name"
                          className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="newus"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Last name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          name="last"
                          className="w-full -ml-10 pl-1 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Dharamshala"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          name="user_email"
                          className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="newusdharamshala@gmail.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label className="text-xs font-semibold px-1">
                        Phone Number
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="number"
                          name="user_phone"
                          className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="86796 86796"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button className="block w-full max-w-xs mx-auto text-white rounded-lg px-3 py-3 font-semibold form-button1">
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url(https://newus.in/images/other/contact.svg)" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4321.7034888542985!2d76.31866115021634!3d32.20285105381522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b511c22b65243%3A0x8433138aed0f3902!2sNewus%20Dharamshala!5e0!3m2!1sen!2sin!4v1717828087433!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="newus"
        ></iframe>
      </div>
    </>
  );
}

export default memo(Contact);