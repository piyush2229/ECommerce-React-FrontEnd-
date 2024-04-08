import apple13_128_mid from "./item-photos/Iphone-13-128.png";
import Iphone_15_128_Black from "../assets/item-photos/Iphone-15-128-Black.png";
import Oneplus12R_Blue_16_256 from "../assets/item-photos/Oneplus12R-Blue-16-256.png";
import Pococ55_128_6 from "../assets/item-photos/Pococ55-128-6.png";
import Realme_Narzo_N53_128_8 from "../assets/item-photos/Realme-Narzo-N53-128-8.png";
import acer_aspire5_512_16_i5 from "../assets/item-photos/acer_aspire5_512_16_i5.jpg";
import apple_macbook_2023_36 from "../assets/item-photos/apple_macbook_2023_36.jpg";
import dell_14_512_8_i2 from "../assets/item-photos/dell_14_512_8_i2.jpg";
import Hp_15s_512_8_i3 from "../assets/item-photos/Hp_15s_512_8_i3.jpg";
import boat_wavecall_2 from "../assets/item-photos/boat_wavecall_2.jpg";
import boat_rockerz_450r from "../assets/item-photos/boat-rockerz-450r.jpg";
import bose_quitecomfort_45 from "./item-photos/bose_quitecomfort_45.jpg";
import firebolt_ninja from "./item-photos/firebolt_ninja.jpg";
import fossil_chronogrph from "./item-photos/fossil-chronograph.jpg";
import sony_wh_chc50 from "./item-photos/sony_wh_chc50.png";
import noise_twist from "./item-photos/noise-twist-round.jpg";
let data_product = [
    // Mobiles
    {
        id: 1,
         category: "Mobile",
         brand: "apple",
        image: apple13_128_mid,
        name: "Iphone 13(128GB) Midnight",
        // rom: 128,
        new_price: 52499,
        old_price: 62499,
    },
    {
        id: 2,
        category: "Mobile",
        brand: "apple",
        image: Iphone_15_128_Black,
        name: "Iphone 15(128GB) Black",
        rom: 128,
        new_price: 92499,
        old_price: 102499,
    },
    {
        id: 3,
         category: "Mobile",
         brand: "poco",
        image: Pococ55_128_6,
        name: "POCO C55 (6GB RAM)(128GB ROM)",
        rom: 128,
        ram: 6,
        new_price: 12499,
        old_price: 22499,
    },
    {
        id: 4,
        category: "Mobile",
        brand: "realme",
        image: Realme_Narzo_N53_128_8,
        name: "ReaLme Narzo N53 (128 GB ROM) (8GB RAM) ",
        rom: 128,
        ram: 8,
        new_price: 8499,
        old_price: 10499,
    },
    {
        id: 5,
        category: "Mobile",
        brand: "oneplus",
        image: Oneplus12R_Blue_16_256,
        name: "Oneplus12R (16GB RAM,256 ROM)Blue",
        rom: 256,
        ram: 16,
        new_price: 52499,
        old_price: 62499,
    },
    // Laptops
    {
        id: 6,
        category: "Laptop",
        brand: "acer",
        image: acer_aspire5_512_16_i5,
        name: "Acer Aspire 5 (512GB SSD, 16GB RAM, i5)",
        rom: 512,
        ram: 16,
        processor: "i5",
        new_price: 69999,
        old_price: 79999,
    },
    {
        id: 7,
        category: "Laptop",
        brand: "apple",
        image: apple_macbook_2023_36,
        name: "Apple MacBook Pro 2023 (512GB SSD, 36GB RAM)",
        rom: 512,
        ram: 36,
        new_price: 119999,
        old_price: 129999,
    },
    {
        id: 8,
        category: "Laptop",
        brand: "dell",
        image: dell_14_512_8_i2,
        name: "Dell Inspiron 14 (512GB SSD, 8GB RAM, i3)",
        rom: 512,
        ram: 8,
        processor: "i3",
        new_price: 44999,
        old_price: 40999,
    },
    {
        id: 9,
        category: "Laptop",
        brand: "hp",
        image: Hp_15s_512_8_i3,
        name: "HP 15s (512GB SSD, 8GB RAM, i3)",
        rom: 512,
        ram: 8,
        processor: "i3",
        new_price: 44999,
        old_price: 48999,
    },
    // Wearables
    {
        id: 10,
        category: "Wearable",
        brand: "boat",
        image: boat_wavecall_2,
        name: "Boat Wavecall 2 True Wireless Earbuds",
        new_price: 1099,
        old_price: 1299,
    },
    {
        id: 11,
        category: "Wearable",
        brand: "boat",
        image: boat_rockerz_450r,
        name: "Boat Rockerz 450R Bluetooth Headphones",
        new_price: 1399,
        old_price: 1699,
    },
    {
        id: 12,
        category: "Wearable",
        brand: "bose",
        image: bose_quitecomfort_45,
        name: "Bose QuiteComfort 45 Wireless Headphones",
        new_price: 24999,
        old_price: 27999,
    },
    {
        id: 13,
        category: "Wearable",
        brand: "firebolt",
        image: firebolt_ninja,
        name: "Firebolt Ninja Smartwatch",
        new_price: 3099,
        old_price: 3499,
    },
    {
        id: 14,
        category: "Wearable",
        brand: "sony",
        image: sony_wh_chc50,
        name: "Sony WH-CHC50 Wireless Headphones",
        new_price: 3999,
        old_price: 4499,
    },
    {
        id: 15,
        category: "Wearable",
        brand: "sony",
        image: noise_twist,
        name: "Noise Twist Watch",
        new_price: 999,
        old_price: 1499,
    },
    {
        id: 16,
        category: "Wearable",
        brand: "sony",
        image: fossil_chronogrph,
        name: "Fossil Chronograph Watch",
        new_price: 33999,
        old_price: 45499,
    },
];

export default data_product;
