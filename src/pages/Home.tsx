import { ThemeProvider } from "styled-components";

import { Navbar } from "../presentation/components/Common";
import { Header } from "../presentation/components/Layout";

import theme from '../styles/theme'

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header />
    </ThemeProvider>
  );
};

export default Home;
