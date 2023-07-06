import remove from "lodash.remove"
import find from "lodash.find"

const foodsArray = [
    {
        id: "1",
        firstName: "Apple",
        lastName: "Cider"
    },

    {
        id: "2",
        firstName: "Banana",
        lastName: "Smoothie"
    },

    {
        id: "3",
        firstName: "Cranberry",
        lastName: "Juice"
    }
]

/*-- 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 --*/

const typeDefs = `
    type Food {
        id: String!
        firstName: String
        lastName: String
    }

    type Query {
        allFoods: [Food]
    }

    type Mutation {
        removeFood(id: String!): Food
    }
`

/*-- 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 --*/

const resolvers = {
    Query: {
        allFoods: () => foodsArray
    },

    Mutation: {
        removeFood: (root, args) => {
            const getFood = find(foodsArray, { id: args.id })

            if(getFood){
                remove(foodsArray, c => {
                    return c.id === getFood.id
                })
            } else {
                throw new Error(`Food with id ${args.id} not found.`)
            }

            return getFood
        }
    }
}

export { typeDefs, resolvers }