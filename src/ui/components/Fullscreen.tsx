/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import React from 'react';
import { withMyTheme } from '../theme/theme';
import { Theme } from '@mui/material';

const FullscreenStyle = withMyTheme((theme: Theme, additionalCss: any) => css`
    width: 100vw; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    overflow: hidden; 
    ${additionalCss ? additionalCss(theme) : ''}
`)

interface FullscreenProps {
    id?: string
    children: React.ReactNode;
    additionalCss?: (theme: Theme) => any;
}

export const Fullscreen = ({ id, children, additionalCss }: FullscreenProps) => {
    return <Box
        css={(theme) => FullscreenStyle(theme, additionalCss)}
        id={id}>
        {children}
    </Box>
};