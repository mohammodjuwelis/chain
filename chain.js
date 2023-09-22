
const products = {
    count: 5000,
    data: [
        {id:1, name:'Lenovo', price: 650000,},
        {id:2, name:'macbook', price: 100000,}
    ]
}

// products macbook price key you do get
const macBookPrice = products.data[1].price;
console.log(macBookPrice);

const user = {
    id: 501,
    name: 'alu mama',
    address: {
        street: {
            first: 'Sutibari bazar',
            second: 'Sutibari bazar Dimla station',
            third: 'Sutibari bazar west side coming',

            homeNumber: [
                '012050',
                'rd/5050',
            ],
            // the access dimlaPostCode 
            postCode: {
                dimlaPostCode: 5053,
                sutibariPostCode: 'hudai',
            }
        },
        city: 'Dhaka'
    }
}


const dimlaPostCode = user.address.street?.postCode.dimlaPostCode;
console.log(dimlaPostCode);



const user2 = {
    id: 5551,
    name: 'name nai',
    address: {
        city: 'Nilfamari'
    }
}

console.log(user2.address.second)










