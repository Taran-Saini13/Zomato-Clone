// ===== Simple Search Bar Animation =====
const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
    searchInput.setAttribute("placeholder", "Type to search...");
});

searchInput.addEventListener("blur", () => {
    searchInput.setAttribute("placeholder", "Search for restaurants, cuisine or dishes");
});

// ===== Logo Bounce Animation on Load =====
window.addEventListener("load", () => {
    const logo = document.querySelector("main img");
    logo.style.transition = "transform 0.6s ease";
    logo.style.transform = "scale(1.1)";
    setTimeout(() => {
        logo.style.transform = "scale(1)";
    }, 600);
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

const animatedItems = document.querySelectorAll('.burger, .momos, .pizza, .leaf, .tomato-left, .tomato-right');

function runInAnimation() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom && !item.classList.contains('animated')) {
            item.classList.add('animated'); 
        }
    });
}

window.addEventListener('scroll', runInAnimation);
window.addEventListener('load', runInAnimation);

const collectionCards = document.querySelectorAll('.collection-card');

function animateCollections() {
    const triggerBottom = window.innerHeight * 0.85;

    collectionCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('scroll-animate');
        }
    });
}

window.addEventListener('scroll', animateCollections);
window.addEventListener('load', animateCollections);

// ===== Reveal food-delivery section & animate burgers =====
document.addEventListener("DOMContentLoaded", () => {
    const foodSection = document.querySelector(".food-delivery");
    const burgers = document.querySelectorAll(".burger");

    function revealOnScroll() {
        const sectionTop = foodSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            foodSection.classList.add("visible");

            // Animate burgers when section becomes visible
            burgers.forEach(burger => {
                burger.style.transition = "all 1s ease";
                burger.style.opacity = "1";
            });

            window.removeEventListener("scroll", revealOnScroll); 
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});

// ===== Live Restaurant Search Suggestion System =====

// Example data (it can be replace with API or JSON )
const restaurantData = [
    "Burger King",
    "Pizza Hut",
    "Domino’s",
    "Subway",
    "Biryani Blues",
    "Tandoori Treats",
    "Momo Magic",
    "Sushi Hub",
    "The Pasta Point",
    "Veggie Delight",
    "Café Coffee Day",
    "Barbeque Nation",
    "Chinese Wok",
    "Oven Story Pizza",
    "Wow! Momo",
    "Cream Stone",
    "Haldiram’s",
    "Behrouz Biryani",
    "Punjabi Rasoi",
    "South Spice"
];

const searchInputBox = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");

// Show suggestions as user types
searchInputBox.addEventListener("input", () => {
    const inputVal = searchInputBox.value.toLowerCase().trim();
    suggestionsList.innerHTML = ""; // Clear previous

    if (inputVal === "") {
        suggestionsList.style.display = "none";
        return;
    }

    // Filter results
    const filtered = restaurantData.filter(name => name.toLowerCase().includes(inputVal));

    if (filtered.length > 0) {
        filtered.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.innerHTML = `<li>No results found</li>`;
        suggestionsList.style.display = "block";
    }
});

// Handle click on suggestion
suggestionsList.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        searchInputBox.value = e.target.textContent;
        suggestionsList.style.display = "none";
    }
});

// Hide suggestions when clicked outside
document.addEventListener("click", e => {
    if (!e.target.closest(".search-box")) {
        suggestionsList.style.display = "none";
    }
});

// ===== Parallax Scrolling Background Effect =====
window.addEventListener("scroll", () => {
  const parallaxSections = document.querySelectorAll("[data-parallax]");
  const scrollY = window.scrollY;

  parallaxSections.forEach(section => {
    const speed = parseFloat(section.dataset.parallax);
    section.style.backgroundPositionY = -(scrollY * speed) + "px";
  });
});

const elements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); 
    }
  });
},{
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));


