import React, { useState, useContext, useRef, useCallback } from "react";
import { brochure } from "../Course";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
function DownloadButton() {
  const { download, name } = useContext(brochure);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    last: "",
    coursename: name || "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const form = useRef(null);
  const debounceTimerRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (e) => {
    const email = e.target.value;
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const validatePhone = (e) => {
    const phone = e.target.value;
    if (phone && !/^\d{10}$/.test(phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 10-digit phone number",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const downloadBrochure = useCallback(() => {
    const link = document.createElement("a");
    link.href = download;
    link.target ="_blank"
    link.download = `${name}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [download, name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await axios.post(
        "https://newusbackend-1.onrender.com/enquri",
        {
          ...formData,
          user_course: formData.coursename,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Access data directly from axios response
      const data = res.data;
      if (data.success) {
        // Clear any previous debounce timer
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }

        // Debounce the download function with 500ms delay
        debounceTimerRef.current = setTimeout(() => {
          downloadBrochure();
          debounceTimerRef.current = null;
        }, 500);

        setShowForm(false);
        setFormData({
          username: "",
          email: "",
          phone: "",
          last: "",
          coursename: name || "",
        });
      } else {
        toast.warn("Submission failed: " + (data.message || "Unknown error"), {
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
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Server error. Please try again later.", {
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        className="Download-button"
        onClick={() => setShowForm(true)}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="20"
          viewBox="0 0 640 512"
        >
          {/* Cloud with download arrow icon */}
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
            fill="#4E6BFF"
          />
        </svg>
        <span>Download</span>
      </button>

      {showForm && (
        <>
          <div className="popup-box">
            <div className="box ">
              <div className="md:flex w-full bg-gray-100 rounded-lg overflow-hidden">
                <div className="hidden md:block w-1/2 py-10 px-10 pop-form ">
                  <svg
                    width="full"
                    viewBox="0 0 745 748"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_2)">
                      <path
                        d="M71.629 629.347L65.069 603.475C53.4379 598.546 41.538 594.276 29.426 590.687L28.598 602.711L25.24 589.464C10.219 585.17 4.02832e-06 583.281 4.02832e-06 583.281C4.02832e-06 583.281 13.8 635.77 42.754 675.898L76.488 681.824L50.281 685.603C53.9231 689.985 57.8371 694.134 62 698.025C104.115 737.117 151.024 755.053 166.773 738.085C182.522 721.117 161.148 675.673 119.033 636.585C105.977 624.466 89.576 614.741 73.158 607.085L71.629 629.347Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M134.015 601.245L141.773 575.707C134.365 565.475 126.386 555.669 117.873 546.336L110.949 556.201L114.921 543.125C104.28 531.689 96.509 524.79 96.509 524.79C96.509 524.79 81.194 576.857 85.234 626.174L111.049 648.684L86.657 638.372C87.5105 644.007 88.7175 649.583 90.271 655.066C106.117 710.3 137.002 749.901 159.254 743.517C181.506 737.133 186.7 687.182 170.854 631.948C165.942 614.825 156.928 598.022 146.831 582.983L134.015 601.245Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M519.751 176.983H515.659V64.883C515.659 56.3625 513.981 47.9253 510.72 40.0534C507.459 32.1814 502.68 25.0287 496.655 19.0038C490.63 12.9789 483.478 8.19961 475.606 4.93893C467.734 1.67826 459.297 1.20752e-05 450.776 1.20752e-05H213.269C196.061 1.20752e-05 179.558 6.83588 167.39 19.0038C155.222 31.1717 148.386 47.675 148.386 64.883V679.883C148.386 688.404 150.064 696.841 153.325 704.713C156.586 712.585 161.365 719.737 167.39 725.762C173.415 731.787 180.567 736.566 188.439 739.827C196.311 743.088 204.748 744.766 213.269 744.766H450.776C467.984 744.766 484.487 737.93 496.655 725.762C508.822 713.594 515.658 697.091 515.658 679.883V256.778H519.75L519.751 176.983Z"
                        fill="#E6E6E6"
                      />
                      <path
                        d="M453.394 16.874H422.394C423.82 20.3696 424.364 24.1622 423.979 27.9177C423.593 31.6731 422.29 35.2762 420.184 38.4094C418.078 41.5426 415.234 44.1098 411.902 45.8848C408.57 47.6598 404.853 48.5882 401.078 48.588H265.013C261.238 48.5878 257.521 47.6593 254.189 45.8841C250.858 44.109 248.014 41.5417 245.908 38.4086C243.802 35.2754 242.5 31.6725 242.114 27.9172C241.729 24.1619 242.273 20.3694 243.699 16.874H214.743C201.892 16.874 189.568 21.979 180.481 31.0659C171.394 40.1527 166.289 52.4772 166.289 65.328V679.435C166.289 692.286 171.394 704.61 180.481 713.697C189.568 722.784 201.892 727.889 214.743 727.889H453.394C466.245 727.889 478.569 722.784 487.656 713.697C496.743 704.61 501.848 692.286 501.848 679.435V65.327C501.848 52.4764 496.743 40.1522 487.656 31.0655C478.569 21.9788 466.245 16.874 453.394 16.874Z"
                        fill="white"
                      />
                      <path
                        d="M303.658 261.503C303.657 257.21 304.787 252.993 306.934 249.276C309.081 245.559 312.169 242.473 315.888 240.329C312.171 238.182 307.955 237.052 303.663 237.052C299.37 237.051 295.154 238.18 291.436 240.326C287.719 242.472 284.632 245.559 282.486 249.276C280.34 252.993 279.21 257.209 279.21 261.502C279.21 265.794 280.34 270.01 282.486 273.727C284.632 277.444 287.719 280.531 291.436 282.677C295.154 284.823 299.37 285.952 303.663 285.952C307.955 285.951 312.171 284.821 315.888 282.674C312.17 280.53 309.081 277.445 306.935 273.728C304.788 270.012 303.657 265.795 303.658 261.503Z"
                        fill="#CCCCCC"
                      />
                      <path
                        d="M334.395 261.503C334.394 257.21 335.524 252.993 337.671 249.276C339.818 245.559 342.906 242.473 346.625 240.329C342.908 238.182 338.692 237.052 334.4 237.052C330.107 237.051 325.891 238.18 322.173 240.326C318.456 242.472 315.369 245.559 313.223 249.276C311.077 252.993 309.947 257.209 309.947 261.502C309.947 265.794 311.077 270.01 313.223 273.727C315.369 277.444 318.456 280.531 322.173 282.677C325.891 284.823 330.107 285.952 334.4 285.952C338.692 285.951 342.908 284.821 346.625 282.674C342.907 280.53 339.818 277.445 337.672 273.728C335.525 270.012 334.394 265.795 334.395 261.503Z"
                        fill="#CCCCCC"
                      />
                      <path
                        d="M364.434 285.952C377.937 285.952 388.884 275.005 388.884 261.502C388.884 247.999 377.937 237.052 364.434 237.052C350.931 237.052 339.984 247.999 339.984 261.502C339.984 275.005 350.931 285.952 364.434 285.952Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M405.296 337.869H262.796C261.439 337.867 260.139 337.328 259.18 336.369C258.22 335.409 257.681 334.109 257.679 332.752V190.252C257.681 188.895 258.22 187.595 259.18 186.635C260.139 185.676 261.439 185.137 262.796 185.135H405.296C406.653 185.137 407.953 185.676 408.913 186.635C409.872 187.595 410.411 188.895 410.413 190.252V332.752C410.411 334.109 409.872 335.409 408.913 336.369C407.953 337.328 406.653 337.867 405.296 337.869ZM262.796 187.183C261.982 187.184 261.202 187.508 260.626 188.083C260.051 188.659 259.727 189.439 259.726 190.253V332.753C259.727 333.567 260.051 334.347 260.626 334.923C261.202 335.499 261.982 335.822 262.796 335.823H405.296C406.11 335.822 406.89 335.499 407.466 334.923C408.042 334.347 408.365 333.567 408.366 332.753V190.253C408.365 189.439 408.042 188.659 407.466 188.083C406.89 187.508 406.11 187.184 405.296 187.183H262.796Z"
                        fill="#CCCCCC"
                      />
                      <path
                        d="M437.114 447.102H218.562V449.149H437.114V447.102Z"
                        fill="#CCCCCC"
                      />
                      <path
                        d="M225.464 434.322C229.276 434.322 232.366 431.232 232.366 427.42C232.366 423.608 229.276 420.518 225.464 420.518C221.652 420.518 218.562 423.608 218.562 427.42C218.562 431.232 221.652 434.322 225.464 434.322Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M437.114 516.118H218.562V518.165H437.114V516.118Z"
                        fill="#CCCCCC"
                      />
                      <path
                        d="M225.464 503.339C229.276 503.339 232.366 500.249 232.366 496.437C232.366 492.625 229.276 489.535 225.464 489.535C221.652 489.535 218.562 492.625 218.562 496.437C218.562 500.249 221.652 503.339 225.464 503.339Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M433.114 594.71H364.046C362.853 594.709 361.709 594.235 360.866 593.391C360.022 592.547 359.547 591.403 359.546 590.21V566.002C359.547 564.809 360.022 563.665 360.866 562.822C361.709 561.978 362.853 561.504 364.046 561.502H433.114C434.308 561.504 435.451 561.978 436.295 562.822C437.139 563.665 437.613 564.809 437.614 566.002V590.21C437.613 591.403 437.139 592.547 436.295 593.391C435.451 594.235 434.308 594.709 433.114 594.71Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M247.978 434.322C251.79 434.322 254.88 431.232 254.88 427.42C254.88 423.608 251.79 420.518 247.978 420.518C244.166 420.518 241.076 423.608 241.076 427.42C241.076 431.232 244.166 434.322 247.978 434.322Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M270.492 434.322C274.304 434.322 277.394 431.232 277.394 427.42C277.394 423.608 274.304 420.518 270.492 420.518C266.68 420.518 263.59 423.608 263.59 427.42C263.59 431.232 266.68 434.322 270.492 434.322Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M247.978 503.339C251.79 503.339 254.88 500.249 254.88 496.437C254.88 492.625 251.79 489.535 247.978 489.535C244.166 489.535 241.076 492.625 241.076 496.437C241.076 500.249 244.166 503.339 247.978 503.339Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M270.492 503.339C274.304 503.339 277.394 500.249 277.394 496.437C277.394 492.625 274.304 489.535 270.492 489.535C266.68 489.535 263.59 492.625 263.59 496.437C263.59 500.249 266.68 503.339 270.492 503.339Z"
                        fill="#4E6BFF"
                      />
                      <path
                        d="M742.066 747.077H24.08C22.543 747.077 21.298 746.531 21.298 745.859C21.298 745.187 22.543 744.64 24.08 744.64H742.066C743.602 744.64 744.848 745.186 744.848 745.859C744.848 746.532 743.602 747.077 742.066 747.077Z"
                        fill="#3F3D56"
                      />
                      <path
                        d="M564.677 489.461C565.167 489.686 565.639 489.949 566.087 490.249L610.94 471.106L612.541 459.29L630.462 459.181L629.403 486.279L570.204 501.935C570.079 502.346 569.93 502.75 569.756 503.143C568.9 504.969 567.524 506.502 565.8 507.549C564.075 508.595 562.08 509.109 560.065 509.026C558.05 508.942 556.104 508.265 554.473 507.08C552.841 505.894 551.596 504.253 550.894 502.362C550.192 500.471 550.064 498.415 550.527 496.452C550.99 494.489 552.022 492.706 553.495 491.328C554.967 489.95 556.814 489.037 558.804 488.705C560.793 488.373 562.836 488.636 564.677 489.461Z"
                        fill="#FFB8B8"
                      />
                      <path
                        d="M636.98 735.021H624.72L618.888 687.733L636.982 687.734L636.98 735.021Z"
                        fill="#FFB8B8"
                      />
                      <path
                        d="M615.963 731.518H639.607V746.405H601.076C601.076 742.456 602.644 738.67 605.436 735.878C608.228 733.086 612.015 731.518 615.963 731.518Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M684.66 731.557L672.459 732.759L662.018 686.271L680.025 684.497L684.66 731.557Z"
                        fill="#FFB8B8"
                      />
                      <path
                        d="M663.401 730.131L686.931 727.813L688.391 742.629L650.045 746.406C649.854 744.46 650.047 742.496 650.615 740.625C651.182 738.754 652.113 737.013 653.353 735.502C654.593 733.991 656.119 732.739 657.843 731.817C659.567 730.896 661.456 730.323 663.401 730.131Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M640.393 409.135C653.957 409.135 664.954 398.138 664.954 384.574C664.954 371.009 653.957 360.013 640.393 360.013C626.828 360.013 615.831 371.009 615.831 384.574C615.831 398.138 626.828 409.135 640.393 409.135Z"
                        fill="#FFB8B8"
                      />
                      <path
                        d="M621.98 725.458C620.927 725.461 619.906 725.091 619.098 724.415C618.291 723.738 617.748 722.798 617.565 721.761C611.22 686.535 590.477 571.355 589.981 568.165C589.97 568.092 589.965 568.018 589.966 567.943V559.355C589.965 559.043 590.063 558.738 590.245 558.483L592.985 554.645C593.115 554.461 593.286 554.309 593.484 554.2C593.683 554.092 593.903 554.03 594.129 554.02C609.751 553.288 660.913 551.142 663.385 554.23C665.867 557.333 664.99 566.736 664.789 568.59L664.799 568.783L687.784 715.778C687.964 716.951 687.675 718.147 686.98 719.108C686.285 720.069 685.239 720.717 684.069 720.913L669.713 723.278C668.644 723.45 667.548 723.232 666.626 722.665C665.704 722.097 665.016 721.217 664.687 720.186C660.247 705.997 645.358 658.268 640.198 639.799C640.166 639.682 640.092 639.581 639.991 639.514C639.889 639.448 639.767 639.42 639.647 639.437C639.527 639.454 639.417 639.514 639.338 639.606C639.259 639.698 639.216 639.816 639.218 639.938C639.476 657.543 640.099 702.461 640.313 717.975L640.337 719.645C640.346 720.777 639.931 721.87 639.173 722.71C638.416 723.55 637.37 724.075 636.244 724.182L622.4 725.439C622.26 725.452 622.119 725.458 621.98 725.458Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M624.805 418.792C620.519 421.34 617.954 426.023 616.482 430.787C613.757 439.609 612.117 448.729 611.598 457.947L610.042 485.547L590.787 558.717C607.476 572.838 617.102 569.629 639.568 558.078C662.033 546.528 664.6 561.929 664.6 561.929L669.092 499.671L675.511 431.639C674.07 429.904 672.439 428.336 670.649 426.964C664.716 422.351 657.814 419.145 650.462 417.587C643.11 416.028 635.501 416.159 628.207 417.969L624.805 418.792Z"
                        fill="white"
                      />
                      <path
                        d="M618.551 504.239C619.069 504.434 619.57 504.669 620.051 504.943L664.4 482.746L665.136 470.72L683.429 469.459L684.41 496.872L625.144 516.471C624.66 518.547 623.556 520.426 621.978 521.858C620.4 523.291 618.423 524.209 616.311 524.491C614.198 524.773 612.05 524.405 610.151 523.436C608.253 522.468 606.694 520.944 605.683 519.068C604.672 517.192 604.256 515.052 604.49 512.934C604.724 510.815 605.598 508.819 606.995 507.209C608.392 505.599 610.246 504.453 612.31 503.922C614.374 503.392 616.551 503.502 618.551 504.239Z"
                        fill="#FFB8B8"
                      />
                      <path
                        d="M675.19 431.95C686.101 435.801 688.023 477.524 688.023 477.524C675.186 470.463 659.782 482.017 659.782 482.017C659.782 482.017 656.573 471.105 652.721 456.985C651.558 453.013 651.419 448.811 652.317 444.771C653.215 440.731 655.12 436.984 657.856 433.878C657.856 433.878 664.278 428.097 675.19 431.95Z"
                        fill="white"
                      />
                      <path
                        d="M662.415 391.069C659.355 388.621 655.18 393.071 655.18 393.071L652.732 371.037C652.732 371.037 637.431 372.87 627.638 370.426C617.846 367.981 616.316 379.301 616.316 379.301C615.811 374.728 615.708 370.12 616.01 365.53C616.621 360.021 624.578 354.513 638.655 350.841C652.732 347.168 660.076 363.082 660.076 363.082C669.869 367.977 665.475 393.517 662.415 391.069Z"
                        fill="#2F2E41"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2">
                        <rect width="744.848" height="747.077" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                  <button
                    className="text-white cross-button"
                    onClick={() => setShowForm(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <div className="text-center from-headding ">
                    <h1 className="font-bold text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                  </div>

                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 main-form"
                  >
                    <div className="flex mx-3">
                      <div className="w-1/2 px-3 mb-5">
                        <label className="text-xs font-semibold px-1">
                          First name
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`w-full  rounded-lg border-2 ${
                              errors.username
                                ? "border-red-500"
                                : "border-gray-200"
                            } outline-none focus:border-indigo-500`}
                            placeholder="John"
                            required
                          />
                        </div>
                        {errors.username && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.username}
                          </p>
                        )}
                      </div>
                      <div className="w-1/2 px-3 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Last name
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            name="last"
                            value={formData.last}
                            onChange={handleChange}
                            className="w-full rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex mx-3 gap-2">
                      <div className="w-full px-3 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Email
                        </label>
                        <div className="flex">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => {
                              handleChange(e);
                              validateEmail(e);
                            }}
                            className={`w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 ${
                              errors.email
                                ? "border-red-500"
                                : "border-gray-200"
                            } outline-none focus:border-indigo-500`}
                            placeholder="johndoe@example.com"
                            required
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex mx-3">
                      <div className="w-full px-3 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Phone Number
                        </label>
                        <div className="flex">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => {
                              handleChange(e);
                              validatePhone(e);
                            }}
                            className={`w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 ${
                              errors.phone
                                ? "border-red-500"
                                : "border-gray-200"
                            } outline-none focus:border-indigo-500`}
                            placeholder="1234567890"
                            required
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="coursename"
                      value={formData.coursename}
                    />
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="lk gh dk rg tc wf xf _l gi hi "
                        >
                          {submitting ? "SUBMITTING..." : "REGISTER NOW"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DownloadButton;
