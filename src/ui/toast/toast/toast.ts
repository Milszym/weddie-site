import toast from "react-hot-toast";

const toastStyle = {
    fontFamily: 'Cormorant'
}

export enum ToastType {
    INFO,
    SUCCESS,
    ERROR,
}

export enum ToastPosition {
    TOP_CENTER = "top-center",
    BOTTOM_CENTER = "bottom-center",
}

export const showToast = (
    message: string,
    type: ToastType = ToastType.INFO,
    position: ToastPosition = ToastPosition.TOP_CENTER
) => {
    switch (type) {
        case ToastType.INFO:
            toast(message, {
                style: toastStyle,
                position
            });
            break;
        case ToastType.SUCCESS:
            toast.success(message, {
                style: toastStyle,
                position
            });
            break;
        case ToastType.ERROR:
            toast.error(message, {
                style: toastStyle,
                position
            });
            break;
    }
}