import { Box, Typography, Badge } from "@mui/material";
import { STRENGTHS } from "components/contants/theme";
import T from "T";

const Strengths = () => {
    return (
        <Box color="white" p={2}>
            <Typography variant="body2">
                {T.STRENGTHS}
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
                    STRENGTHS.map(strength => <Box key={strength} display="flex">
                        <Badge variant="dot" />
                        <Typography fontSize={13} ml={1.5}>{strength}</Typography>
                    </Box>)
                }
            </Box>
        </Box>
    )
}

export default Strengths;