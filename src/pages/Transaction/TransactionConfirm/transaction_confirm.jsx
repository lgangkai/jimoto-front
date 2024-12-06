import {Button, Divider, Flex, Image} from "antd";
import "./transaction_confirm.css"
import "@/style/base.css"
import PriceDisplay from "@/components/Price/PriceDisplay/price_display";
import no_image from "@/assets/images/no_image.png"

function TransactionConfirm({onCancelClick, onConfirmClick}) {
    document.title = "ジモト ｰ 取引確認"
    return <Flex vertical={true}>
        {/*<AppHeader onlyShowLogo={true} />*/}
        <div className="transaction-confirm-div">
            <div className="text-title-h1">取引確認</div>
            <Divider/>
            <div className="transaction-confirm-item-div">
                <Image
                    src={""}
                    fallback={no_image}
                    preview={false}
                    style={{width:70,height:70,objectFit: 'contain',objectPosition: 'center' }}/>
                <div className="transaction-confirm-item-text">
                    <div className="transaction-confirm-item-text-title">title</div>
                    <PriceDisplay price={100}/>
                </div>
            </div>
            <Divider/>
            <div>
                注意：ご确认後、取引の段階に進みます。キャンセルする場合には、相手の同意が必要です。
            </div>
            <div className="transaction-confirm-btn-group">
                <Button
                    className="transaction-confirm-btn"
                    danger
                    onClick={onCancelClick}
                >
                    戻る
                </Button>
                <Button
                    className="transaction-confirm-btn"
                    type={"primary"}
                    danger
                    onClick={onConfirmClick}
                >
                    確認する
                </Button>
            </div>
        </div>
    </Flex>
}

export default TransactionConfirm