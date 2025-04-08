document.addEventListener("DOMContentLoaded", function() {
    
    alert("Welcome to Birat Roka's Portfolio!");
    
 
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
   
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    if (hamburger) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }
    
   
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function() {
            if (hamburger && hamburger.classList.contains("active")) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });
    
   
    const hoverElements = {
        ".hero-title": {
            original: document.querySelector(".hero-title") ? document.querySelector(".hero-title").innerHTML : "",
            hover: "Let's Build Something Amazing Together!"
        },
        ".btn.primary": {
            original: document.querySelector(".btn.primary") ? document.querySelector(".btn.primary").innerHTML : "",
            hover: "Click Me!"
        },
        ".section-title": {
            original: document.querySelector(".section-title") ? document.querySelector(".section-title").innerHTML : "",
            hover: "Explore My Work"
        }
    };
    
  
    for (const selector in hoverElements) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener("mouseenter", function() {
                this.innerHTML = hoverElements[selector].hover;
            });
            
            element.addEventListener("mouseleave", function() {
                this.innerHTML = hoverElements[selector].original;
            });
        }
    }
    
   
    document.querySelectorAll("a[href='contact.html']").forEach(link => {
        link.addEventListener("click", function(event) {
            const confirmation = confirm("Are you sure you want to go to the contact page?");
            if (!confirmation) {
                event.preventDefault();
            }
        });
    });
    
 
    const progressBars = document.querySelectorAll(".progress-bar");
    
    if (progressBars.length > 0) {
        const animateProgressBars = function() {
            progressBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                const isInViewport = (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
                
                if (isInViewport) {
                    const progress = bar.getAttribute("data-progress");
                    bar.style.width = progress + "%";
                }
            });
        };
        
        
        animateProgressBars();
        
       
        window.addEventListener("scroll", animateProgressBars);
    }
    
    
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                
                filterBtns.forEach(b => b.classList.remove("active"));
                
                
                this.classList.add("active");
                
                const filter = this.getAttribute("data-filter");
                
                projectCards.forEach(card => {
                    if (filter === "all" || card.getAttribute("data-category") === filter) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }
    
  
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");
            const formStatus = document.getElementById("form-status");
            
            
            let isValid = true;
            
            
            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                alert("Please fill in all fields.");
                isValid = false;
            }
            
            
            if (isValid) {
                
                alert("Thank you for your message! I'll get back to you shortly.");
                
                
                contactForm.reset();
            }
        });
    }
});