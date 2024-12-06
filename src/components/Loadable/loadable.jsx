import failed from "@/assets/icons/load_failed.png"
import loading from "@/assets/icons/loading-contents.gif"
import nothing from "@/assets/icons/nothing.png"
import "./loadable.css"
import {Button} from "antd";

export const LoadState = {
    Loading: 0,
    LoadSuccess: 1,
    LoadFailure: 2,
    LoadNothing: 3
}

function Loadable(props) {
    if (props.state === LoadState.Loading) {
        return <div className="loadable-div">
            <img src={loading} width="120px" height="100px"></img>
        </div>
    } else if (props.state === LoadState.LoadSuccess) {
        return props.children
    } else if (props.state === LoadState.LoadNothing) {
        return <div className="loadable-div">
            <img src={nothing} width="100px" height="100px"></img>
        </div>
    } else {
        return <div className="loadable-div">
            <img src={failed} width="80px" height="80px"></img>
            <Button className="loadable-refresh-btn" onClick={()=>window.location.reload()}>
                リフレッシュする
            </Button>
        </div>
    }
}

export default Loadable