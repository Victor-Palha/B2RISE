export function calculateDiscount(price: number, isPremium: boolean): number {
    if (price <= 0) {
        throw new Error("Price cannot be 0 or negative");
    }
    const discountRate = getDiscountRateBasedOnPremiumStatus(price, isPremium);
    return price * discountRate;
}

function getDiscountRateBasedOnPremiumStatus(price: number, isPremium: boolean): number {
    const isEligibleForDiscount = isPriceEligibleForDiscount(price);
    if (isPremium) {
        return isEligibleForDiscount ? 0.8 : 0.9;
    }

    return isEligibleForDiscount ? 0.9 : 1;
}

function isPriceEligibleForDiscount(price: number): boolean {
    return price > 100;
}