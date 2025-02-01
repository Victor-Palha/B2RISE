type Products = {
    price: number;
    name: string;
} & Record<string, any>;

export function filterExpensiveProducts(products: Products[], threshold: number = 100): Products[] {
    if(products.length === 0){
        console.log("No products found");
        return [];
    }

    const productsWithPriceAboveThreshold = products.filter(product => product.price > threshold);
    printExpensiveProducts(productsWithPriceAboveThreshold);

    return productsWithPriceAboveThreshold;
}

function printExpensiveProducts(expensiveProducts: Products[]): void {
    console.log("Products with price above threshold:");
    console.table(expensiveProducts);
}