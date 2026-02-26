// ============================================
// EMAILJS CONFIGURATION
// ============================================
// Get your credentials from https://www.emailjs.com/
// After registration, you'll get:
// 1. Service ID (e.g., 'service_abc123')
// 2. Template ID (e.g., 'template_xyz789')
// 3. Public Key (e.g., 'AbCdEfGhIjKlMnOp')

const EMAILJS_CONFIG = {
  serviceID: "service_mcyl7ok",
  templateID: "template_52g1ofp",
  publicKey: "l53WEUL5uowmx0_X7",
};

const USE_DEMO_MODE = false; // Set to true to simulate form submission without sending real emails

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal when clicking outside
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal.id);
    }
  });
});

// Close modals with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      closeModal(modal.id);
    });
  }
});

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
const contactForm = document.getElementById("contactForm");
const submitButton = contactForm.querySelector(".btn-submit");

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Show loader
  submitButton.classList.add("loading");
  submitButton.disabled = true;

  try {
    if (USE_DEMO_MODE) {
      // Demo mode - simulate sending
      await simulateFormSubmission(formData);
    } else {
      // Real mode - use EmailJS
      await sendEmailWithEmailJS(formData);
    }

    // Success - show success modal
    submitButton.classList.remove("loading");
    submitButton.disabled = false;
    openModal("successModal");
    contactForm.reset();
  } catch (error) {
    // Error - show error modal
    submitButton.classList.remove("loading");
    submitButton.disabled = false;

    // Set error message
    const errorMessageEl = document.getElementById("errorMessage");
    if (error.message) {
      errorMessageEl.textContent = error.message;
    }

    openModal("errorModal");
    console.error("Form submission error:", error);
  }
});

// ============================================
// EMAIL SENDING METHODS
// ============================================

/**
 * Send email using EmailJS service
 * @param {Object} formData - Form data with name, email, message
 */
async function sendEmailWithEmailJS(formData) {
  // Check if EmailJS is loaded
  if (typeof emailjs === "undefined") {
    throw new Error(
      "EmailJS is not loaded. Please check your internet connection and try again.",
    );
  }

  // Check if credentials are set
  if (
    EMAILJS_CONFIG.serviceID === "YOUR_SERVICE_ID" ||
    EMAILJS_CONFIG.templateID === "YOUR_TEMPLATE_ID"
  ) {
    throw new Error(
      "EmailJS is not configured. Please set your Service ID and Template ID in script.js",
    );
  }

  // Prepare template parameters
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: "Maksym",
    reply_to: formData.email,
  };

  try {
    console.log("📧 Sending email via EmailJS...");

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams,
    );

    console.log("✅ Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("❌ EmailJS error:", error);

    // Provide user-friendly error messages
    if (error.text) {
      throw new Error(`Failed to send email: ${error.text}`);
    } else {
      throw new Error(
        "Failed to send email. Please try again or contact me directly via email.",
      );
    }
  }
}

/**
 * Simulate form submission (for demo/testing purposes)
 * @param {Object} formData - Form data with name, email, message
 */
async function simulateFormSubmission(formData) {
  console.log("⚠️ DEMO MODE: Form data would be sent:", formData);
  console.log("⚠️ To send real emails:");
  console.log("   1. Sign up at https://www.emailjs.com/");
  console.log("   2. Get your Service ID, Template ID, and Public Key");
  console.log("   3. Update EMAILJS_CONFIG in script.js");
  console.log("   4. Set USE_DEMO_MODE = false");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate 80% success rate
      const success = Math.random() > 0.2;

      if (success) {
        console.log("✅ Simulated success");
        resolve({ success: true, message: "Message sent successfully" });
      } else {
        console.log("❌ Simulated error");
        reject(
          new Error(
            "Simulated network error. Please check your connection and try again.",
          ),
        );
      }
    }, 2000); // 2 second delay
  });
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});