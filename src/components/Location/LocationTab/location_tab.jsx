import {useSelector} from "react-redux";
import "./location_tab.css"

function LocationTab() {
    const {city, ward} = useSelector(state => state.location)
    return <div className="location-tab">
        {`${city} - ${ward}`}
    </div>
}

export default LocationTab;