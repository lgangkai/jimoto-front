import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLocation} from "@/store/modules/location";
import {getAddressByLocation} from "@/apis/common";

function LocationProvider() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    getAddressByLocation(position.coords.latitude, position.coords.longitude).then((res) => {
                        console.log(res)
                        dispatch(setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            city: res.data.address.city,
                            ward: res.data.address.suburb===undefined ? res.data.address.quarter : res.data.address.suburb,
                            displayAddress: res.data.display_name,
                        }))
                    })
                },
                (error) => {
                    console.log("Get location failed: ", error);
                }
            )
        } else {
            console.log("Browser does not support geolocation");
        }
    }, [dispatch])
    return <></>
}

export default LocationProvider;