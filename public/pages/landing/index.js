import { navigateWithTokenCheck } from '/src/scripts/utils';

const signInAnchor = document.querySelector('.gnb__signin');
const signUpAnchor = document.querySelector('.hero__signup');

signInAnchor.addEventListener('click', (e) => {
  e.preventDefault();
  navigateWithTokenCheck('/pages/auth/signin/index.html');
});

signUpAnchor.addEventListener('click', (e) => {
  e.preventDefault();
  navigateWithTokenCheck('/pages/auth/signup/index.html');
});
