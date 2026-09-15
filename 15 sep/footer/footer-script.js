document.addEventListener('DOMContentLoaded', function () {
  // script.js

  const footerHTML = `  <main class="Hemank-page">
    <footer class="Hemank-footer" aria-label="UnCodemy footer">
      <section class="Hemank-footer-top">
        <div class="Hemank-footer-wrap">
          <div class="Hemank-footer-grid">
            <section class="Hemank-brand-col">
              <a class="Hemank-brand-logo" href="#" aria-label="UnCodemy home">
                <span class="Hemank-brand-mark">
                  <img src="images/Uncodemy logo-10.webp" alt="">
                </span>
              </a>

              <p class="Hemank-about-text">
                Uncodemy is a team of high-class working professionals associated with a Fortune500
                company. We are on a mission to employ millions. If you want a job, or career change,
                Uncodemy is the right place for you. We will teach you how to work with the latest
                technology.
              </p>

              <div class="Hemank-social-row" aria-label="Social media links">
                <a class="Hemank-social-link Hemank-social-x" href="https://x.com/uncodemy?lang=en" aria-label="X">X</a>
                <a class="Hemank-social-link Hemank-social-fb" href="https://www.facebook.com/uncodemyofficial/" aria-label="Facebook">f</a>
                <a class="Hemank-social-link Hemank-social-in" href="https://www.linkedin.com/company/uncodemy/?originalSubdomain=in" aria-label="LinkedIn">in</a>
                <a class="Hemank-social-link Hemank-social-ig" href="https://www.instagram.com/uncodemyofficial/?hl=en" aria-label="Instagram">IG</a>
              </div>

              <p class="Hemank-certified">Certified By-</p>

              <div class="Hemank-partner-card" aria-label="Certification partners">
               <img src="./images/1.webp" alt="Description of the image">

              </div>

              <div class="Hemank-award-card" aria-label="Awards">
               <img src="./images/acheive.webp" alt="Description of the image">
              </div>

              <div class="Hemank-rating-row">
                <div class="Hemank-trust-card" aria-label="Trustpilot rating">
                 <img src="./images/Trustpilot-Reviews-Services-1.webp" alt="Description of the image"> 
                </div>

                <a class="Hemank-contact-card" href="https://uncodemy.com/contact-us">
              <img src="./images/CONTACT-US.webp" alt="Description of the image"> 
                </a>
              </div>
            </section>

            <section class="Hemank-contact-col">
              <h2>Get In Touch</h2>

              <div class="Hemank-contact-group">
                <div class="Hemank-contact-item">
                  <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <p>B 14-15, Udhyog Marg, Block B, Sector 1, Near Noida Sector-15 Metro Station, Delhi NCR Uttar Pradesh 201301</p>
                </div>
                <a class="Hemank-contact-item" href="tel:+919818366550">
                  <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>
                  <span>+91 9818366550</span>
                </a>
                <a class="Hemank-contact-item" href="tel:+918766313646">
                  <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>
                  <span>+91 8766313646</span>
                </a>
                <a class="Hemank-contact-item" href="tel:+918800023723">
                  <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>
                  <span>+91 8800023723</span>
                </a>
                <a class="Hemank-contact-item" href="mailto:info@uncodemy.com">
                  <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 6-10 7L2 6"></path></svg>
                  <span>info@uncodemy.com</span>
                </a>
              </div>

              <div class="Hemank-divider"></div>

              <div class="Hemank-contact-group Hemank-small">
                <div class="Hemank-contact-item">
                  <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <p>USA- 2439 Bagwell Avenue, Gainesville, Florida-32601</p>
                </div>
                <a class="Hemank-contact-item" href="tel:+17184169028">
                 <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>
                  <span>+1-718 416 9028</span>
                </a>
              </div>

              <div class="Hemank-divider"></div>

              <div class="Hemank-contact-group Hemank-small">
                <div class="Hemank-contact-item">
                   <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <p>UK - 68 Southern Way, North Lopham, London IP22 0HE</p>
                </div>
                <a class="Hemank-contact-item" href="tel:+442032870088">
                  <svg class="ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>
                  <span>+44 20 3287 0088</span>
                </a>
              </div>
            </section>

            <nav class="Hemank-links-col" aria-label="Quick links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="https://uncodemy.com/privacy-policy">Privacy Policy</a></li>
                <li><a href="https://uncodemy.com/terms-and-conditions">Terms &amp; Condition</a></li>
                <li><a href="https://uncodemy.com/refund-policy">Refund Policy</a></li>
                <li><a href="https://uncodemy.com/register-now">Register Now</a></li>
                <li><a href="https://uncodemy.com/cancellation-policy">Cancellation Policy</a></li>
                <li><a href="https://uncodemy.com/product-pricing">Product Pricing</a></li>
                <li><a href="https://uncodemy.com/shipping-exchange-policy">Shipping Exchange policy</a></li>
                <li><a href="https://uncodemy.com/contact-us">Contact Us</a></li>
              </ul>
            </nav>

            <aside class="Hemank-payment-col">
              <h2>Payments</h2>
              <p>Secure Payments by :</p>

             

              <a class="Hemank-promo-card Hemank-fee-card" href="#">
               <img src="./images/payment.webp" alt="fee payment ">

              </a>

              <a class="Hemank-promo-card Hemank-whatsapp-card" href="#">
                <img src="./images/whatsappp-logo-png-2293-768x512.webp" alt="whatsapp">
              </a>

              <a class="Hemank-promo-card Hemank-demo-card" href="#">
               <img src="./images/demo.webp" alt="Demo classes">
              </a>

              <a class="Hemank-promo-card Hemank-placement-card" href="#">
               <img src="./images/pc5.webp" alt="Placement ">
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section class="Hemank-course-footer" aria-label="Students zone and city course pages">
        <div class="Hemank-course-wrap">
          <section class="Hemank-students-zone">
            <h2>Students Zone</h2>
            <div class="Hemank-text-links">
              <a href="https://uncodemy.com/blog/">Blogs</a>
              <a href="https://uncodemy.com/summer-training-in-noida">Summer Training</a>
              <a href="https://uncodemy.com/winter-training-in-noida">Winter Training</a>
              <a href="https://uncodemy.com/industrial-training">Industrial Training</a>
              <a href="https://uncodemy.com/corporate-training">Corporate Training</a>
              <a href="https://uncodemy.com/placement">Placement</a>
              <a href="https://uncodemy.com/#specific-section">VideoReviews</a>
            </div>
          </section>

          <section class="Hemank-city-pages">
            <h2>Cities Course Pages.</h2>

            <article class="Hemank-city-row">
              <h3>Best Courses in Noida</h3>
              <div class="Hemank-text-links">
                <a href="https://uncodemy.com/course/software-testing-training-course-in-noida">Software Testing Training Course in Noida</a>
                <a href="https://uncodemy.com/course/data-science-training-course-in-noida">Data Science Training Course in Noida</a>
                <a href="https://uncodemy.com/course/data-analytics-training-course-in-noida">Data Analytics Training Course in Noida</a>
                <a href="https://uncodemy.com/course/full-stack-development-training-course-in-noida">Full Stack Developer Training Course in Noida</a>
                <a href="https://uncodemy.com/course/digital-marketing-training-course-in-noida">Digital Marketing Training course in Noida</a>
              </div>
            </article>

            <article class="Hemank-city-row">
              <h3>Best Courses in Delhi</h3>
              <div class="Hemank-text-links">
                <a href="https://uncodemy.com/course/software-testing-training-course-in-delhi">Software Testing Training Course in Delhi</a>
                <a href="https://uncodemy.com/course/data-science-training-course-in-delhi">Data Science Training Course in Delhi</a>
                <a href="https://uncodemy.com/course/data-analytics-training-course-in-delhi">Data Analytics Training Course in Delhi</a>
                <a href="https://uncodemy.com/course/full-stack-development-training-course-in-delhi">Full Stack Developer Training Course in Delhi</a>
                <a href="https://uncodemy.com/course/digital-marketing-training-course-in-delhi">Digital Marketing Training Course in Delhi</a>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section class="Hemank-copyright-section">
        <p>Copyright &copy; <strong>Uncodemy Edutech Pvt. Ltd.</strong></p>
        <p>All Rights Reserved.</p>
        <p>Designed by <strong>Uncodemy</strong></p>
      </section>

      <nav class="Hemank-desktop-cta" aria-label="Desktop footer actions">
        <a href="#">Ask For Demo</a>
        <a href="https://pages.razorpay.com/fees-uncodemy">Fee Payment</a>
        <a href="https://api.whatsapp.com/send?phone=918800023723">WhatsApp</a>
        <a href="mailto:info@uncodemy.com">Email</a>
        <a href="tel:+919818366550">Call Us Now</a>
      </nav>

      <nav class="Hemank-mobile-cta" aria-label="Mobile footer actions">
        <a class="Hemank-mobile-whatsapp" href="#">WhatsApp</a>
        <span class="Hemank-support-avatar" aria-hidden="true">
          <span class="Hemank-avatar-head"></span>
          <span class="Hemank-avatar-body"></span>
          <span class="Hemank-avatar-headset"></span>
        </span>
        <a class="Hemank-mobile-call" href="tel:+919818366550">Call Us Now</a>
      </nav>


    <nav class="bottom-navbar">
  <a href="https://uncodemy.com/" class="nav-item active">
    <svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>
    <span>Home</span>
  </a>
  <a href="https://uncodemy.com/all-courses" class="nav-item">
    <svg viewBox="0 0 24 24"><path d="M4 4h7v16H4z"/><path d="M13 4h7v16h-7z"/></svg>
    <span>Courses</span>
  </a>
  <div class="nav-item center" onclick="showForm()">
    <div class="center-btn">
      <span class="abhay-white"><strong>Apply </strong>
     <strong>Now</strong></span>
    
      <!-- <svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg> -->
    </div>
    <span>&nbsp;</span>
 </div>
 <a href="https://api.whatsapp.com/send?phone=918800023723" class="nav-item">
  <svg viewBox="0 0 32 32" fill="currentColor">
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"/>
  </svg>
  <span>WhatsApp</span>
</a>
  <a href="tel:+919818366550" class="nav-item">
    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.1 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.81.3 1.6.54 2.37a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.71-1.11a2 2 0 012.11-.45c.77.24 1.56.42 2.37.54A2 2 0 0122 16.92z"/></svg>
    <span>Contact</span>
  </a>
</nav>






    </footer>
  </main>`

  const UnCodeMyFooter = document.getElementById("UnCodeMy-Footer");
  console.log(UnCodeMyFooter);

  if (UnCodeMyFooter) {
    UnCodeMyFooter.innerHTML = footerHTML;
  }

   document.querySelectorAll('.nav-item:not(.center)').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

 })
 
 