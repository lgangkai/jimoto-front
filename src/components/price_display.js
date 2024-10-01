import Item from "./item";

function PriceDisplay({price, style}) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'JPY',
    });
    return <div style={style}>
        {currencyFormatter.format(price)}
    </div>
}

export default PriceDisplay;