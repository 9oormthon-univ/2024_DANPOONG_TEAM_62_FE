import './App.css';
import { RouterProvider} from "react-router-dom";
import router from './routes/router';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
