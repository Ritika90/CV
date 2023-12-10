import Grid from "@mui/material/Grid";
import InfoModal from "components/modal/InfoModal";
import DarkTheme from "./DarkTheme";
import LightTheme from "./LightTheme";

const Themes = () => {
  return (
    <>
      <Grid container margin="auto" p={4}>
        <DarkTheme />
        <LightTheme />
      </Grid>
      <InfoModal />
    </>
    
  );
}

export default Themes;