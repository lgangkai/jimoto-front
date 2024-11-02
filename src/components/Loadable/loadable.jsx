import nothing from "@/assets/icons/nothing.png"
import loading from "@/assets/icons/loading-contents.gif"
import "./loadable.css"

export const LoadState = {
    Loading: 0,
    LoadSuccess: 1,
    LoadFailure: 2,
}

function Loadable(props) {
    if (props.state === LoadState.Loading) {
        return <div className="loadable-div">
            <img src={loading} width="120px" height="100px"></img>
        </div>
    } else if (props.state === LoadState.LoadSuccess) {
        return props.children
    } else {
        return <div className="loadable-div">
            <img src={nothing} width="80px" height="80px"></img>
        </div>
    }
}

export default Loadable