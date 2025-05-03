import { PeachButton } from "../../common/PeachButton"
import { navigateToMap } from "./Location"
import './parkingDialog.css'

interface ParkingDialogProps {
    parkingModalVisible: boolean
    setParkingModalVisible: (visible: boolean) => void
}

export const ParkingDialog = ({ parkingModalVisible, setParkingModalVisible }: ParkingDialogProps) => {
    return <dialog id="parking_modal" className="modal" open={parkingModalVisible}>
        <div className="modal-box locationParkingContent">
            <div className="locationParkingDescription">
                Na terenie Zielonej Bramy jest kilka <span style={{ fontWeight: 700 }}>darmowych</span> parkingów, na pewno znajdziecie dla siebie miejsce!
            </div>
            <div className="locationParkingSubdescription">
                Kliknij na zdjęcie, żeby otworzyć mapę.
            </div>
            <img className="locationParkingImage" onClick={navigateToMap} src="/images/marked_parking.png" />
            <PeachButton className="locationParkingButton" text="Zamknij" onClick={() => setParkingModalVisible(false)} />
        </div>
        <div className="modal-backdrop" onClick={() => setParkingModalVisible(false)} />
    </dialog>
}