import { Box, Typography, Link } from "@mui/material";
import { Phone, Mail, LocationOn, LinkedIn, CalendarToday } from '@mui/icons-material';
import { USER_ADDRESS, USER_EMAIL_ADDRESS, USER_LINKEDIN_URL, USER_MOBILE_NUMBER } from "components/contants/theme";

const PersonalInfo = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const formattedDate = currentDate.toLocaleDateString('en-US'); // You can specify the desired locale
    return (
        <Box p={2}>
            <Box display="flex" color="white" alignItems="center">
                <Phone fontSize="12" />
                <Typography ml={1} fontSize={13}>
                    { process.env.REACT_APP_MOBILE_NUMBER || USER_MOBILE_NUMBER}
                </Typography>
            </Box>
            <Box display="flex" color="white" alignItems="center" mt={1}>
                <Mail fontSize="12" />
                <Typography ml={1} fontSize={13} noWrap>
                    { process.env.REACT_APP_EMAIL_ADDRESS || USER_EMAIL_ADDRESS}
                </Typography>
            </Box>
            <Box display="flex" color="white" alignItems="center" mt={1}>
                <LinkedIn fontSize="12" />
                <Link href={ `https://www.${ process.env.REACT_APP_LINKEDIN || USER_LINKEDIN_URL}`} target="_blank" sx={{ textDecoration: 'auto', color: 'white' }}>
                    <Typography ml={1} fontSize={13} noWrap>
                        { process.env.REACT_APP_LINKEDIN || USER_LINKEDIN_URL }
                    </Typography>
                </Link>
            </Box>
            <Box display="flex" color="white" alignItems="center" mt={1}>
                <LocationOn fontSize="12" />
                <Typography ml={1} fontSize={13}>
                    { process.env.REACT_APP_ADDRESS || USER_ADDRESS}
                </Typography>
            </Box>
            <Box display="flex" color="white" alignItems="center" mt={1}>
                <CalendarToday sx={{ width: 14, height: 14 }} />
                <Typography ml={1} fontSize={13}>
                    { formattedDate }
                </Typography>
            </Box>
        </Box>  
    )
}

export default PersonalInfo;