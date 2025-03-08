/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import React from 'react';

const fullscreenStyle = css`
    width: 100vw; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    overflow: hidden; 
`

interface FullscreenProps {
    children: React.ReactNode;
}

export const Fullscreen = ({ children }: FullscreenProps) => {
    return <Box
        css={fullscreenStyle}>
        {children}
    </Box>
};