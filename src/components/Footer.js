import React from "react"
import "./../styles/css/footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>Developed by: Samson Sanyaolu</h3>

      <div className="icons-container">
        <a title='portfolio' href="https://react.sosarena.com/" rel="noopener noreferrer" target="_blank">
          <i className="fas fa-address-card portfolio"></i>
        </a>&nbsp;
        <a title='github' href="https://github.com/sosarenaint/" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github-square github"></i>
        </a>
        <a title='facebook' href="https://www.facebook.com/praiseloading" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-facebook-square facebook"></i>
        </a>
        <a title='linkedin' href="https://www.linkedin.com/in/samson-sanyaolu" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a title='twitter' href="https://twitter.com/praiseloading" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-twitter-square twitter"></i>
        </a>
        <a title='gmail' href="mailto:samsonosanyaolu@gmail.com" rel="noopener noreferrer" target="_blank">
          <i className="fas fa-envelope-square gmail"></i>
        </a>

      </div>


    </div>
  )
}

export default Footer
