import { Box, Typography, Badge } from "@mui/material";
import { LANGUAGES } from "components/contants/theme";
import T from "T";

const Languages = () => {
    return (
        <Box color="white" p="16px 16px 0">
            <Typography variant="body2">
                {T.LANGUAGES}
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
                    LANGUAGES.map(language => <Box key={language} display="flex">
                        <Badge variant="dot" />
                        <Typography fontSize={13} ml={1.5}>{language}</Typography>
                    </Box>)
                }
            </Box>
        </Box>
    )
}
export default Languages;