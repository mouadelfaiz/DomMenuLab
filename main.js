// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
const maiEl = document.querySelector("main")

maiEl.style.backgroundColor = "var(--main-bg)"

maiEl.innerHTML = "<h1>SEI Rocks!</h1>"

maiEl.classList.add("flex-ctr")

const topMenuEl = document.querySelector("#top-menu")

topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"


topMenuEl.classList.add("flex-around")

menuLinks.forEach((element) => {
    const alink = document.createElement("a");
    alink.setAttribute("href", element.href);
    alink.innerText = element.text;
    topMenuEl.appendChild(alink);
})

const subMenuEl = document.querySelector("#sub-menu")

subMenuEl.style.height = "100%"

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

subMenuEl.classList.add("flex-around")

subMenuEl.style.position = "absolute"

subMenuEl.style.top = "0"

const topMenuLinks = document.querySelectorAll("a")

showingSubMenu = false;

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault()
  console.log(event.target.tagName)

  topMenuLinks.forEach(link => {
    if (link.textContent !== event.target.textContent) {
      link.classList.remove("active")
      showingSubMenu = false;
      subMenuEl.style.top = "0";
    } else {
      link.classList.add("active")
    }
  })
  menuLinks.forEach(element => {
    if (element.text !== "about") {
      showingSubMenu = true 
    } else {
      showingSubMenu = false
    }
  })
}
)
function buildSubMenu(subLinksArray) {
  subMenuEl.innerHTML = '';

  subLinksArray.forEach(linkObj => {
    const subLink = document.createElement('a');
    subLink.setAttribute('href', linkObj.href);
    subLink.textContent = linkObj.text;
    subMenuEl.appendChild(subLink);
  });
}
subMenuEl.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.tagName !== 'A') return;
  console.log(event.target.textContent); 
});
subMenuEl.addEventListener('click', event => {
  event.preventDefault(); 

  if (event.target.tagName !== 'A') return;

  showingSubMenu = false;
  subMenuEl.style.top = '0';

  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  });

  const clickedLinkText = event.target.textContent;
  maiEl.innerHTML = `<h1>${clickedLinkText}</h1>`;

  if (clickedLinkText === 'about') {
    maiEl.innerHTML = '<h1>about</h1>';
  }
});
