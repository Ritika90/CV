import React, { useState, useEffect } from 'react';
import { Typography, Modal, Box, Paper, Button, Backdrop } from '@mui/material';
import { styled } from '@mui/system';
import { USER_GITHUB_URL } from 'components/contants/theme';
import T from 'T';

const InfoModal = () => {
    const StyledPaper = styled(Paper)(() => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 24,
    }));

    const StyledButton = styled(Button)(() => ({
        borderColor: 'black',
        color: 'black',
        '&:hover': {
            borderColor: 'white',
            color: 'white',
            background: 'black',
        },
    }));

    const [open, setOpen] = useState(false);
    const isInfoModalOpen = localStorage.getItem("onceClosed");

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        localStorage.setItem("onceClosed", true);
    }

    useEffect(() => {
        handleOpen();
    }, []);

    return (
        <Modal
            open={open && !isInfoModalOpen}
            onClose={() => setOpen(false)}
            disableEscapeKeyDown
            slots={{
                backdrop: (innerProps) => (
                  <Backdrop {...innerProps} onClick={handleOpen} />
                ),
            }}
        >   
            <StyledPaper>
                <Typography variant="h6" textAlign="center">
                    {T.INFO}
                </Typography>

                <Box display="flex" justifyContent="space-between" m="20px 80px 0">
                    <StyledButton variant="outlined" size="small" onClick={ handleClose }>
                        { T.CLOSE }
                    </StyledButton>
                    <StyledButton variant="outlined" href={process.env.REACT_APP_GITHUB || USER_GITHUB_URL} target="_blank" size="small">
                        { T.CHECK_CODE }
                    </StyledButton>
                </Box>
            </StyledPaper>
        </Modal>
    )
}

export default InfoModal;