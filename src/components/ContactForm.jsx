import React from "react";
import emailjs from "@emailjs/browser";
import sendIcon from "../assets/send2.png";
import { motion } from "framer-motion";

function ContactForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = React.useState({});
  const [successMessage, setSuccessMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};

    if (!form.name) errors.name = "Name is required";

    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }

    if (!form.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{11}$/.test(form.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 11 digits";
    }

    if (!form.message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const vErrors = validate();

    if (Object.keys(vErrors).length === 0) {
      setLoading(true);
      emailjs
        .send("service_9h8oapl", "template_2wvf0k8", form, "ofUl3XCwDDmA5r5SB")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully!");
          setForm({ name: "", email: "", phoneNumber: "", message: "" });
          setErrorMessage({});
          setTimeout(() => setSuccessMessage(""), 10000);
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setErrorMessage({ general: "Failed to send message." });
          setTimeout(() => setErrorMessage({}), 10000);
        })
        .finally(() => setLoading(false));
    } else {
      setErrorMessage(vErrors);
      setTimeout(() => setErrorMessage({}), 10000);
    }
  };

  return (
    <motion.div
      className="isolate bg-gray-50/10 px-6 py-24 sm:py-32 lg:px-8 w-full max-w-3xl rounded-3xl border border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
          Let's Contact
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Full Name */}
          <div className="sm:col-span-2">
            <input
              placeholder="Full Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.name && (
              <p className="text-red-500 text-sm mt-1">{errorMessage.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.email && (
              <p className="text-red-500 text-sm mt-1">{errorMessage.email}</p>
            )}
          </div>

          {/* Phone number */}
          <div className="sm:col-span-2">
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone number 0123456789"
              value={form.phoneNumber}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errorMessage.phoneNumber}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <textarea
              placeholder="Your message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.message && (
              <p className="text-red-500 text-sm mt-1">{errorMessage.message}</p>
            )}
          </div>

          {/* Success/Error Messages */}
          {successMessage && (
            <motion.div
              className="sm:col-span-2 text-green-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage.general && (
            <motion.div
              className="sm:col-span-2 text-red-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {errorMessage.general}
            </motion.div>
          )}
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
            <img src={sendIcon} alt="Send Icon" className="w-5 h-5" />
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}

export default ContactForm;