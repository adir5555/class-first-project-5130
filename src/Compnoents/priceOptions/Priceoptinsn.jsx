import Price from "../price/Price";
const Priceoptinsn = () => {
    
    const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            
            "features": [
              "Access to cardio area",
              "Basic weightlifting equipment",
              "Locker room access",
              "Unlimited water station access",
              "Discounts on gym merchandise"
            ],
            "price": 30.00
          },
          {
            "id": 2,
            "name": "Premium Membership",
         
            "features": [
              "Access to all gym facilities",
              "Personal trainer sessions (2/month)",
              "Nutrition consultation",
              "Access to sauna and spa",
              "Free smoothie every visit"
            ],
            "price": 35.00
          },
          
          {
            "id": 4,
            "name": "Student Membership",
            
            "features": [
              "Valid student ID required",
              "Access to all gym facilities",
              "Discounts on personal training",
              "Access to study area with free Wi-Fi",
              "Monthly fitness workshops"
            ],
            "price": 65.00
          }
        ]
      
    return (
        <div className="m-12">
            <h3 className="text-4xl">Best price the town</h3>
            <div className="grid md:grid-cols-3 gap-6 ">
            {
                priceOptions.map(option => <Price 
                    key={option.id} option={option}></Price>)
            }
            </div>
        </div>
    );
};

export default Priceoptinsn;






  