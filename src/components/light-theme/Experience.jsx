import { Typography, Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { EXPERIENCE } from 'components/contants/theme';
import T from "T";

const Experience = () => {
    return (
        <>
            <Typography variant="h6" mt={3} mb={1} fontWeight={600}>{T.EXPERIENCE}</Typography>
            <Stepper orientation="vertical" sx={{
                "& .MuiStepIcon-root": {
                    color: '#666',
                    height: 10
                },
                "& .MuiStepIcon-text, & .Mui-active": {
                    fill: '#666',
                }
            }}>
                {
                    EXPERIENCE.map((exp, index) => {
                        return (
                            <Step active key={index}>
                                <StepLabel sx={{ p: 0 }}>
                                    <Typography variant="subtitle1" fontWeight={600}>{exp.title}</Typography>
                                </StepLabel>
                                <StepContent>
                                    <Typography variant="subtitle2">{exp.company}</Typography>
                                    <Typography variant="subtitle2">{exp.duration}</Typography>
                                    <Typography variant="subtitle2">{exp.location}</Typography>
                                </StepContent>
                            </Step>
                        )
                    })
                }
            </Stepper>
        </>
    )
}

export default Experience;