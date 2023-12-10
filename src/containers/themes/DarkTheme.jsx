import Grid from "@mui/material/Grid";

import { ProfilePic, PersonalInfo, Skills, Education, Achievements, Strengths, Languages } from 'components/dark-theme'

const DarkTheme = () => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={3} bgcolor="black" sx={{
            borderBottomLeftRadius: '10px',
            borderTopLeftRadius: '10px'
        }}>
            <ProfilePic />
            <PersonalInfo />
            <Skills />
            <Education />
            <Languages />
            <Achievements />
            <Strengths />
        </Grid >
    )
}

export default DarkTheme;