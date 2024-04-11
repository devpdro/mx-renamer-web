import { ThemeProvider } from "styled-components";

import { Navbar } from "../presentation/components/Common";
import { Header, Manager } from "../presentation/components/Layout";

import theme from "../styles/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header />
      <Manager />
    </ThemeProvider>
  );
};

export default Home;
