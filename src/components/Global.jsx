import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.text};
    box-shadow: color: ${({ theme }) => theme.color};
  }

  a:hover {
    color: ${({ theme }) => theme.color};
    opacity:1;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border:0;
    border-top:1px solid ${({ theme }) => theme.color};
    opacity:0.1;
  }

  .cool-link {
    margin-top:5rem;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.color}

    @include respond(phone) {
      text-decoration: underline;
    }
  }
  
  .cool-link:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.color}
  }
  
  .cool-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.color};
    transition: width .3s;
  }

  .cool-link:hover::after {
    width: 100%;
  }
  
  .btn-contact {
    padding:1rem 2rem;
    border-radius:80px;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.color};
  } 

  svg {
    fill: ${({ theme }) => theme.color};
    stroke: ${({ theme }) => theme.color};
  }`