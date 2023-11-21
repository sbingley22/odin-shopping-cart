import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders headline', () => {
    render(
        <Router>
          <App />
        </Router>
        );
    
    const headlineElement = screen.getByText('MetaboFix');
    
    expect(headlineElement).toBeInTheDocument();
  });
});


describe('App', () => {
    it('navigates to the "Home" page', () => {
      render(
        <Router>
          <App />
        </Router>
      );
  
      const homeLink = screen.getByText('Home');
      fireEvent.click(homeLink);
  
      const homePageHeader = screen.getByText('Home');
      expect(homePageHeader).toBeInTheDocument();
    });
  
    it('navigates to the "Shop" page', () => {
      render(
        <Router>
          <App />
        </Router>
      );
  
      const shopLink = screen.getByText('Shop');
      fireEvent.click(shopLink);
  
  
      const shopPageHeader = screen.getByText('Shop');
      expect(shopPageHeader).toBeInTheDocument();
    });
  });