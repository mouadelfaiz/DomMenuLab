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
// Task 1.0
const mainEl = document.querySelector('main');

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3
mainEl.classList.add('flex-ctr');

// Task 2.0
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1
topMenuEl.style.height = '100%';

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');

// Task 3.0
/*var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
*/
// Task 3.1
menuLinks.forEach((link) => {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

// Task 4.0
const subMenuEl = document.querySelector('#sub-menu');

// Task 4.1
subMenuEl.style.height = '100%';

// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
subMenuEl.classList.add('flex-around');

// Task 4.4
subMenuEl.style.position = 'absolute';

// Task 4.5
subMenuEl.style.top = '0';

// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (event.target.tagName !== 'A') return;

  console.log(event.target.textContent);

  topMenuLinks.forEach((link) => {
    link.classList.remove('active');
  });

  const clickedLink = event.target;

  if (clickedLink.classList.contains('active')) {
    clickedLink.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  clickedLink.classList.add('active');

  if (clickedLink.textContent === 'about') {
    showingSubMenu = false;
    subMenuEl.style.top = '0';
  } else {
    showingSubMenu = true;
    buildSubMenu(menuLinks.find((link) => link.text === clickedLink.textContent)?.subLinks || []);
    subMenuEl.style.top = '100%';
  }
});

// Task 5.8
function buildSubMenu(subLinksArray) {
  subMenuEl.innerHTML = '';
  
  subLinksArray.forEach((linkObj) => {
    const subLink = document.createElement('a');
    subLink.setAttribute('href', linkObj.href);
    subLink.textContent = linkObj.text;
    subMenuEl.appendChild(subLink);
  });
}

// Task 6.0
subMenuEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName !== 'A') return;

  showingSubMenu = false;
  subMenuEl.style.top = '0';

  topMenuLinks.forEach((link) => {
    link.classList.remove('active');
  });

  const clickedLinkText = event.target.textContent;
  mainEl.innerHTML = `<h1>${clickedLinkText}</h1>`;

  if (clickedLinkText === 'about') {
    mainEl.innerHTML = '<h1>about</h1>';
  }
});
