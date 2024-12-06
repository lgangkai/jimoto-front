import {useSelector} from "react-redux";
import "./location_tab.css"
import classNames from "classnames";

function LocationTab({onlyShowLogo}) {
    const {city, ward} = useSelector(state => state.location)
    return <div className={classNames({
        "location-tab": true,
        "invisible": onlyShowLogo
    })}>
        {`${city} - ${ward}`}
    </div>
}

export default LocationTab;