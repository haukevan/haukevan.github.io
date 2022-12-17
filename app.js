
const sections = document.querySelectorAll('[data-section]');
const videos = document.querySelector('.cliff');

//nav button click elements
const navBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const hambBtn = document.querySelector('.hamb-btn');
const xBtn = document.querySelector('.x-btn');


//takes callback function
const changeNavSec = (entries, options) => {
  entries.forEach((entry) => {
    console.log(entry.target.getAttribute('id'))

    const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0.55) {
        if (id == 'Photography' || id == 'Videography') {
          document.querySelector('[href="#Explore"]').parentElement.classList.add('active');
        }

        //activate nav button to add background
        document.querySelector(`a[href="#${id}"]`).parentElement.classList.add('active');

        //add items to section view
        entry.target.classList.add('show');

      } else {

        if (id == 'Photography' || id == 'Videography') {
          document.querySelector('[href="#Explore"]').parentElement.classList.remove('active');
        }

        //remove nav button for background
        document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove('active');

        //remove items from section view
        entry.target.classList.remove('show');

      }
  });
};

const options = {
  threshold: 0.55
}

const observer = new IntersectionObserver(changeNavSec, options);

/* Set our observer to observe each section */
sections.forEach((section) => {
  observer.observe(section)
})



//nav btn click open and close menu
navBtn.addEventListener('click', () => {
  showHideMenu();
})

function showHideMenu() {
  //change aria-expanded from true to false when hamburger is clicked
  navLinks.classList.add('activated');

  //will give us true or false for expanded
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));

  //set to oposite of what isExpanded is
  navBtn.setAttribute('aria-expanded', !isExpanded);

  //set background to on behind menu
  !isExpanded && nav.classList.add('active');

  if (!isExpanded) {
    hambBtn.style.display = 'none';
    xBtn.style.display = 'block';
  } else {
    hambBtn.style.display = 'block';
    xBtn.style.display = 'none';
  }

}
