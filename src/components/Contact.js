import React from "react";

const Contact = () => {
  return (
    <footer id="contact-us" className="footer mt-5">
      <div className="container">
        <h4>Contact Us</h4>
        <form method="post">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Query / Comments</label>
            <textarea className="form-control" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Contact;
