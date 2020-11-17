import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.text};
    box-shadow: color: ${({ theme }) => theme.text};
  }

  a:hover {
    color: ${({ theme }) => theme.text};
    opacity:1;
  }

  .cool-link {
    margin-top:5rem;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.text}
  }
  
  .cool-link:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.text}
  }
  
  .cool-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.text};
    transition: width .3s;
  }

  .cool-link:hover::after {
    width: 100%;
  }
  
  svg {
    fill:${({ theme }) => theme.color};
  }`