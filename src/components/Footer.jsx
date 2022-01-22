import React, { useState } from "react";
import Modal from "./Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div class="attribution">
         Copyright © CardGame 2022 <a href="https://github.com/Yaya0312/cardGameFront"> Front </a> / <a href="https://github.com/Nouha-06/CardGame-Back"> Back </a>. Coded by <a href="#"> NouhailaML-Yaya-Abdel-Julia </a>.
        </div>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
