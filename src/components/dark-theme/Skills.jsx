import { Box, Typography, Badge } from "@mui/material";
import { SKILLS } from "components/contants/theme";
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
                    SKILLS.map(skill => <Box key={skill} display="flex">
                        <Badge variant="dot" />
                        <Typography fontSize={13} ml={1.5}>{skill}</Typography>
                    </Box>)
                }
            </Box>
        </Box>
    )
}

export default Skills;