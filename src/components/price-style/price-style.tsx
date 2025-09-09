type PriceStyleProps = {
    value: number;
    vat?: number;
};

export default function PriceStyle({ value, vat = 0 }: PriceStyleProps) {

    const price = value + (value * vat / 100);

    const priceFormatted = price.toLocaleString('fr-be', {
        style: 'currency',
        currency: 'EUR'
    });

    return (
        <span>{priceFormatted}</span>
    );
}