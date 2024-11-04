// task-1: output: secondary school location of sphia   

let data = {
    sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { shool_name: 'ABC primary school'},
                        { location: 'Peters burg'}
                    ]
            },
            {
                secondary: [
                    { school_name: 'ABC secondary school'},
                    { location: 'St Lorence'}
                ]
            }
        ]
    }
}
console.log(data.sophia.study[1].secondary[1].location);


// task-2: output: Petersburg ----------------------

let student = {
    2222: {
        name: 'Jack',
        section: 'C',
        class: 'IX',
        address: {
            'building no': 12,
            'street': 'St. Jonson',
            'City': 'Petersburg',
            'Country': 'UK'
        }
    },
    3333: {
        name: 'Herry',
        section: 'D',
        class: 'X',
        address: {
            'building no': 85,
            'street': 'DC road',
            'city': 'kachijuli',
            'country': 'Bangladesh' 
        }
    }
}
console.log(student['2222'].address['City']);


// task-3: output: habluder adda, beginner ----------------------

let data2 = {
    data: 
        [
            {
                bookId: 1,
                bookDetails: {
                    name: 'habluder adda',
                    category: 'XYZ',
                    price: '20$'
                },
                bookCategory: 'Basic'
            },
            {
                bookId: 2,
                bookDetails: {
                    name: 'globluder adda',
                    catagory: 'ABC',
                    price: '40$'
                },
                bookCategory: 'Beginner'
            }
        ]
}
console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);