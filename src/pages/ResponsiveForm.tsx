// src/pages/ResponsiveForm.tsx
import styles from './ResponsiveForm.module.scss';

const ResponsiveForm = () => {
  return (
    <div className={styles.container}>
      <h2>Feedback Form</h2>
      <form className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" aria-label="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" aria-label="Enter your email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" aria-label="Enter your message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResponsiveForm;
