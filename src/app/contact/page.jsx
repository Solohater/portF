"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48 py-10 gap-10">
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl text-center">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full lg:w-1/2 bg-green-50 dark:bg-gray-900 rounded-xl text-base sm:text-lg md:text-xl flex flex-col gap-4 sm:gap-6 justify-center px-6 py-10 sm:px-10 md:px-16"
        >

          <span className="dark:text-white">Dear Yoseph,</span>
          <textarea
            rows={6}
            className="bg-white dark:bg-gray-800 text-black dark:text-white border-b-2 border-black dark:border-white outline-none resize-none p-2 rounded"
            name="user_message"
            required
          />

          <span className="dark:text-white">My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-white dark:bg-gray-800 text-black dark:text-white border-b-2 border-black dark:border-white outline-none p-2 rounded"
            required
          />

          <span>Regards</span>
          <button className="bg-black rounded font-semibold text-white py-3 px-6 hover:bg-gray-900 transition-all text-sm sm:text-base">
            Send
          </button>

          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
