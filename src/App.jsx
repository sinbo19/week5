
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setStatus("idle");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Demo submission. No data is sent to a server.
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <h1 className="text-2xl font-bold text-brand-600">
            ShopEase
          </h1>

          <p className="text-sm text-gray-500">
            Shopping made simple.
          </p>
        </div>
      </header>

      {/* Main section */}
      <main className="mx-auto flex max-w-6xl justify-center px-4 py-12">
        <div className="w-full max-w-lg">

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Your Account
            </h2>

            <p className="mt-2 text-gray-600">
              Join ShopEase and start shopping today.
            </p>
          </div>

          {/* Registration card */}
          <div className="rounded-card bg-white p-6 shadow-md sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Personal Information
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
              noValidate
            >

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />

                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />

                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password again"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />

                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Creating account..."
                  : "Create Account"}
              </button>

              {/* Success message */}
              {status === "success" && (
                <p className="rounded-lg bg-green-50 p-3 text-center text-sm text-green-700">
                  Your form was submitted successfully!
                </p>
              )}

              {/* Error message */}
              {status === "error" && (
                <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-700">
                  Please correct the errors above.
                </p>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-brand-600 hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
