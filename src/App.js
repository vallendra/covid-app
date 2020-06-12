import React from "react";
import "./App.css";
import CovidCard from "./components/CovidCard";
import Header from "./components/Header";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Struktur data yang akan digunakan
// const data = [
//   {
//     newConfirmed: 255,
//     totalConfirmed: 255,
//     totalDeaths: 255,
//     countryID: "CA",
//     countryName: "Canada",
//   },
// ];

// Komponen untuk me-render CovidCard dari daftar negara
const NationLists = ({ lists }) => {
  return lists.map((list, index) => (
    <CovidCard
      newConfirmed={list.newConfirmed}
      totalConfirmed={list.totalConfirmed}
      totalDeaths={list.totalDeaths}
      countryID={list.countryID}
      countryName={list.countryName}
      key={index}
    />
  ));
};

// Nilai tema yang akan diakses oleh setiap komponen material-ui
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

//Aplikasi utama kita
const CovidApp = () => {
  const [lists, setLists] = React.useState([]);

  React.useEffect(() => {
    const url = "https://api.covid19api.com/summary";
    fetch(url).then(response => response.json()).then(result => {
      const countries = result.Countries;
      for (let i = 0; i < countries.length; i++) {
        if (i === 10) break;
        const newItem = {
          newConfirmed: countries[i].NewConfirmed,
          totalConfirmed: countries[i].TotalConfirmed,
          totalDeaths: countries[i].TotalDeaths,
          countryID: countries[i].CountryCode,
          countryName: countries[i].Country,
        }
        setLists(prevLists => [...prevLists, newItem]);
      }
    })
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <NationLists lists={lists} />
    </div>
  );
};

function App() {
  // Kita sertakan Provider kita dengan value theme yang akan dipassing,
  // agar komponen didalamnya bisa mengakses value tersebut.
  return (
    <ThemeProvider theme={theme}>
      <CovidApp />
    </ThemeProvider>
  );
}

export default App;
