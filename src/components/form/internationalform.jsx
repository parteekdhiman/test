import React, { useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
function InternationalForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const openPopup = () => {
    setIsOpen(true);
    setSubmitStatus(null);
  };
  const closePopup = () => {
    setIsOpen(false);
    setFormData({ name: "", phone: "", email: "" });
    setErrors({});
    setSubmitStatus(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    const phonePattern = /^[\d\s\-+()]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setloading(true); //start loading
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:3000/send-email",
          formData
        );
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setFormData({ name: "", phone: "", email: "" });
        setErrors({});
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Submission failed. Please try again.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      } finally {
        setloading(false); //stop loading
      }
    } else {
      setloading(false); //stop loading if validation fails
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        .btn-open {
          padding: 14px 28px;
          font-size: 16px;
          background-color: rgb(78, 107, 255);
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          margin: 30px;
          font-weight: 600;
          box-shadow: 0 8px 20px rgba(78, 107, 255, 0.5);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          display: inline-block;
        }
        .btn-open:hover,
        .btn-open:focus {
          background-color: rgb(55, 78, 230);
          outline: none;
          box-shadow: 0 12px 28px rgba(55, 78, 230, 0.7);
        }
        .overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(3px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 15px;
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn {
          from {opacity:0;}
          to {opacity:1;}
        }
        .popup {
          background-color: white;
          padding: 40px 35px;
          border-radius: 20px;
          width: 100%;
          max-width: 440px;
          box-shadow:
            0 12px 28px rgba(78, 107, 255, 0.3),
            0 4px 15px rgba(0, 0, 0, 0.1);
          position: relative;
          box-sizing: border-box;
          animation: slideIn 0.4s ease;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        #popup-form-title {
          margin-top: 0;
          margin-bottom: 30px;
          color: rgb(78, 107, 255);
          font-size: 2rem;
          font-weight: 800;
          text-align: center;
          letter-spacing: 0.03em;
        }
        form label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          font-size: 1.05rem;
          color: #333;
          user-select: none;
        }
        form input {
          width: 100%;
          padding: 14px 16px;
          margin-bottom: 20px;
          border-radius: 12px;
          border: 1.8px solid #ccc;
          font-size: 1rem;
          font-weight: 500;
          color: #222;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline-offset: 2px;
        }
        form input:focus {
          border-color: rgb(78, 107, 255);
          box-shadow: 0 0 10px rgb(78, 107, 255, 0.4);
        }
        form input[aria-invalid="true"] {
          border-color: #e63946;
          box-shadow: 0 0 8px #e63946a8;
        }
        .error-message {
          color: #e63946;
          font-size: 0.875rem;
          margin-top: -15px;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .btn-submit {
          background-color: rgb(78, 107, 255);
          color: white;
          padding: 16px 20px;
          font-weight: 700;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          width: 100%;
          font-size: 1.1rem;
          margin-bottom: 18px;
          box-shadow: 0 8px 24px rgba(78, 107, 255, 0.45);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          display: inline-block;
        }
        .btn-submit:hover,
        .btn-submit:focus {
          background-color: rgb(55, 78, 230);
          box-shadow: 0 12px 30px rgba(55, 78, 230, 0.6);
          outline: none;
        }
        .btn-close {
          background-color: #ccc;
          color: #333;
          padding: 14px 20px;
          font-weight: 700;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          width: 100%;
          font-size: 1.05rem;
          transition: background-color 0.3s ease;
          user-select: none;
          display: inline-block;
        }
        .btn-close:hover,
        .btn-close:focus {
          background-color: #a8a8a8;
          outline: none;
        }
        .submit-message {
          margin-top: 10px;
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
          color: #2a9d8f;
          user-select: none;
          min-height: 1.25em;
        }
        .submit-message.error {
          color: #e63946;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .popup {
            padding: 30px 20px;
            border-radius: 16px;
          }
          #popup-form-title {
            font-size: 1.6rem;
            margin-bottom: 25px;
          }
          form label {
            font-size: 1rem;
          }
          form input {
            padding: 12px 14px;
            font-size: 0.95rem;
            margin-bottom: 18px;
          }
          .btn-submit,
          .btn-close {
            padding: 14px 16px;
            font-size: 1rem;
          }
          .btn-open {
            padding: 12px 26px;
            font-size: 14px;
            margin: 25px auto;
            display: block;
          }
        }
      `}</style>

      <div className="flex justify-center">
        {" "}
        <button
          onClick={openPopup}
          className="btn-open"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          type="button"
        >
          Book a Free Demo
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-form-title"
          tabIndex={-1}
          className="overlay"
          onClick={closePopup}
        >
          <div
            role="document"
            onClick={(e) => e.stopPropagation()}
            className="popup"
          >
            <h2 id="popup-form-title">Enquiry form</h2>
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                autoComplete="name"
              />
              {errors.name && (
                <div id="name-error" className="error-message">
                  {errors.name}
                </div>
              )}

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                autoComplete="tel"
              />
              {errors.phone && (
                <div id="phone-error" className="error-message">
                  {errors.phone}
                </div>
              )}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <div id="email-error" className="error-message">
                  {errors.email}
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>

              <button type="button" onClick={closePopup} className="btn-close">
                Close
              </button>
              <div
                className={
                  submitStatus
                    ? submitStatus.success
                      ? "submit-message"
                      : "submit-message error"
                    : ""
                }
                role="alert"
                aria-live="polite"
              >
                {submitStatus ? submitStatus.message : ""}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default InternationalForm;
