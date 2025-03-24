/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { Fullscreen } from "../../components/Fullscreen"
import { MyHeader } from "../../components/text/MyHeader"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@mui/material"
import { useState } from "react"

const BoxStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));
`)

const HeaderStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`)

const ContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
    gap: 2rem;
`)

const DescriptionStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.text.primary};
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 2rem;
`)

const SearchContainerStyle = withMyTheme((theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`)

const InputStyle = withMyTheme((theme: Theme) => css`
    padding: 0.8rem;
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
    width: 100%;
    &:focus {
        outline: none;
        border-color: ${theme.palette.primary.main};
    }
`)

const ButtonStyle = withMyTheme((theme: Theme) => css`
    background: ${theme.palette.primary.main};
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background: ${theme.palette.primary.dark};
    }
`)

const ResultStyle = withMyTheme((theme: Theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    text-align: center;
`)

const TableImageStyle = withMyTheme((theme: Theme) => css`
    width: 100%;
    max-width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

export const Tables = () => {
    const { t } = useTranslation()
    const [name, setName] = useState("")
    const [table, setTable] = useState<string | null>(null)

    const handleSearch = () => {
        const assignedTable = tableAssignments[name]
        setTable(assignedTable || t('tables.notFound'))
    }

    return (
        <Fullscreen>
            <div css={BoxStyle}>
                <MyHeader text={t('tables.title')} additionalCss={HeaderStyle}/>
                <div css={ContainerStyle}>
                    <div css={DescriptionStyle}>
                        {t('tables.description')}
                    </div>
                    <img 
                        src={t('tables.tableImage')} 
                        alt={t('tables.title')}
                        css={TableImageStyle}
                    />
                    <div css={SearchContainerStyle}>
                        <input
                            type="text"
                            placeholder={t('tables.namePlaceholder')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            css={InputStyle}
                        />
                        <button onClick={handleSearch} css={ButtonStyle}>
                            {t('tables.searchButton')}
                        </button>
                        {table && (
                            <div css={ResultStyle}>
                                {table}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fullscreen>
    )
} 