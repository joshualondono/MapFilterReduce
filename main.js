let numbers = [12, 3, 5, 3, 5, 4]

numbers.reduce((acc, val) => {return acc + val}, 200)

let data = [
    {
    wineColor: 'red',
    year: '1922',
    region: 'Bordeaux',
    numBottles: 123
    },
    {
    wineColor: 'red',
    year: '1972',
    region: 'Beaujolais',
    numBottles: 29
    },
    {
    wineColor: 'white',
    year: '2020',
    region: 'Bourgogne',
    numBottles: 224
    },
    {
    wineColor: 'white',
    year: '1987',
    region: 'Merlot',
    numBottles: 122
    },
    {
    wineColor: 'white',
    year: '1963',
    region: 'Rioja',
    numBottles: 22
    },
    {
    wineColor: 'red',
    year: '1976',
    region: 'Napa',
    numBottles: 54
    }
    ];
    
    data
    .filter(red => red.wineColor === 'red')
    .map(num => num.numBottles + 500)
    .reduce((acc, val) => acc + val)
    
    
const nums1 = [8, 21.3, 16, 55, 22, 44]; // should be 27
const nums2 = [11.12, 43, 56.22, 78, 98, 11]; // should be 49
const nums3 = [2, 1222, 3444, 7254, 83.04444, 1111]; // should be 2186
const nums4 = [2, 1222,'sneeze', 3444, 7254, 8, 'abacus']; //should be 1734


    let businesses = [
             { company: 'VISA', startYear: 2000 },
            { company: 'Chase', startYear: 1998 },
            { company: 'BOA', startYear: 1980 },
            { company: 'Amex', startYear: 2000 },
            { company: 'TD', startYear: 2001 },
            { company: 'Mastercard', startYear: 2011 },
            { company: 'Citibank', startYear: 2010 },
            ];
            
businesses.filter(startDate => startDate.startYear >= 2000)

const array = [1,2,undefined,6]// [5,10,15,20]
//       [1,2,undefined,6] should be [5,10,30]
//       [1,3,25.5,4,32.9] should be [5,15,20]

array
.map(num => Number.isInteger(num) ? num * 5 : null)
.filter(num => num !== null)

const arr1 = [5,3,2,5,6]
