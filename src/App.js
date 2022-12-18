import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from ".//Styles/Themes.Styles";
import { GlobalStyles } from ".//Styles/Global.Styles";
import { useDarkMode } from ".//Hooks/DarkMode";
import { Fireflies } from ".//Components/Fireflies/Fireflies";
import { NavBar } from ".//Components/NavBar/NavBar";
import { Profile } from ".//Components/Profile/Profile";
import { Work } from "./Components/MyWork/MyWork";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <Fireflies />
      <GlobalStyles />
      <NavBar theme={theme} toggleTheme={themeToggler} />
      <Profile />
      <Work />
    </ThemeProvider>
  );
}

export default App;