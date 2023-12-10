import { Box, Typography, Badge } from "@mui/material";
import T from "T";

const Skills = () => {
    return (
        <Box color="white" p="16px 16px 0">
            <Typography variant="body2">
                {T.SKILLS}
            </Typography>

            <Box sx={{
                '& .MuiBadge-badge': {
                    background: 'white',
                    minWidth: 5,
                    height: 5,
                    marginTop: 1.2,
                }
            }} m={1}>
                {
                    ['ReactJS', 'Ruby on Rails', 'JavaScript', 'JQuery', 'HTML', 'CSS', 'Material UI', 'Bootstrap', 'Foundation', 'MySQL', 'Postgres', 'SQLite', 'Agile\Scrum SDLCs', 'GIT', 'Postman', 'Confluence', 'Jira'].map(skill => <Box key={skill} display="flex">
                        <Badge variant="dot" />
                        <Typography fontSize={13} ml={1.5}>{skill}</Typography>
                    </Box>)
                }
            </Box>
        </Box>
    )
}

export default Skills;