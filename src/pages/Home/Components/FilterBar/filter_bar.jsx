import "./filter_bar.css"
import {Button, Dropdown} from "antd";
import {CaretDownOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {
    ContentsFilterMap,
    ContentsOrderMap, ContentsTypeMap,
    setSelectedFilter,
    setSelectedOrder, setSelectedType
} from "@/store/modules/contents_filter";

function FilterBar() {
    const dispatch = useDispatch()
    const { selectedType, selectedFilter, selectedOrder } = useSelector(state => state.contents_filter)
    const itemsType = Object.keys(ContentsTypeMap).map((item, i)=> {
        return {
            label: <div onClick={()=>dispatch(setSelectedType(i))}>{ContentsTypeMap[i].text}</div>,
            key: '' + i
        }
    })
    const itemsFilter = Object.keys(ContentsFilterMap).map((item, i)=> {
        return {
            label: <div onClick={()=>dispatch(setSelectedFilter(i))}>{ContentsFilterMap[i].text}</div>,
            key: '' + i
        }
    })
    const itemsOrder = Object.keys(ContentsOrderMap).map((item, i)=> {
        return {
            label: <div onClick={()=>dispatch(setSelectedOrder(i))}>{ContentsOrderMap[i].text}</div>,
            key: '' + i
        }
    })
    return <div className="filter-bar-top">
        <Dropdown className="dropdown-type" menu={{ items: itemsType }} trigger={['click']}>
            <Button className="filter-bar-type-btn">
                {ContentsTypeMap[selectedType].text}<CaretDownOutlined />
            </Button>
        </Dropdown>
        <Dropdown menu={{ items: itemsFilter }} trigger={['click']}>
            <Button className="filter-bar-filter-btn">
                {ContentsFilterMap[selectedFilter].text}<CaretDownOutlined />
            </Button>
        </Dropdown>
        <Dropdown menu={{ items: itemsOrder }} trigger={['click']}>
            <Button className="filter-bar-order-btn">
                {ContentsOrderMap[selectedOrder].text}<CaretDownOutlined />
            </Button>
        </Dropdown>
    </div>
}

export default FilterBar