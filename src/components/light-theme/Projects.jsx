import { Typography, Box, Badge } from "@mui/material";
import { PROJECTS } from 'components/contants/theme';
import T from "T";

const Projects = () => {
    return (
        <>
            <Typography variant="h6" mt={3} mb={1} fontWeight={600}>{T.PROJECTS}</Typography>
            <Box sx={{
                '& .MuiBadge-badge': {
                    background: '#666',
                    minWidth: 8,
                    height: 8,
                }
            }} m={1}>
                {
                    PROJECTS.map((project, index) => {
                        return (
                            <Box mt={index > 0 ? 2.5 : 1.5} key={index}>
                                <Box display="flex" alignItems="center">
                                    <Badge variant="dot" />
                                    <Typography variant="body1" ml={1.5} fontWeight={600}>{project.title}</Typography>
                                </Box>
                                <Typography variant="body2" ml={1.5} mt={1}>{project.description}</Typography>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="body2" ml={1.5} mt={1} fontWeight={600}>{T.TECHNOLOGY_USED}: </Typography>
                                    <Typography variant="body2" ml={0.5} mt={1}>{project.technology}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="body2" ml={1.5} mt={1} fontWeight={600}>{T.DURATION}: </Typography>
                                    <Typography variant="body2" ml={0.5} mt={1}>{project.duration}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" ml={1.5} mt={1} fontWeight={600}>{T.RESPONSIBILITIES}: </Typography>
                                    <Box ml={3}>
                                        {
                                            project.responsibilities.map((responsibility, index) => {
                                                return (
                                                    <Typography variant="body2" ml={0.5} mt={1} key={index}>
                                                        <strong style={{ marginRight: 5 }}>{index + 1}.</strong>{`${responsibility}`}
                                                    </Typography>
                                                )
                                            })
                                        }
                                    </Box>

                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Projects;