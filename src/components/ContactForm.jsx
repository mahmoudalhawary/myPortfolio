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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
          Let's Contact
        </h2>
      </motion.div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <motion.div
          className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* Full Name */}
          <motion.div
            className="sm:col-span-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <input
              placeholder="Full Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.name && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-red-500 text-sm mt-1"
              >
                {errorMessage.name}
              </motion.p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            className="sm:col-span-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.email && (
<motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-red-500 text-sm mt-1"
              >
                {errorMessage.email}
              </motion.p>
            )}
          </motion.div>

          {/* Phone number */}
          <motion.div
            className="sm:col-span-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone number 0123456789"
              value={form.phoneNumber}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.phoneNumber && (
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-red-500 text-sm mt-1"
              >
                {errorMessage.phoneNumber}
              </motion.p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div
            className="sm:col-span-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <textarea
              placeholder="Your message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white placeholder:text-gray-500 focus:outline-indigo-500"
            />
            {errorMessage.message && (
          <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-red-500 text-sm mt-1"
              >
                {errorMessage.message}
              </motion.p>
            )}
          </motion.div>

          {/* Success/Error Messages */}
          {successMessage && (
            <motion.div
              className="sm:col-span-2 text-green-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage.general && (
            <motion.div
              className="sm:col-span-2 text-red-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errorMessage.general}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
