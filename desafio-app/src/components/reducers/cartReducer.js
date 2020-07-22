import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'

const initState = {
    products: [{
            "productID": 4,
            "name": "Chef Anton's Cajun Seasoning",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 22,
            "unitsInStock": 53,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 5,
            "name": "Chef Anton's Gumbo Mix",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 21,
            "unitsInStock": 0,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 6,
            "name": "Grandma's Boysenberry Spread",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 25,
            "unitsInStock": 120,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 7,
            "name": "Uncle Bob's Organic Dried Pears",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 30,
            "unitsInStock": 15,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 8,
            "name": "Northwoods Cranberry Sauce",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 40,
            "unitsInStock": 6,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 9,
            "name": "Mishi Kobe Niku",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 97,
            "unitsInStock": 29,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 10,
            "name": "Ikura",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 31,
            "unitsInStock": 31,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 2,
            "name": "Chang",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 19,
            "unitsInStock": 17,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 3,
            "name": "Aniseed Syrup",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 10,
            "unitsInStock": 13,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 11,
            "name": "Queso Cabrales",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 21,
            "unitsInStock": 22,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 12,
            "name": "Queso Manchego La Pastora",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 38,
            "unitsInStock": 86,
            "image": "http://lorempixel.com/400/200/technics/"
        },
        {
            "productID": 13,
            "name": "Konbu",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna vel pulvinar malesuada.",
            "unitPrice": 6,
            "unitsInStock": 24,
            "image": "http://lorempixel.com/400/200/technics/"
        }
    ],

    addedItems: [],
    total: 0
}

const cartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.products.find(item => item.productID === action.productID)
        let existed_item = state.addedItems.find(item => action.productID === item.productID)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.unitPrice
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.unitPrice

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.productID === item.productID)
        let new_products = state.addedItems.filter(item => action.productID !== item.productID)

        let newTotal = state.total - (itemToRemove.unitPrice * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_products,
            total: newTotal
        }
    }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.products.find(item => item.productID === action.productID)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.unitPrice
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.products.find(item => item.productID === action.productID)
        if (addedItem.quantity === 1) {
            let new_products = state.addedItems.filter(item => item.productID !== action.productID)
            let newTotal = state.total - addedItem.unitPrice
            return {
                ...state,
                addedItems: new_products,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.unitPrice
            return {
                ...state,
                total: newTotal
            }
        }
    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 15
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 15
        }
    } else {
        return state
    }

}

export default cartReducer