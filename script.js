class UberPriceCalculator {
    constructor(distance, serviceType) {
        this.distance = distance;
        this.serviceType = serviceType;
    }

    calculatePrice() {
        let basePrice;
        let pricePerKm;

        // Assigning base price and price per kilometer based on service type
        switch (this.serviceType) {
            case "UberX":
                basePrice = 12;
                pricePerKm = 3;
                break;
            case "UberBlack":
                basePrice = 13;
                pricePerKm = 4;
                break;
            case "UberXL":
                basePrice = 8;
                pricePerKm = 2;
                break;
            default:
                console.log("Invalid service type");
                return null;
        }

        // Calculating total price
        const totalPrice = basePrice + (pricePerKm * this.distance);
        return totalPrice;
    }
}


const distance = 90; // in kilometers
const serviceType = "UberXL";
const uberCalculator = new UberPriceCalculator(distance, serviceType);
const totalPrice = uberCalculator.calculatePrice();
console.log(`Total price for ${distance} km using ${serviceType}: $${totalPrice}`);
