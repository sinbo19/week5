
import { useReducer } from "react";
import formReducer, {
  initialFormState,
} from "../reducer/formReducer";

function Form() {
  const [state, dispatch] = useReducer(
    formReducer,
    initialFormState
  );

  const { formData, errors, status } = state;

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch({
      type: "UPDATE_FIELD",
      name,
      value,
    });
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

    if (Object.keys(validationErrors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        errors: validationErrors,
      });
      return;
    }

    dispatch({ type: "SUBMIT_START" });

    setTimeout(() => {
      dispatch({ type: "SUBMIT_SUCCESS" });
    }, 1000);
  }

  return (
    <main id="main-content" tabIndex="-1">
      <div className="mx-auto flex max-w-6xl justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
              Create Your Account
            </h1>

            <p className="mt-2">
              Join DevLearn and start learning today.
            </p>
          </div>

          <div className="rounded-card bg-white p-6 shadow-md sm:p-8">
            <h2 className="text-xl font-semibold">
              Personal Information
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
              noValidate
            >
              <div>
                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

                {errors.fullName && (
                  <p className="text-red-600">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />

                {errors.email && (
                  <p className="text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                />

                {errors.password && (
                  <p className="text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password again"
                />

                {errors.confirmPassword && (
                  <p className="text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "Creating account..."
                  : "Create Account"}
              </button>

              {status === "success" && (
                <p className="text-green-700">
                  Your form was submitted successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600">
                  Please correct the errors above.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Form;
