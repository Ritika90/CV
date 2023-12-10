import Box from "@mui/material/Box";

const ProfilePic = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Box
                component="img"
                sx={{
                    height: 350,
                    overflow: 'hidden',
                    maxHeight: { xs: 350, md: 250 },
                }}
                alt="user img"
                src="user.png"
            />
        </Box>
    )
}

export default ProfilePic;