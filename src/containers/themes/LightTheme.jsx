import { Typography, Grid } from "@mui/material";
import { USER_DESIGNATION, USER_NAME } from "components/contants/theme";
import { Experience, Projects } from "components/light-theme";
import T from "T";

const LightTheme = () => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={9} bgcolor="white" p={4} sx={{
            borderBottomRightRadius: '10px',
            borderTopRightRadius: '10px'
        }}>
            <Typography variant="h3">{process.env.REACT_APP_NAME || USER_NAME}</Typography>
            <Typography variant="h6" mt={2} fontWeight={600}>{process.env.REACT_APP_DESIGNATION || USER_DESIGNATION}</Typography>
            <Typography variant="subtitle2" mt={2}>{T.INTRO}</Typography>
            <Experience />
            <Projects />
        </Grid>
    )
}

export default LightTheme;