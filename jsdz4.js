function LibraryBook (_libraryName=`Viktor's Library`) {
    let book = [];
    let libraryName = _libraryName;

    function giveTheBook ( bookIndex, client, data = new Date()) {
        book[bookIndex].readerName = client;
        book[bookIndex].readerData = data;
    }
    this.setBook = function (_title='Unpredictable', _year='Too Old', author='No name') {
        book.push({title:_title, year:_year, author:author});
        console.log(`The book '${_title}' was added to the library`);
    };
    this.getBookInfo = function (bookIndex=0) {
        let text = typeof book[bookIndex].readerData === 'undefined'? 'This book has never been taken' :
            (book[bookIndex].readerName ? 'was taken' : 'is available');
        console.log(`The book ${Object.values(book[bookIndex]).join(',')}: ${text}`)
    };
    this.getTheBook  = function (client, date) {
        let found_=false;
        let foundObj;
        let tmp='';
        do {
            tmp = prompt('Please specify a title of book which you would like to order');
            foundObj = book.find(element_=> element_.title === tmp);
            found_ = !(typeof foundObj === 'undefined');
            if (!found_ && tmp) window.alert("Specified book was not found. Try again");
        } while (!found_ || !tmp);
        if (found_) {
            let index = book.indexOf(foundObj);
            giveTheBook(index, client, date);
            console.warn(`This book '${tmp}' was ordered`)
        } else console.log(`This book '${tmp}' does not exist`)
    };

    this.returnBook  = function () {
        let found_=false;
        let foundObj;
        let tmp='';
        do {
            tmp = prompt('Please specify a title of book which you would like to return');
            foundObj = book.find(element_=> element_.title === tmp);
            found_ = !(typeof foundObj === 'undefined');
            if (!found_ && tmp) window.alert("Specified book was not found. Try again");
        } while (!found_ || !tmp);
        if (found_) {
            let index = book.indexOf(foundObj);
            book[index].readerName='';
            book[index].readerData='';
            console.warn(`This book '${tmp}' was returned`)
        } else console.log(`This book '${tmp}' is not in our collection`)
    };

    return console.warn(`A new library ${libraryName} has been registered in the system`)
}


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