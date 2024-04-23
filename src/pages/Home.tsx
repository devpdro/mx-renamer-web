import { ThemeProvider } from "styled-components";

import { Navbar, Footer } from "../presentation/components/Common";
import { Header, Manager, Faq } from "../presentation/components/Layout";

import theme from "../styles/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header />
      <Manager />
      <Faq />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
