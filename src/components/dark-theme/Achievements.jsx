import { Box, Typography, Badge } from "@mui/material";
import { ACHIEVEMENTS } from "components/contants/theme";
import T from "T";

const Achievements = () => {
    return (
        <Box color="white" p="16px 16px 0">
            <Typography variant="body2">
                {T.ACHIEVEMENTS}
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
                    ACHIEVEMENTS.map(achievement => <Box key={achievement} display="flex">
                        <Badge variant="dot" />
                        <Typography fontSize={13} ml={1.5}>{achievement}</Typography>
                    </Box>)
                }
            </Box>
        </Box> 
    )
}

export default Achievements;