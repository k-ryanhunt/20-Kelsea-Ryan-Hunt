import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <footer class="page-footer">
    <div class="container">
      <div class="row">
    <div class="col l4 offset-l1 s12">
    <h4 class="white-text" id="contactMe">Contact Me</h4>
    <ul>
      <li><a id="contactInfo" class="grey-text text-lighten-3 valign-wrapper" href="#!"><i class="material-icons" id="icon">phonelink_ring</i>843-822-9802</a></li>
      <li><a id="contactInfo" class="grey-text text-lighten-3 valign-wrapper" href="mailto:hunt.kelsearyan@gmail.com"><i class="material-icons" id="icon">email</i>hunt.kelsearyan@gmail.com</a></li>
      <li><a id="contactInfo" class="grey-text text-lighten-3 valign-wrapper" href="../images/resume2.pdf" target="_blank"><i class="material-icons" id="icon">content_copy</i>Resume</a></li>
      <li><a id="contactInfo" class="grey-text text-lighten-3 valign-wrapper" href="https://github.com/k-ryanhunt"><i class="material-icons" id="icon">code</i>GitHub Portfolio</a></li>
      <li><a id="contactInfo" class="grey-text text-lighten-3 valign-wrapper" href="https://www.linkedin.com/in/k-ryanhunt/"><i class="material-icons" id="icon">group_add</i>LinkedIn Profile</a></li>
    </ul>
  </div>
  </div>
  </div>
  </footer>
  );
};
export default Contact;
