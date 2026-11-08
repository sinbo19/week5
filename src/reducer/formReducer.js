
export const initialFormState = {
  formData: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },

  errors: {},

  status: "idle",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.name]: action.value,
        },
        errors: {
          ...state.errors,
          [action.name]: "",
        },
        status: "idle",
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
        status: "error",
      };

    case "SUBMIT_START":
      return {
        ...state,
        status: "submitting",
      };

    case "SUBMIT_SUCCESS":
      return {
        ...state,
        status: "success",
      };

    default:
      return state;
  }
}

export default formReducer;
