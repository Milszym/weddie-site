/** @jsxImportSource @emotion/react */
import {useTranslation} from "react-i18next"
import {Fullscreen} from "../../components/Fullscreen"
import {MyHeader} from "../../components/text/MyHeader"
import {withMyTheme} from "../../theme/theme"
import {css, Theme} from "@mui/material"
import {useState} from "react"
// Import TableRestaurant icon from MUI icons
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant'
// Import MyButton component
import {MyButton} from "../../components/button/MyButton"
import {mobileCss} from "../../theme/isMobile";
import {tabletCss} from "../../theme/isTablet";

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));
    font-family: ${theme.typography.body1.fontFamily};
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
    text-align: center;
    ${tabletCss(`
        margin-bottom: 1.75rem;
    `)}
    ${mobileCss(`
        margin-bottom: 1.5rem;
    `)}
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 1rem;
    box-sizing: border-box;
    ${tabletCss(`
        max-width: 70%;
        gap: 1.75rem;
    `)}
    ${mobileCss(`
        max-width: 90%;
        gap: 1.5rem;
    `)}
`)

const DescriptionStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    font-size: 1.5rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 2rem;
    font-family: ${theme.typography.body1.fontFamily};
    ${tabletCss(`
        margin-bottom: 1.75rem;
        max-width: 90%;
    `)}
    ${mobileCss(`
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        line-height: 1.5;
    `)}
`)

const SearchContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-width: 30%;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    ${tabletCss(`
        width: 70%;
        max-width: 600px;
        padding: 1.75rem;
    `)}
    ${mobileCss(`
        width: 85%;
        max-width: 90vw;
        padding: 1.5rem;
        gap: 0.8rem;
    `)}
`)

const InputStyle = withMyTheme((theme: Theme) => css`
    padding: 0.8rem;
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 4px;
    font-family: ${theme.typography.body1.fontFamily};
    width: 100%;
    font-size: 1.6rem;
    &:focus {
        outline: none;
        border-color: ${theme.palette.primary.main};
    }

    ${mobileCss(`
        font-size: 1.2rem;
    `)}
`)

const ResultStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: bold;
    margin-top: 1rem;
    text-align: center;
    font-family: ${theme.typography.body1.fontFamily};
    ${tabletCss(`
        margin-top: 0.9rem;
    `)}
    ${mobileCss(`
        margin-top: 0.8rem;
    `)}
`)

// Mock data - in a real application, this would come from a backend
const tableAssignments: Record<string, string> = {
    "John Smith": "Table 1",
    "Jane Doe": "Table 2",
    "Mike Johnson": "Table 3",
    "Sarah Wilson": "Table 4",
    "David Brown": "Table 5",
    "Emma Davis": "Table 6"
}

// Define a style for the table icon
const TableIconStyle = withMyTheme((theme: Theme) => css`
    font-size: clamp(120px, 15vw, 180px); // Responsive size for the icon
    color: ${theme.palette.primary.main}; // Use primary color from theme
    margin: 2rem 0;
    opacity: 0.85; // Slightly transparent
    transition: transform 0.3s ease, color 0.3s ease;

    ${tabletCss(`
        margin: 1.75rem 0;
    `)}
    ${mobileCss(`
        margin: 1.5rem 0;
    `)}

    &:hover {
        transform: scale(1.05);
        color: ${theme.palette.primary.dark};
    }
`)

export const Tables = () => {
    const {t} = useTranslation()
    const [name, setName] = useState("")
    const [table, setTable] = useState<string | null>(null)

    const handleSearch = () => {
        const assignedTable = tableAssignments[name]
        setTable(assignedTable || t('tables.notFound'))
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <Fullscreen additionalCss={BoxStyle}>
            <MyHeader text={t('tables.title')} additionalCss={HeaderStyle}/>
            <div css={ContainerStyle}>
                <div css={DescriptionStyle}>
                    {t('tables.description')}
                </div>

                <div css={SearchContainerStyle}>
                    <input
                        type="text"
                        placeholder={t('tables.namePlaceholder')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyPress={handleKeyPress}
                        css={InputStyle}
                    />
                    <MyButton
                        variant="outlined"
                        colorVariant="primary"
                        onClick={handleSearch}
                        text={t('tables.searchButton')}
                    />
                    {table && (
                        <div css={ResultStyle}>
                            {table}
                        </div>
                    )}
                </div>

                <TableRestaurantIcon css={TableIconStyle} aria-label={t('tables.title')}/>
            </div>
        </Fullscreen>
    )
} 
