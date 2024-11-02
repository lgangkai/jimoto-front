import {message} from "antd";
import axios from "axios";

export function commonErrorHandler(err) {
    console.log(err);
    message.error('ネットワーク通信エラー、少々待ちください');
}

export function getUploadApiUrl() {
    return process.env.REACT_APP_JIMOTO_API_BASE_URL + 'apis/services/image/action/upload'
}

export async function getAddressByLocation(latitude, longitude) {
    console.log("apis getAddressByLocation called!")
    return await axios
        .get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${process.env.REACT_APP_GEOCODING_API_KEY}`, {withCredentials: false})
        .catch((err) => console.log(err))
}