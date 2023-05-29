import { createGlobalStyle, css } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  body {
        
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    color: #333;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 
    #root {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      height: 100%;
    }

  }
  
  h1 {
    font-size: 24px;
  }
  
  h2 {
    font-size: 18px;
  }
  
  a{
    color: #5282FF;
    
    :hover{ 
      color: #789EFF;
    }
    :active{
      color: #336CFF;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    -webkit-background-clip: text;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  
  small, p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const OverFlowWithoutScrollbar = css`
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari and Opera */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const NoSelect = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
