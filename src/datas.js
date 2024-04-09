let xAxisData = [
    {
        'name' : 'Jan',
        'sale' : 112_000
    },
    {
        'name' : 'Feb',
        'sale' : 83_000
    },
    {
        'name' : 'Mar',
        'sale' : 74_200
    },
    {
        'name' : 'Apr',
        'sale' : 35_000
    },
    {
        'name' : 'May',
        'sale' : 96_000
    },
    {
        'name' : 'Jun',
        'sale' : 85_000
    },
    {
        'name' : 'Jul',
        'sale' : 60_000
    },
    {
        'name' : 'Agu',
        'sale' : 93_000
    },
    {
        'name' : 'Sep',
        'sale' : 89_000
    },
    {
        'name' : 'Oct',
        'sale' : 73_000
    },
    {
        'name' : 'Nov',
        'sale' : 159_700
    },
    {
        'name' : 'Dev',
        'sale' : 89_000
    },

]

const newMember = [
    {
        id :1,
        username : 'Mohammad Amin' , 
        title : 'Web Developer',
        img : './images/prof2.jpg'
    },
    {
        id :2,
        username : 'Qadir Yolme' , 
        title : 'Hacker',
        img : './images/prof3.jpg'
    },
    {
        id :3,
        username : 'Sasan Alizadeh' , 
        title : 'Seo Eng',
        img : './images/prof.jpg'
    },
    {
        id :4,
        username : 'Zahra Agayi' , 
        title : 'Weblog',
        img : './images/prof4.jpg'
    },
]


const transactions = [
    {
        id :1,
        customer : 'Qadir Yolma',
        date:'12 Jun 2024',
        amout : '$199.5',
        status : 'Approved',
        img: 'images/prof3.jpg'
    },
    {
        id :2,
        customer : 'Zahra Agayi',
        date:'4 Nov 2024',
        amout : '$140.0',
        status : 'Declined',
        img: 'images/prof4.jpg'
    },
    {
        id :3,
        customer : 'Mohammad Amin',
        date:'17 Agu 2024',
        amout : '$230.0',
        status : 'Pending',
        img: 'images/prof2.jpg'
    },
    {
        id :4,
        customer : 'Sasan Alizadeh',
        date:'12 May 2024',
        amout : '$120.0',
        status : 'Approved',
        img: 'images/prof.jpg'
    },
]

const userRows = [
    {
        id :1,
        username : 'Mohammad Amin' , 
        img : './images/prof2.jpg',
        email : 'MohammadAmin@gmail.com',
        status : 'active',
        transaction : '$1570'
    },
    {
        id :2,
        username : 'Qadir Yolme' , 
        img : './images/prof3.jpg',
        email : 'QadirYolme@gmail.com',
        status : 'active',
        transaction : '$2056'
    },
    {
        id :3,
        username : 'Sasan Alizadeh' , 
        img : './images/prof.jpg',
        email : 'SasanAlizadeh@gmail.com',
        status : 'non - active',
        transaction : '$1200'
    },
    {
        id :4,
        username : 'Zahra Agayi' , 
        img : './images/prof4.jpg',
        email : 'ZahraAgayi@gmail.com',
        status : 'active',
        transaction : '$2891'
    },

    {
        id :5,
        username : 'Mohammad Amin' , 
        img : './images/prof2.jpg',
        email : 'MohammadAmin@gmail.com',
        status : 'active',
        transaction : '$1570'
    },
    {
        id :6,
        username : 'Qadir Yolme' , 
        img : './images/prof3.jpg',
        email : 'QadirYolme@gmail.com',
        status : 'active',
        transaction : '$2056'
    },
    {
        id :7,
        username : 'Sasan Alizadeh' , 
        img : './images/prof.jpg',
        email : 'SasanAlizadeh@gmail.com',
        status : 'non - active',
        transaction : '$1200'
    },
    {
        id :8,
        username : 'Zahra Agayi' , 
        img : './images/prof4.jpg',
        email : 'ZahraAgayi@gmail.com',
        status : 'active',
        transaction : '$2891'
    },

]

const products = [
    {
        id :1,
        title :'Asus',
        img : 'images/asus.jpg',
        price : '$890'
    },
    {
        id :2,
        title :'Acer',
        img : 'images/acer.jpg',
        price : '$890'
    },
    {
        id :3,
        title :'Dell',
        img : 'images/dell.jpg',
        price : '$890'
    },
    {
        id :4,
        title :'Hp',
        img : 'images/hp.jpg',
        price : '$890'
    }
]

const productData = [
    {
        name : 'Jan',
        sales : 2000
    },
    {
        name : 'Feb',
        sales : 1000
    },
    {
        name : 'Mar',
        sales : 2500
    },
    
]
export {xAxisData , newMember ,transactions ,userRows ,products ,productData}