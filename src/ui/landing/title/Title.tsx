/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Fullscreen } from "../../components/Fullscreen"
import { MyButton } from "../../components/MyButton"

export const Title = () => {
    return <Fullscreen>
        <h1>Weddie Site</h1>
        <MyButton />
    </Fullscreen>
}