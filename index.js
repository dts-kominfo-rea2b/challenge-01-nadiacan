// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const educationFirstUser = [
    {
        name: "SD 01",
        city: "Jakarta",
        graduate: "2016"
    },
    {
        name: "SMP 02",
        city: "Jakarta",
        graduate: "2019"
    },
    {
        name: "SMA 03",
        city: "Tangerang"
        
    }
];
const favoriteColorFirstUser = new Set([
    "yellow","pink","white","purple"
]);
const favoriteRestaurantFirstUser = new Set([
    "Bento",
    "sushi",
    "pancake",
    "eggy",
    "tempura",
    "Bento",
    "eggy", 
    "padang",
    "Tteok",
    "sushi",
    "sushi"
]);
const firstUser = {
    name:"Monica",
    gender:"Female",
    age:17,
    email:"monica@dingdong.com",
    favoriteColor:favoriteColorFirstUser,
    isHavePet:true,
    education: JSON.stringify(educationFirstUser),
    favoriteRestaurant:favoriteRestaurantFirstUser
};

const educationSecondUser = [
    {
        name: "SD 02",
        city: "Jakarta",
        graduate: "2010"
    },
    {
        name: "SMP 03",
        city: "Bogor",
        graduate: "2013"
    },
    {
        name: "SMA 01",
        city: "Surabaya",
        graduate: "2016"
    },
    {
        name: "Universitas maju",
        city: "Tangerang",
    }
];
const favoriteColorSecondUser = new Set(["blue","black","grey"]);
const favoriteRestaurantSecondUser = new Set([
    "Tempura",
    "Bento",
    "sushi",
    "pancake",
    "padang",
    "katsu",
    "geprek", 
    "pancake",
    "eggy"
]);
const secondUser = {
    name:"Wendy",
    gender:"Male",
    age:23,
    email:"wendy@dingdong.com",
    favoriteColor:favoriteColorSecondUser,
    isHavePet:false,
    education: JSON.stringify(educationSecondUser),
    favoriteRestaurant:favoriteRestaurantSecondUser
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};