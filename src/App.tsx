import React, { useState } from "react";
import "./App.css";
import SearchBar from "../src/Components/SearchBarComponent/SearchBar";
import MediaGrid from "../src/Components/MediaGridComponent/MediaGrid";
import { IUserInput } from "./Common/interfaces";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
    StartDate: new Date("2014-08-18T21:11:54"),
    EndDate: new Date("2018-08-18T21:11:54"),
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
        <MediaGrid
          SearchQuery={UserInput.SearchQuery}
        />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
