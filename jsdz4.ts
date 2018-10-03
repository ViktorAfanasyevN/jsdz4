function WomanBag () {
    var bagItems = {}
    this.getItemFeature = function (itemName) {
        console.log(`Your item has the following feature: ${bagItems[itemName]}`)
    }
    this.getAllItems = function () {
        console.log('You have the following items in your bag: \n')
        for (var item in bagItems)
            console.log(`Item: ${item}, Description: ${bagItems[item]}`)
    }
    this.addItem = function (itemName, itemDescription) {return bagItems[itemName] = itemDescription}

    this.deleteItem = function (itemName) {delete bagItems[itemName]}
}

var myBag = new WomanBag()

}