import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'



    export const deliveryOptions =[{
        id:'1',
        deliveryDays: 7,
        price: 0,
        method:' Free'

    },

    {
        id:'2',
        deliveryDays:5,
        price:10,
        method:' 5 day'
    },

    {

        id:'3',
        deliveryDays:3,
        price:  15,
        method:' 3 day'



    }]

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;

deliveryOptions.forEach((option)=>{

    if( option.id ===deliveryOptionId){
        deliveryOption = option;
    }
});

return deliveryOption ||deliveryOptions[0]
//if there's no delivery option the code above make first option default
}

export function calculateDeliveryDate(deliveryOption){
    const today = dayjs();
    const deliveryDate =  today.add(deliveryOption.deliveryDays,'days')
    
    const dateString = deliveryDate.format('dddd, MMMM D')  

     return dateString
  }
  