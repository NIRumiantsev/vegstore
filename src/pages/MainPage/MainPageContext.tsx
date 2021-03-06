import React from 'react';

const MainPageContext = React.createContext({
  navigationClosed: false,
  currentPromo: [{name: '', cover: '', price: '', volume: ''}],
  currentSlides: [''],
  headerCircleRotation: 0,
  toggleNavigation: () => {},
  rotateHeaderCircle: () => {},
  getMainPageMedia: () => {},
  mediaLoading: true,
});

export default MainPageContext;