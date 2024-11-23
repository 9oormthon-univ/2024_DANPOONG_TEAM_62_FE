import './App.css';
import { RouterProvider} from "react-router-dom";
import router from './routes/router';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <>
    <UserProvider> 
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <RouterProvider router={router} />
      </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
