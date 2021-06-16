import React from 'react'
import '../../App.css'
 const Footer = () => {
    return (
    <>

    <footer class="site-footer">
      
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; {(new Date().getFullYear())} All Rights Reserved by{' '} 
            <a href="/">Lyrical</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="/"><i class="fab fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://github.com/stark255"><i class="fab fa-github"></i></a></li>
              <li><a class="dribbble" href="/"><i class="fa fa-envelope"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/in/mohd-i-448428190"><i class="fab fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
      </footer>
    </>
    ) 
}

export default Footer;