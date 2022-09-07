let houses = require('./db.json')
let globalID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body
        let newHouse = {
            address,
            price: +price,
            imageURL,
            id: globalID
        }
        houses.push(newHouse)
        console.log(newHouse.id)
        res.status(200).send(houses)
        globalID++
    },
    updateHouse: (req, res) => {
        const { type } = req.body
        let index = houses.findIndex(elem => elem.id === +req.params.id)

        if (type === 'minus') {
            houses[index].price -= 10000
        } else if (type === 'plus') {
            houses[index].price += 10000
        }

        res.status(200).send(houses)
    }
}