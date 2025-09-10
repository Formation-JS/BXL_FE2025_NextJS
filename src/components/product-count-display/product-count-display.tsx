
type ProductCountDisplayProps = {
    foodCount: number;
    nonFoodCount: number;
};

export default function ProductCountDisplay({ foodCount, nonFoodCount }: ProductCountDisplayProps) {

    return (
        <div>
            <p>Food : {foodCount}</p>
            <p>Non-food : {nonFoodCount}</p>
        </div>
    );
}