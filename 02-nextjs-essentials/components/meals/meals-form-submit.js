"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  /**
   * useFormStatus must be within a form component and the component must have
   * the "use client" directive set.
   */
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
