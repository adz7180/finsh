const freeLifetimeAccounts = [
  'adamhaymour@gmail.com',
  'rockwellestatehomes@yahoo.ca'
];

export default function authGuard(to, from, next) {
  const isSubscribed = localStorage.getItem('subscribed') === 'true';
  const userEmail = localStorage.getItem('userEmail');
  const hasLifetimeAccess = freeLifetimeAccounts.includes(userEmail);
  
  if (isSubscribed || hasLifetimeAccess || 
      to.name === 'PaymentScreen' || 
      to.name === 'ExplorePreview' ||
      to.name === 'Home') {
    next();
  } else {
    next({ name: 'PaymentScreen' });
  }
}
