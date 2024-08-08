"use server";

/**
 * @param {FormData} previousState - Form data before form submitted.
 * @param {FormData} formDate - Data submitted from the sign up form.
 */
export async function signup(previousState, formDate) {
  const email = formDate.get("email");
  const password = formDate.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }
  // store in db
}
