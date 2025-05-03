import { useState } from "react";
import { PeachButton } from "../../common/PeachButton"
import "./tables.css"
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { showToast, ToastPosition, ToastType } from "../../common/toast/toast";
import { MainConfig } from "../../../config/MainConfig";
import { checkTable } from "../../../api/tablesApi";
import { LotteryText } from "./LotteryText";

export const Tables = () => {

    const { t } = useTranslation()

    const [tableName, setTableName] = useState(UNKNOWN_TABLE_NAME)
    const [who, setWho] = useState('')
    const [loading, setLoading] = useState(false)

    const searchTable = async () => {
        try {
            if (!validate()) {
                return
            }
            setLoading(true)
            const response = await checkTable(who);
            if (response.status == 404) {
                showTableError()
            } else {
                const body = await response.json()
                console.log('Successfully checked table', response.status, response.text, body);
                setTableName(body.tableName)
            }
        } catch (error) {
            showTableError(error)
        } finally {
            setLoading(false)
        }
    }

    const showTableError = (error?: any) => {
        showToast(t('tables.tableNotFound'), ToastType.ERROR);
        console.error('Could not check tables', error);
        setTableName(UNKNOWN_TABLE_NAME)
    }

    const validate = () => {
        if (who === '') {
            return false
        }
        return true
    }

    const onWhoChanged = (newWho: string) => {
        setWho(newWho)
        setTableName(UNKNOWN_TABLE_NAME)
    }

    return <section
        id="tables"
        className="tablesContent">
        <div className="tablesTitle">{t('tables.title')}</div><br />
        <div className="tablesDescription">
            {t('tables.description')}
        </div><br />
        <div className="tablesInput">
            <input type="text" placeholder={t('tables.who')} onChange={(event) => onWhoChanged(event.target.value)}
                className="tablesInputText input input-bordered" />
        </div>
        <div className="tablesButton">
            <PeachButton text={t('tables.search')} enabled={validate()} onClick={searchTable} />
        </div>

        <br />
        <div className="tableResult">
            <div className={`tableName${tableName === UNKNOWN_TABLE_NAME ? ' tableNameUnknown' : ''}`}>
                {tableName === UNKNOWN_TABLE_NAME ? tableName : <LotteryText text={tableName} />}
            </div>
            <img className="tablesImage" src="/images/table_icon_1.png" />
        </div>
    </section >
}

const UNKNOWN_TABLE_NAME = "?"