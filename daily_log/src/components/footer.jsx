import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
    return (
        <Typography style={{fontFamily: 'IBM Plex Sans KR'}} variant="body2" color="text.secondary">
            {'Copyright © '}
            <a color="inherit">
                SSOOK
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '20vh',
            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    background : 'none'
                }}
            >
                <hr style={{background:"#89bf9e", opacity:0.5}}/>
                <br />
                <Container maxWidth="sm">
                    <Typography variant="body1" style={{fontFamily: 'IBM Plex Sans KR'}}>
                        You can see all source code <a href={"https://github.com/ssook1222/fastfive_daily_log"}>here</a>
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}