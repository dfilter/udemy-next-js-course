import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

export default function ShareMealPage() {
  /**
   * For server side function handling the "use server" directive must be set.
   * This allows this function to be set as a prop of the action for the form
   * below.
   *
   * @param {FormData} formData - Data submitted from the form below.
   */
  async function shareMeal(formData) {
    "use server";

    const meal = {
      title: formData.get("title"),
      creator_email: formData.get("email"),
      creator: formData.get("name"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
    };

    console.log(meal);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* The server side function defined above is set the action prop
        here. */}
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
