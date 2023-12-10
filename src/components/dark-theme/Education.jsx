import { Box, Typography, Tooltip, Badge } from "@mui/material";
import { COLLEGE_EDUCATION, SCHOOL_EDUCATION } from "components/contants/theme";
import T from "T";

const Education = () => {
    return (
        <Box color="white" p="16px 16px 0">
            <Typography variant="body2">
                {T.EDUCATION}
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
                    COLLEGE_EDUCATION.map(education =>
                        <Tooltip title="Eternal University" placement="top" sx={{ cursor: 'pointer' }} key={education}>
                            <Box display="flex">
                                <Badge variant="dot" />
                                <Typography fontSize={13} ml={1.5}>{education}</Typography>
                            </Box>
                        </Tooltip>
                    )
                }

                {
                    SCHOOL_EDUCATION.map(education =>
                        <Tooltip title="Sr. Sec. Model School" placement="top" sx={{ cursor: 'pointer' }} key={education}>
                            <Box display="flex">
                                <Badge variant="dot" />
                                <Typography fontSize={13} ml={1.5}>{education}</Typography>
                            </Box>
                        </Tooltip>
                    )
                }
            </Box>
        </Box>
    )
}

export default Education;