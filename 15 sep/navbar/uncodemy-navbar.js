/*!
 * uncodemy-navbar.js
 * Reusable UnCodemy site navbar — Web Component.
 *
 * USAGE (on every page):
 *   1. Copy this file, All.css, and the images/ folder next to your HTML pages
 *      (or host them and use absolute URLs below).
 *   2. In each page's <head>, add:
 *        <script src="uncodemy-navbar.js" defer></script>
 *   3. In the <body>, wherever you want the navbar to appear, add:
 *        <uncodemy-navbar></uncodemy-navbar>
 *
 * That's it — this single script injects the markup, the required
 * stylesheets (All.css + Font Awesome), and all the dropdown/popup
 * interactivity automatically. Update this ONE file and every page
 * that includes <uncodemy-navbar></uncodemy-navbar> updates together.
 */
(function () {
  "use strict";

  var NAVBAR_HTML = `<header class="abhay-site-header">
    <div class="abhay-top-row">
      <a class="abhay-brand" href="https://uncodemy.com/" aria-label="UnCodemy home">
        <img class="abhay-brand-logo" src="images/Logo (1).webp" alt="UnCodemy" />
      </a>

      <div class="abhay-rank">
        <strong>#1</strong>
        <span>India's Top IT Training Institute</span>
      </div>

      <button class="abhay-mobile-btn abhay-contact-toggle" type="button" aria-expanded="false" aria-controls="contactBar">
        Contact
      </button>

<div class="abhay-contact-bar" id="contactBar">
  <span class="abhay-sep"></span>

  <!-- Desktop: direct numbers -->
  <div class="abhay-desktop-numbers">
    <a href="tel:+919818366550">+91 9818366550</a>
    <a href="tel:+918448807675">+91 8448807675</a>
    <a href="tel:+918766313646">+91 8766313646</a>
  </div>

  <!-- Mobile: icon + dropdown -->
  <div class="phone-dropdown">
    <button class="phone-icon-btn" id="phoneIconBtn">
      <svg class="abhay-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
      </svg>
      <a  class="ab-number"href="tel:+919818366550">+91 9818366550</a>
    </button>
    <div class="phone-dropdown-menu" id="phoneDropdownMenu">
    <a  class="ab-number-sec"href="tel:+919818366550">+91 9818366550</a>
      <a href="tel:+918448807675">+91 8448807675</a>
      <a href="tel:+918766313646">+91 8766313646</a>
    </div>
  </div>

        <span class="abhay-sep"></span>
        <a href="tel:+918800023723">
        <img class="abhay-support" src="images/for_support.webp" alt="support"></a>
        <a class="support-no" href="tel:+918800023723">For Support : +91 8800023723</a>
        <span class="abhay-sep"></span>
        <a id="abhay-gmail" href="mailto:info@uncodemy.com"><img class="abhay-gmail" src="images/gmail.webp" alt="Gmail"></a>
        <a  class ="abhay-email""href="mailto:info@uncodemy.com">info@uncodemy.com</a>
        <span class="abhay-sep"></span>
        <a class="abhay-whatsapp" href="https://wa.me/919818366550" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <img class="ab-img"src="images/whatsapp.webp" alt="WhatsApp" />
        </a>
        <span class="abhay-sep"></span>
      </div>
    </div>

    <nav class="abhay-nav-row" aria-label="Primary navigation">
    <div class="abhay-category-wrap">
<button class="abhay-category-btn" type="button" aria-expanded="false" aria-controls="categoryMenu">
  <span>CATEGORIES</span>
</button>
        <div class="abhay-category-menu" id="categoryMenu">
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Full-Stack-Development</a>
            <div class="abhay-submenu" aria-label="Full Stack Development courses">
              <a href="https://uncodemy.com/course/full-stack-with-nodejs-training-course-in-noida">Full Stack With NodeJs</a>
              <a href="https://uncodemy.com/course/python-full-stack-training-course-in-noida">Python Full Stack</a>
              <a href="https://uncodemy.com/course/java-full-stack-using-react-training-course-in-noida">Java Full Stack Using React</a>
              <a href="https://uncodemy.com/course/web-designing-training-course-in-noida">Web Designing</a>
              <a href="https://uncodemy.com/course/web-development-training-course-in-noida">Web Development</a>
              <a href="https://uncodemy.com/course/frontend-development-training-course-in-noida">Frontend</a>
              <a href="https://uncodemy.com/course/angular-training-course-in-noida">Angular</a>
              <a href="https://uncodemy.com/course/react-js-training-course-in-noida">ReactJs</a>
              <a href="https://uncodemy.com/course/data-structure-and-algorithm-training-course-in-noida">Data Structureand Algorithm</a>
              <a href="https://uncodemy.com/course/mean-stack-development-training-course-in-noida">Mean</a>
              <a href="https://uncodemy.com/course/mern-stack-development-training-course-in-noida">Mern</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Data Science</a>
            <div class="abhay-submenu" aria-label="Data Science courses">
              <a href="https://uncodemy.com/course/business-analyst-training-course-in-noida">Business Analytics</a>
              <a href="https://uncodemy.com/course/python-training-course-in-noida">Python</a>
              <a href="https://uncodemy.com/course/data-analytics-using-python-training-course-in-noida">Data Analytics using Python</a>
              <a href="https://uncodemy.com/course/data-science-machine-learning-using-python-training-course-in-noida">Data Science &amp; Machine Learning using Python</a>
              <a href="https://uncodemy.com/course/machine-learning-using-python-training-course-in-noida">Machine Learning using Python</a>
              <a href="https://uncodemy.com/course/ai-using-python-training-course-in-noida">AI Using Python</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Software Testing</a>
            <div class="abhay-submenu" aria-label="Software Testing courses">
              <a href="https://uncodemy.com/course/software-testing-training-course-in-noida">Software Testing</a>
              <a href="https://uncodemy.com/course/manual-testing-course-in-noida">Manual Testing</a>
              <a href="https://uncodemy.com/course/automation-testing-course-in-noida">Automation Testing</a>
              <a href="https://uncodemy.com/course/istqb-training-course-in-noida">ISTQB Testing</a>
              <a href="https://uncodemy.com/course/manual-testing-course-in-noida">Manual + Selenium</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Cloud Tools</a>
            <div class="abhay-submenu" aria-label="Cloud Tools courses">
              <a href="https://uncodemy.com/course/microsoft-azure-training-course-in-noida">Microsoft Azure</a>
              <a href="https://uncodemy.com/course/devops-training-course-in-noida">DevOps</a>
              <a href="https://uncodemy.com/course/aws-training-course-in-noida">Amazon Web Services (AWS)</a>
              <a href="https://uncodemy.com/course/cloud-computing-training-course-in-noida">Cloud Computing</a>
              <a href="https://uncodemy.com/course/salesforce-training-course-in-noida">Salesforce</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Digital Marketing</a>
            <div class="abhay-submenu" aria-label="Digital Marketing courses">
              <a href="https://uncodemy.com/course/digital-marketing-training-course-in-noida">Digital Marketing</a>
              <a href="https://uncodemy.com/course/advance-digital-marketing-training-course-in-noida">AdvanceDigital Marketing</a>
              <a href="https://uncodemy.com/course/seo-training-course-in-noida">SEO(SearchEngine Optimization)</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Java Technology+</a>
            <div class="abhay-submenu" aria-label="Java Technology courses">
              <a href="https://uncodemy.com/course/java-training-course-in-noida">Java</a>
              <a href="https://uncodemy.com/course/java-for-beginners-training-course-in-noida">Java For Beginners</a>
              <a href="https://uncodemy.com/course/java-expert-training-course-in-noida">Java Expert</a>
              <a href="https://uncodemy.com/course/spring-boot-microservices-security-with-hibernate-training-course-in-noida">SpringBoot Microservices Security With Hibernate</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Network &amp; Security</a>
            <div class="abhay-submenu" aria-label="Network and Security courses">
              <a href="https://uncodemy.com/course/ethical-hacking-course-in-noida">Ethical Hacking</a>
              <a href="https://uncodemy.com/course/cyber-security-training-course-in-noida">Cyber Security</a>
              <a href="https://uncodemy.com/course/ccnp-training-course-in-noida">CCNP</a>
              <a href="https://uncodemy.com/course/mcsa-training-course-in-noida">MCSA</a>
              <a href="https://uncodemy.com/course/vmware-training-course-in-noida">Vmware</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Programming Language</a>
            <div class="abhay-submenu" aria-label="Programming Language courses">
              <a href="https://uncodemy.com/course/c-with-data-structure-and-algorithm-training-course-in-noida">C With Data Structure And Algorithms</a>
              <a href="https://uncodemy.com/course/cpptraining-training-course-in-noida">Object Oriented DataStructure &amp; Algorithms Training</a>
              <a href="https://uncodemy.com/course/net-4-months-training-course-in-noida">.NET 4 Months</a>
              <a href="https://uncodemy.com/course/dotnet-full-stack-training-course-in-noida">.NET Full Stack</a>
              <a href="https://uncodemy.com/course/r-programming-training-course-in-noida">R Programming</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">CAD Training</a>
            <div class="abhay-submenu" aria-label="CAD Training courses">
              <a href="https://uncodemy.com/course/autocad-training-course-in-noida">AUTOCAD</a>
              <a href="https://uncodemy.com/course/cnc-programming-training-course-in-noida">CNC Programming</a>
            </div>
          </div>
          <div class="abhay-menu-item abhay-has-submenu">
            <a href="#">Graphic Designing</a>
            <div class="abhay-submenu" aria-label="Graphic Designing courses">
              <a href="https://uncodemy.com/course/graphic-designing-training-course-in-noida">Graphic Designing</a>
              <a href="https://uncodemy.com/course/uiux-training-course-in-noida">UI/UX Designing</a>
            </div>
          </div>
        </div>
      </div>
  <div class="abhay-quick-actions">
<a class="abhay-quick-btn" href="https://uncodemy.com/placement">Placement</a>
<a class="abhay-quick-btn abhay-quick-btn-ai" href="https://uncodemy.com/career-guidance-by-ai">
<span class="abhay-ai-badge abhay-ai-badge-mobile">AI-Powered</span>
<span class="abhay-quick-icon">✦</span> Career Guidance
</a>
</div>
<button class="abhay-mobile-btn abhay-menu-toggle" type="button" aria-expanded="false" aria-controls="primaryNav">

  <svg class="abhay-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
  Menu
</button>

      <div class="abhay-primary-nav" id="primaryNav">
        <a href="https://uncodemy.com/">Home</a>
        <div class="abhay-abhasu-dropdown-wrap">
          <button class="abhay-abhasu-trigger" id="abhasuTrigger" aria-expanded="false" aria-haspopup="true">
            Courses
            <span aria-hidden="true">▾</span>
          </button>

          <div class="abhay-abhasu-overlay" id="abhasuOverlay"></div>

          <div class="abhay-abhasu-panel" id="abhasuPanel">
            <button class="abhay-abhasu-close" id="abhasuClose" aria-label="Close">&times;</button>
            <div class="abhay-abhasu-sidebar" id="abhasuSidebar"></div>
            <div class="abhay-abhasu-content">
              <div class="abhay-abhasu-content-head">
                <div>
                  <h3 class="abhay-abhasu-content-title" id="abhasuContentTitle"></h3>
                  <p class="abhay-abhasu-content-sub" id="abhasuContentSub"></p>
                </div>
              </div>
              <div class="abhay-abhasu-grid" id="abhasuGrid"></div>
            </div>
          </div>
        </div> <a href="https://uncodemy.com/placement" class="abhay-placement-link">Placement</a>
        
        <a href="#" id="trainingBtn">Training
          <span aria-hidden="true">▾</span>
        </a>

        <!-- claude-changes: start -->
        <div class="abhay-popup" id="popup">
          <div class="abhay-popup-content">
            <span class="abhay-close">&times;</span>

            <div class="abhay-training-heading">
              <!-- <h2>Training Programs</h2> -->
              <p>Choose the best training program according to your career.</p>
            </div>

            <div class="abhay-training-card-container">
              <div class="abhay-card">
                <div class="abhay-image-heading">
                  <img src="images/industrial training .webp" alt="Industrial Training">
                  <h3>Industrial Training</h3>
                </div>
                <p>Improve the performance of your business with our innovative Industrial Training Program.</p>
                <a href="https://uncodemy.com/industrial-training">Read More →</a>
              </div>

              <div class="abhay-card">
                <div class="abhay-image-heading">
                  <img src="images/corporate training .webp" alt="Corporate Training">
                  <h3>Corporate Training</h3>
                </div>
                <p>Our instructor-led training classes are designed to make you an expert.</p>
                <a href="https://uncodemy.com/corporate-training">Read More →</a>
              </div>

              <div class="abhay-card">
                <div class="abhay-image-heading">
                  <img src="images/summer training.webp" alt="Summer Training">
                  <h3>Summer Training</h3>
                </div>
                <p>Real-life case studies are a great way to demonstrate your practical knowledge.</p>
                <a href="https://uncodemy.com/summer-training-in-noida">Read More →</a>
              </div>

              <div class="abhay-card">
                <div class="abhay-image-heading">
                  <img src="images/winter training .webp" alt="Winter Training">
                  <h3>Winter Training</h3>
                </div>
                <p>Learn from professionals and earn an industry-recognized certificate.</p>
                <a href="https://uncodemy.com/winter-training-in-noida">Read More →</a>
              </div>

              <div class="abhay-card">
                <div class="abhay-image-heading">
                  <img src="images/Blog training .webp" alt="Blog Session">
                  <h3>Blog Session</h3>
                </div>
                <p>Explore blogs, latest technologies and industry updates with practical examples.</p>
                <a href="https://uncodemy.com/blog/">Read More →</a>
              </div>

              <div class="abhay-card">
                <div class="abhay-image-heading">
                  <img src="images/all courses.webp" alt="All Courses">
                  <h3>All Courses</h3>
                </div>
                <p>Browse all available training programs and choose the right one for your career.</p>
                <a href="https://uncodemy.com/all-courses">Read More →</a>
              </div>
            </div>
          </div>
        </div>
        <!-- claude-changes: end -->
        <!-- claude-changes: about-popup start -->
        <a href="#" id="aboutBtn">About <span aria-hidden="true">&#9662;</span></a>
        <div class="abhay-popup" id="popupAbout">
          <div class="abhay-popup-content">
            <span class="abhay-close" id="aboutClose">&times;</span>

            <div class="abhay-training-heading">
              <h2>About Uncodemy</h2>
              <p>Know more about who we are and what we stand for.</p>
            </div>

            <div class="abhay-training-card-container">
              <div class="abhay-card">
                <div class="abhay-abt-img-head">
                  <img src="images/About us .webp" alt="About Us">
                  <h3>About Us</h3>
                </div>
                <p>Discover our mission to equip individuals with essential IT skills and industry expertise.</p>
                <a href="https://uncodemy.com/about-us">Read More →</a>
              </div>

              <div class="abhay-card">
                <div class="abhay-abt-img-head">
                  <img src="images/uncodemy gallery.webp" alt="UnCodeMy Gallery">
                  <h3>UnCodeMy Gallery</h3>
                </div>
                <p>Explore highlights from our IT training sessions and success stories.</p>
                <a href="https://uncodemy.com/gallery">Read More →</a>
              </div>
            </div>
          </div>
        </div>
        <!-- claude-changes: about-popup end -->
        <a class="abhay-career-link" href="https://uncodemy.com/career-guidance-by-ai">
          <span class="abhay-ai-badge">AI-Powered</span>
          Career Guidance
        </a>
        <a href="https://uncodemy.com/contact-us">Contact</a>
        <a class="abhay-fee-pay-btn" href="https://pages.razorpay.com/fees-uncodemy">Fees Payment</a>
      </div>
    </nav>

    <div class="abhay-launch-strip" aria-label="Quick links">
      <a class="abhay-header-pill abhay-green-pill" href="https://uncodemy.com/new-launches-products">New Launches</a>
      <a class="abhay-header-pill abhay-blue-pill" href="https://uncodemy.com/course/project-management-course-details">Project Management</a>
      <a class="abhay-header-pill abhay-blue-pill" href="https://uncodemy.com/course/pg-program-course-details">PG Programs</a>
      <a class="abhay-header-pill abhay-lime-pill" href="https://uncodemy.com/course/pg-program-course-details"> Counselling Session</a>
      <a class="abhay-header-pill abhay-lime-pill" href="https://uncodemy.com/placement#placement-2024">Placement Report</a>
      <a class="abhay-header-pill abhay-lime-pill" href="https://certificate.uncodemy.com/">Download Certificate</a>
    </div>
  </header>`;

  var REQUIRED_STYLES = [
    { id: "uncodemy-navbar-css", href: "All.css" },
    {
      id: "uncodemy-navbar-fa",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      integrity: "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer"
    }
  ];

  function ensureStylesLoaded() {
    REQUIRED_STYLES.forEach(function (style) {
      if (document.getElementById(style.id)) return;
      var link = document.createElement("link");
      link.id = style.id;
      link.rel = "stylesheet";
      link.href = style.href;
      if (style.integrity) link.integrity = style.integrity;
      if (style.crossorigin) link.crossOrigin = style.crossorigin;
      if (style.referrerpolicy) link.referrerPolicy = style.referrerpolicy;
      document.head.appendChild(link);
    });
  }

  function initNavbarBehavior() {
  const categoryButton = document.querySelector(".abhay-category-btn");
  const categoryMenu = document.querySelector("#categoryMenu");
  const contactButton = document.querySelector(".abhay-contact-toggle");
  const contactBar = document.querySelector("#contactBar");
  const menuButton = document.querySelector(".abhay-menu-toggle");
  const primaryNav = document.querySelector("#primaryNav");
  const categoryLinks = document.querySelectorAll(".abhay-category-menu a");
  const submenuParents = document.querySelectorAll(".abhay-has-submenu");
  const phoneIconBtn = document.querySelector("#phoneIconBtn");
const phoneDropdownMenu = document.querySelector("#phoneDropdownMenu");


  function setPanel(button, panel, forcedState) {
    if (!button || !panel) return;

    const isOpen = typeof forcedState === "boolean"
      ? forcedState
      : !panel.classList.contains("abhay-is-open");

    panel.classList.toggle("abhay-is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
  }

categoryButton?.addEventListener("click", () => {
    setPanel(categoryButton, categoryMenu);
  });

  const categoryWrap = document.querySelector(".abhay-category-wrap");

  categoryWrap?.addEventListener("mouseenter", () => {
    setPanel(categoryButton, categoryMenu, true);
  });

  categoryWrap?.addEventListener("mouseleave", () => {
    setPanel(categoryButton, categoryMenu, false);
  });

  contactButton?.addEventListener("click", () => {
    setPanel(contactButton, contactBar);
  });

  menuButton?.addEventListener("click", () => {
    setPanel(menuButton, primaryNav);
  });
phoneIconBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  const willOpen = !phoneDropdownMenu.classList.contains("abhay-is-open");
  setPanel(phoneIconBtn, phoneDropdownMenu, willOpen);
  contactBar.style.overflow = willOpen ? "visible" : "hidden";
});
categoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const parent = link.parentElement;
      const isParentLink = parent?.classList.contains("abhay-has-submenu");

      if (link.getAttribute("href") === "#") {
        event.preventDefault();
      }

      if (isParentLink) {
        const isOpen = parent.classList.contains("abhay-is-submenu-open");

        submenuParents.forEach((item) => {
          item.classList.remove("abhay-is-submenu-open");
        });

        if (!isOpen) {
          parent.classList.add("abhay-is-submenu-open");
        }
      }

      categoryLinks.forEach((item) => item.classList.remove("abhay-is-selected"));
      link.classList.add("abhay-is-selected");
      link.blur();
    });
  });

  // Hover support (desktop) — mouse le jaate hi submenu khule, hataate hi band ho
  submenuParents.forEach((parent) => {
    parent.addEventListener("mouseenter", () => {
      submenuParents.forEach((item) => {
        item.classList.remove("abhay-is-submenu-open");
      });
      parent.classList.add("abhay-is-submenu-open");
    });
    parent.addEventListener("mouseleave", () => {
      parent.classList.remove("abhay-is-submenu-open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".abhay-category-wrap")) {
      setPanel(categoryButton, categoryMenu, false);
    }

    if (!event.target.closest(".abhay-contact-bar") && !event.target.closest(".abhay-contact-toggle")) {
      setPanel(contactButton, contactBar, false);
    }

    if (!event.target.closest(".abhay-primary-nav") && !event.target.closest(".abhay-menu-toggle")) {
      setPanel(menuButton, primaryNav, false);
    }
        if (!event.target.closest(".phone-dropdown")) {
      setPanel(phoneIconBtn, phoneDropdownMenu, false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    setPanel(categoryButton, categoryMenu, false);
    setPanel(contactButton, contactBar, false);
    setPanel(menuButton, primaryNav, false);
        setPanel(phoneIconBtn, phoneDropdownMenu, false);
  });



  (function(){

    var abhasuCategories = [
      {
        name: "On Demand Courses",
        courses: [
          {name:"Data Science", image:"images/data-science.webp" , href:"https://uncodemy.com/course/data-science-training-course-in-noida", desc:"A powerful blend of statistics, programming, and domain expertise."},
          {name:"Data Analytics", image:"images/data-analytics.webp" , href:"https://uncodemy.com/course/data-analytics-training-course-in-noida", desc:"Transform raw data into meaningful business insights."},
          {name:"Software Testing", image:"images/software testing.webp" ,href:"https://uncodemy.com/course/software-testing-training-course-in-noida", desc:"Ensure software quality, performance, and reliability."},
          {name:"Full Stack Development", image:"images/full stack development.webp" , href:"https://uncodemy.com/course/full-stack-development-training-course-in-noida", desc:"Master both front-end and back-end development."},
          {name:"Digital Marketing", image:"images/digital-marketing.webp" , href:"https://uncodemy.com/course/digital-marketing-training-course-in-noida", desc:"Learn SEO, social media, and content marketing strategies."},
          {name:"Playwright Automation", image:"images/playwright-automation.webp" , href:"https://uncodemy.com/course/playwright-training-course-in-noida", desc:"Automate testing for modern web applications."},
          {name:"Java", image:"images/java.webp" , href:"https://uncodemy.com/course/java-training-course-in-noida", desc:"Build robust and scalable enterprise applications."},
          {name:"MERN Stack", image:"images/mern.webp" , href:"https://uncodemy.com/course/mern-stack-development-training-course-in-noida", desc:"Develop full-stack applications with MongoDB, Express, React, and Node.js."},
          {name:"Python", image:"images/python.webp" , href:"https://uncodemy.com/course/python-training-course-in-noida", desc:"A versatile language for web, software, and data applications."}
        ]
      },
      {
        name: "Data Science Program",
        courses: [
          {name:"Data Science",image:"images/data-science.webp" , href:"https://uncodemy.com/course/data-science-training-course-in-noida", desc:"Gain expertise in statistics, programming, and data-driven insights."},
          {name:"Data Analytics",image:"images/data-analytics.webp" , href:"https://uncodemy.com/course/data-analytics-training-course-in-noida", desc:"Leverage analytics to solve business challenges."},
          {name:"Business Analyst",image:"images/business-analytics.webp" ,  href:"https://uncodemy.com/course/business-analyst-training-course-in-noida", desc:"Bridge the gap between business needs and technology solutions."},
          {name:"Machine Learning",image:"images/machine learning.webp" ,  href:"https://uncodemy.com/course/machine-learning-training-course-in-noida", desc:"Build intelligent systems that learn from data."},
          {name:"Python",image:"images/python.webp" ,  href:"https://uncodemy.com/course/python-training-course-in-noida", desc:"The most popular programming language for data science."},
          {name:"Data Analytics using Python",image:"images/data analytics using python.webp" ,  href:"https://uncodemy.com/course/data-analytics-using-python-training-course-in-noida", desc:"Perform advanced data analysis using Python tools."},
          {name:"Machine Learning using Python",image:"images/ML using python.webp" ,  href:"https://uncodemy.com/course/machine-learning-using-python-training-course-in-noida", desc:"Create predictive models efficiently with Python."},
          {name:"AI using Python",image:"images/AI using python.webp" ,  href:"https://uncodemy.com/course/ai-using-python-training-course-in-noida", desc:"Develop intelligent applications using AI libraries."},
          {name:"Data Science & ML using Python",image:"images/DS andML using python.webp" ,  href:"https://uncodemy.com/course/data-science-machine-learning-using-python-training-course-in-noida", desc:"Master advanced analytics and machine learning techniques."}
        ]
      },
      {
        name: "Full Stack Development",
        courses: [
          {name:"Full Stack Development", image:"images/full stack development.webp" , href:"https://uncodemy.com/course/full-stack-development-training-course-in-noida", desc:"Front-end aur back-end dono covers."},
          {name:"Python", image:"images/python.webp" , href:"https://uncodemy.com/course/python-training-course-in-noida", desc:"Backend development ke liye versatile."},
          {name:"Java", image:"images/java.webp" , href:"https://uncodemy.com/course/java-training-course-in-noida", desc:"Robust applications ke liye industry standard."},
          {name:"Full Stack with Node.js", image:"images/ful stack with node.js.webp" , href:"https://uncodemy.com/course/full-stack-with-nodejs-training-course-in-noida", desc:"Scalable web applications banaye."},
          {name:"Java Full Stack Using ReactJS", image:"images/java full stack using react.webp" , href:"https://uncodemy.com/course/java-full-stack-using-react-training-course-in-noida", desc:"Modern web apps Java + React se."},
          {name:"Web Designing", image:"images/web designing.webp" , href:"https://uncodemy.com/course/web-designing-training-course-in-noida", desc:"Visually appealing user-friendly websites."},
          {name:"ReactJS", image:"images/react js.webp" , href:"https://uncodemy.com/course/react-js-training-course-in-noida", desc:"Dynamic user interfaces JavaScript se."},
          {name:"Angular", image:"images/angular.webp" , href:"https://uncodemy.com/course/angular-training-course-in-noida", desc:"Robust single-page applications."},
          {name:"MERN Stack", image:"images/mern1.webp" , href:"https://uncodemy.com/course/mern-stack-development-training-course-in-noida", desc:"MongoDB, Express, React, Node.js combo."}
        ]
      },
      {
        name: "Software Testing",
        courses: [
          {name:"Software Testing", image:"images/software-tsting.webp" , href:"https://uncodemy.com/course/software-testing-training-course-in-noida", desc:"Quality aur reliability sunishchit kare."},
          {name:"Manual Testing", image:"images/mannual testing.webp" , href:"https://uncodemy.com/course/manual-testing-course-in-noida", desc:"Hands-on testing se functionality verify."},
          {name:"Automation Testing", image:"images/automation testing.webp" , href:"https://uncodemy.com/course/automation-testing-course-in-noida", desc:"Automated tools se test cases execute."},
          {name:"ISTQB Training", image:"images/ISTQB training.webp" , href:"https://uncodemy.com/course/istqb-training-course-in-noida", desc:"International testing qualification prep."},
          {name:"Manual + Selenium", image:"images/mannual testing.webp" , href:"https://uncodemy.com/course/manual-selenium-training-course-in-noida", desc:"Manual aur automated skills ka combo."},
          {name:"Playwright Automation", image:"images/playwright-automation.webp" , href:"https://uncodemy.com/course/playwright-training-course-in-noida", desc:"Modern web apps ka automation."}
        ]
      },
      {
        name: "Cloud Tools",
        courses: [
          {name:"Amazon Web Services (AWS)", image:"images/AWS.webp" , href:"https://uncodemy.com/course/aws-training-course-in-noida", desc:"Comprehensive cloud computing solutions."},
          {name:"DevOps", image:"images/DevOps.webp" , href:"https://uncodemy.com/course/devops-training-course-in-noida", desc:"Dev aur operations teams ka collaboration."},
          {name:"Microsoft Azure", image:"images/MicrosoftAzure.webp" , href:"https://uncodemy.com/course/microsoft-azure-training-course-in-noida", desc:"Development, testing aur deployment support."},
          {name:"Cloud Computing", image:"images/cloud computing.webp" , href:"https://uncodemy.com/course/cloud-computing-training-course-in-noida", desc:"Scalable on-demand computing resources."},
          {name:"Salesforce", image:"images/salesforce.webp" , href:"https://uncodemy.com/course/salesforce-training-course-in-noida", desc:"Leading CRM platform ki training."}
        ]
      },
      {
        name: "SAP",
        courses: [
          {name:"SAP Training", image:"images/sap training.webp" ,  href:"https://uncodemy.com/course/sap-training-course-in-noida", desc:"ERP software solutions ki foundation."},
          {name:"SAP SD Training", image:"images/sap sd training.webp" ,  href:"https://uncodemy.com/course/sap-sd-training-course-in-noida", desc:"Sales aur distribution processes manage."},
          {name:"SAP SCM Training", image:"images/sap sm training.webp" ,  href:"https://uncodemy.com/course/sap-scm-training-course-in-noida", desc:"Supply chain management optimize kare."},
          {name:"SAP PP Training", image:"images/sap pp training.webp" ,  href:"https://uncodemy.com/course/sap-pp-training-course-in-noida", desc:"Production planning ERP me streamline."},
          {name:"SAP PM", image:"images/sap pm.webp" ,  href:"https://uncodemy.com/course/sap-pm-training-course-in-noida", desc:"Plant maintenance ERP environments me."},
          {name:"SAP MM", image:"images/sap mm.webp" ,  href:"https://uncodemy.com/course/sap-mm-training-course-in-noida", desc:"Materials management ERP systems me."},
          {name:"SAP FICO", image:"images/SAP fico.webp" ,  href:"https://uncodemy.com/course/sap-fico-training-course-in-noida", desc:"Finance aur controlling ERP me manage."}
        ]
      },
      {
        name: "Foreign Languages",
        courses: [
          {name:"Japanese Language", image:"images/japanese language.webp" , href:"https://uncodemy.com/course/japanese-language-course-in-noida", desc:"Fluency se career opportunities enhance."},
          {name:"German Language", image:"images/German language.webp" , href:"https://uncodemy.com/course/german-language-course-in-delhi", desc:"Proficiency se career prospects boost."},
          {name:"French Language", image:"images/french language.webp" , href:"https://uncodemy.com/course/french-language-course-in-noida", desc:"Global communication skills enhance."},
          {name:"Spanish Language", image:"images/spanish language.webp" , href:"https://uncodemy.com/course/spanish-language-course-in-noida", desc:"Career growth ke liye fluency."}
        ]
      },
      {
        name: "Project Management",
        courses: [
          {name:"PgMP Training",  image:"images/PGMP COURSE.webp" , href:"https://uncodemy.com/course/pgmp-training-course-in-noida", desc:"Program management certification skills."},
          {name:"PfMP Training",  image:"images/PFMP TRAINING.webp" , href:"https://uncodemy.com/course/pfmp-training-course-in-noida", desc:"Portfolio management certification prep."},
          {name:"PMP Training",  image:"images/PMP TRAINING.webp" , href:"https://uncodemy.com/course/pmp-training-course-in-noida", desc:"Exceptional project management education."},
          {name:"Scrum Master Training", image:"images/SCRUM MASTER.webp" ,  href:"https://uncodemy.com/course/scrum-master-training-course-in-noida", desc:"Agile project management ki taiyari."}
        ]
      },
      {
        name: "PG Programs",
        courses: [
          {name:"PG Program in Data Science",  image:"images/data-science.webp" , href:"https://uncodemy.com/course/pg-program-data-science", desc:"Data-driven decision-making master kare."},
          {name:"PG Program in Data Analyst",  image:"images/PG PROGRAM IN DA.webp" , href:"https://uncodemy.com/course/pg-program-data-analyst", desc:"Data skills se career boost kare."},
          {name:"PG Program in Software Testing",  image:"images/PG PROGRAM IN SOFTWARE TESTING.webp" , href:"https://uncodemy.com/course/pg-program-software-testing", desc:"Quality assurance master kare."},
          {name:"PG Program in Business Analyst", image:"images/AV BUSINESS ANALYST.webp" ,  href:"https://uncodemy.com/course/pg-program-business-analyst", desc:"Business analytics skills master kare."},
          {name:"PG Program in Digital Marketing",  image:"images/PG IN DIGITAL MARKETING.webp" , href:"https://uncodemy.com/course/pg-program-digital-marketing", desc:"SEO aur marketing strategy master kare."},
          {name:"PG Program in Automation Testing", image:"images/PG IN AUTOMATION TESTING.webp" ,  href:"https://uncodemy.com/course/pg-program-automation-testing", desc:"Automated testing master kare."},
          {name:"PG Program in Cyber Security",  image:"images/PG IN CYBER SECURITY.webp" ,  href:"https://uncodemy.com/course/pg-program-cyber-security", desc:"Digital security me expertise banaye."}
        ]
      }
    ];

    /* Badge colors — matched to the new brand palette:
       orange (accent), teal (secondary accent), indigo-blue (contrast) */
    var abhasuBadgeColors = ["#FF6A3D","#17B8A6","#5B6EE8"];

    var trigger   = document.getElementById('abhasuTrigger');
    var panel     = document.getElementById('abhasuPanel');
    var overlay   = document.getElementById('abhasuOverlay');
    var sidebar   = document.getElementById('abhasuSidebar');
    var grid      = document.getElementById('abhasuGrid');
    var titleEl   = document.getElementById('abhasuContentTitle');
    var subEl     = document.getElementById('abhasuContentSub');
    var closeBtn  = document.getElementById('abhasuClose');
    var activeIndex = 0;

    function abhasuInitials(name){
      var words = name.replace(/\(.*?\)/g,'').trim().split(/\s+/);
      var letters = words.slice(0,2).map(function(w){ return w[0]; }).join('');
      return letters.toUpperCase();
    }

    function abhasuBuildSidebar(){
      var eyebrow = document.createElement('div');
      eyebrow.className = 'abhay-abhasu-sidebar-eyebrow';
      eyebrow.textContent = 'Browse categories';
      sidebar.appendChild(eyebrow);

      abhasuCategories.forEach(function(cat, i){
        var btn = document.createElement('button');
        btn.className = 'abhay-abhasu-sidebar-item' + (i === activeIndex ? ' abhay-abhasu-active' : '');
        btn.setAttribute('role','menuitem');
        btn.innerHTML =
          '<span class="abhay-abhasu-sidebar-dot"></span>' +
          '<span>' + cat.name + '</span>' +
          '<span class="abhay-abhasu-sidebar-count">' + cat.courses.length + '</span>';
        btn.addEventListener('click', function(){ abhasuSetActive(i); });
        sidebar.appendChild(btn);
      });
    }

    function abhasuRenderGrid(cat){
      grid.innerHTML = '';
      titleEl.textContent = cat.name;
      subEl.textContent = cat.sub;
      cat.courses.forEach(function(course, idx){
        var a = document.createElement('a');
        a.className = 'abhay-abhasu-card';
        a.href = course.href;
        a.style.animationDelay = (idx * 18) + 'ms';
        var color = abhasuBadgeColors[idx % abhasuBadgeColors.length];
        a.innerHTML =
          '<div class="abhay-abhasu-card-top">' +
            // '<div class="abhay-abhasu-badge" style="background:' + color + '">' + abhasuInitials(course.name) + '</div>' +
          
          '<img class="abhay-abhasu-course-img" src="' + course.image + '" alt="' + course.name + '">' +
          '<div class="abhay-abhasu-card-title">' + course.name + '</div>' +

          '</div>' +
          '<p class="abhay-abhasu-card-desc">' + course.desc + '</p>' +
          '<span class="abhay-abhasu-card-cta">Know more</span>';
        grid.appendChild(a);
      });
    }

    function abhasuSetActive(i){
      activeIndex = i;
      var items = sidebar.querySelectorAll('.abhay-abhasu-sidebar-item');
      items.forEach(function(el, idx){
        el.classList.toggle('abhay-abhasu-active', idx === i);
      });
      abhasuRenderGrid(abhasuCategories[i]);
    }

    function abhasuOpen(){
      panel.classList.add('abhay-abhasu-open');
      overlay.classList.add('abhay-abhasu-open');
      trigger.setAttribute('aria-expanded','true');
    }
    function abhasuCloseMenu(){
      panel.classList.remove('abhay-abhasu-open');
      overlay.classList.remove('abhay-abhasu-open');
      trigger.setAttribute('aria-expanded','false');
    }

    trigger.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = panel.classList.contains('abhay-abhasu-open');
      isOpen ? abhasuCloseMenu() : abhasuOpen();
    });
    overlay.addEventListener('click', abhasuCloseMenu);
    closeBtn.addEventListener('click', abhasuCloseMenu);
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') abhasuCloseMenu();
    });
    document.addEventListener('click', function(e){
      if(!panel.contains(e.target) && !trigger.contains(e.target)){
        abhasuCloseMenu();
      }
    });

    abhasuBuildSidebar();
    abhasuRenderGrid(abhasuCategories[activeIndex]);




    // TRAINING DD



  
   const popup = document.getElementById("popup");

  const btn = document.getElementById("trainingBtn");

  const close = popup ? popup.querySelector(".abhay-close") : null;

  if (btn && popup) {
    btn.addEventListener("click", function(e){

        e.preventDefault();

        popup.classList.add("abhay-active");

    });
  }

  if (close && popup) {
    close.addEventListener("click", function(){

        popup.classList.remove("abhay-active");

    });
  }

  window.addEventListener("click", function(e){

      if(popup && e.target==popup){

          popup.classList.remove("abhay-active");

      }

  });

    // claude-changes: about-popup start (same pattern as TRAINING DD above)

    const popupAbout = document.getElementById("popupAbout");

    const aboutBtn = document.getElementById("aboutBtn");

    const aboutClose = document.getElementById("aboutClose");

    if (aboutBtn && popupAbout) {
      aboutBtn.addEventListener("click", function(e){

          e.preventDefault();

          popupAbout.classList.add("abhay-active");

      });
    }

    if (aboutClose && popupAbout) {
      aboutClose.addEventListener("click", function(){

          popupAbout.classList.remove("abhay-active");

      });
    }

    window.addEventListener("click", function(e){

        if(popupAbout && e.target==popupAbout){

            popupAbout.classList.remove("abhay-active");

        }

    });

    // claude-changes: about-popup end
  })();
  }

  function defineNavbarElement() {
    if (customElements.get("uncodemy-navbar")) return;

    customElements.define(
      "uncodemy-navbar",
      class extends HTMLElement {
        connectedCallback() {
          ensureStylesLoaded();
          this.innerHTML = NAVBAR_HTML;
          // Run after the markup is in the DOM so getElementById/querySelector calls resolve.
          initNavbarBehavior();
        }
      }
    );
  }

  // Most pages on this site do NOT use the <uncodemy-navbar></uncodemy-navbar>
  // custom element — they already have the header markup pasted directly into
  // the page's <body>. In that case initNavbarBehavior() was never being
  // called at all (it only ran from connectedCallback above), so the whole
  // navbar — mobile menu, courses mega-menu, dropdowns, training/about
  // popups — looked "dead". This wires the same behavior up to that existing
  // static markup as soon as the DOM is ready.
  function initExistingStaticNavbar() {
    var alreadyUsesCustomElement = document.querySelector("uncodemy-navbar");
    var hasStaticHeader = document.querySelector(".abhay-site-header");
    if (hasStaticHeader && !alreadyUsesCustomElement) {
      initNavbarBehavior();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExistingStaticNavbar);
  } else {
    initExistingStaticNavbar();
  }

  defineNavbarElement();
})();
