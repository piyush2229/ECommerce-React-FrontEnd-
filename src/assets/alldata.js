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
import samsung_galaxy_a25 from './new_collection_items/a25.jpg'
import Iphone_14_256_Red from './new_collection_items/iphone14.jpg'
import Oneplus13_Pro_512_12 from './new_collection_items/13r+pro.jpg'
import Xiaomi_Redmi_10_128_6 from './new_collection_items/redmi10.jpg'
import vivo_y73s_128_8 from './new_collection_items/vivoy73.jpg'
import lenovo_thinkpad_e14_512_8_i3 from './new_collection_items/thinkpade14.jpg'
import dell_inspiron_15_256_4_i3 from './new_collection_items/dell15.jpg'
import asus_vivobook_15_512_12_i5 from './new_collection_items/vivobook15.jpg'
import boat_airpods_141 from './new_collection_items/141boat.jpg'
import jbl_tune_750btnc from './new_collection_items/jbl_tune.jpg'
import amazfit_gts_3 from './new_collection_items/amazfit.jpg'
import beats_solo3_wireless from './new_collection_items/eats_solo3.jpg'
import fossil_hybrid_hr from './new_collection_items/fossil_hybrid.jpg'
import samsung_galaxy_a52 from './new_collection_items/SamsungA52.jpg'
import fitbit_charge5 from './new_collection_items/fitbit_charge.jpg'
import mi_band_7 from './new_collection_items/fitband.jpg'

let alldata = [
    // Mobiles
    {
        id: 1,
         category: "Mobile",
         brand: "Apple",
        image: apple13_128_mid,
        name: "Iphone 13(128GB) Midnight",
        // rom: 128,
        new_price: 52499,
        old_price: 62499,
    },
    {
        id: 2,
        category: "Mobile",
        brand: "Apple",
        image: Iphone_15_128_Black,
        name: "Iphone 15(128GB) Black",
        rom: 128,
        new_price: 92499,
        old_price: 102499,
    },
    {
        id: 3,
         category: "Mobile",
         brand: "Poco",
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
        brand: "Realme",
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
        brand: "Oneplus",
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
        brand: "Acer",
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
        brand: "Apple",
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
        brand: "Dell",
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
        brand: "Hp",
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
        category: "Wearables",
        brand: "Boat",
        image: boat_wavecall_2,
        name: "Boat Wavecall 2 True Wireless Earbuds",
        new_price: 1099,
        old_price: 1299,
    },
    {
        id: 11,
        category: "Wearables",
        brand: "Boat",
        image: boat_rockerz_450r,
        name: "Boat Rockerz 450R Bluetooth Headphones",
        new_price: 1399,
        old_price: 1699,
    },
    {
        id: 12,
        category: "Wearables",
        brand: "Bose",
        image: bose_quitecomfort_45,
        name: "Bose QuiteComfort 45 Wireless Headphones",
        new_price: 24999,
        old_price: 27999,
    },
    {
        id: 13,
        category: "Wearables",
        brand: "FireBolt",
        image: firebolt_ninja,
        name: "Firebolt Ninja Smartwatch",
        new_price: 3099,
        old_price: 3499,
    },
    {
        id: 14,
        category: "Wearables",
        brand: "Sony",
        image: sony_wh_chc50,
        name: "Sony WH-CHC50 Wireless Headphones",
        new_price: 3999,
        old_price: 4499,
    },
    {
        id: 15,
        category: "Wearables",
        brand: "Noise",
        image: noise_twist,
        name: "Noise Twist Watch",
        new_price: 999,
        old_price: 1499,
    },
    {
        id: 16,
        category: "Wearables",
        brand: "Fossil",
        image: fossil_chronogrph,
        name: "Fossil Chronograph Watch",
        new_price: 33999,
        old_price: 45499,
    },
    {
        id: 17,
        category: "Mobile",
        brand: "Samsung",
        image: samsung_galaxy_a25,
        name: "Samsung Galaxy A25",
        rom: 256,
        ram: 8,
        new_price: 35999,
        old_price: 39999,
    },
    {
        id: 18,
        category: "Mobile",
        brand: "Apple",
        image: Iphone_14_256_Red,
        name: "Iphone 14 (256GB) Red",
        rom: 256,
        new_price: 76999,
        old_price: 79999,
    },
    {
        id: 19,
        category: "Mobile",
        brand: "Oneplus",
        image: Oneplus13_Pro_512_12,
        name: "Oneplus 13 Pro (512GB ROM) (12GB RAM)",
        rom: 512,
        ram: 12,
        new_price: 74999,
        old_price: 84999,
    },
    {
        id: 20,
        category: "Mobile",
        brand: "Xiaomi",
        image: Xiaomi_Redmi_10_128_6,
        name: "Xiaomi Redmi 10 (128GB ROM) (6GB RAM)",
        rom: 128,
        ram: 6,
        new_price: 14999,
        old_price: 16999,
    },
    {
        id: 21,
        category: "Mobile",
        brand: "Vivo",
        image: vivo_y73s_128_8,
        name: "Vivo Y73s (128GB ROM) (8GB RAM)",
        rom: 128,
        ram: 8,
        new_price: 20999,
        old_price: 22999,
    },
    // Laptops
    {
        id: 22,
        category: "Laptop",
        brand: "Lenovo",
        image: lenovo_thinkpad_e14_512_8_i3,
        name: "Lenovo ThinkPad E14 (512GB SSD, 8GB RAM, i3)",
        rom: 512,
        ram: 8,
        processor: "i3",
        new_price: 54999,
        old_price: 59999,
    },
    {
        id: 23,
        category: "Laptop",
        brand: "Asus",
        image: asus_vivobook_15_512_12_i5,
        name: "Asus VivoBook 15 (512GB SSD, 12GB RAM, i5)",
        rom: 512,
        ram: 12,
        processor: "i5",
        new_price: 64999,
        old_price: 69999,
    },
    {
        id: 24,
        category: "Laptop",
        brand: "Dell",
        image: dell_inspiron_15_256_4_i3,
        name: "Dell Inspiron 15 (256GB SSD, 4GB RAM, i3)",
        rom: 256,
        ram: 4,
        processor: "i3",
        new_price: 37999,
        old_price: 42999,
    },
    // Wearabless
    {
        id: 25,
        category: "Wearables",
        brand: "Boat",
        image: boat_airpods_141,
        name: "Boat Airpods 141 True Wireless Earbuds",
        new_price: 1299,
        old_price: 1499,
    },
    {
        id: 26,
        category: "Wearables",
        brand: "Jbl",
        image: jbl_tune_750btnc,
        name: "JBL Tune 750BTNC Bluetooth Headphones",
        new_price: 3999,
        old_price: 4999,
    },
    {
        id: 27,
        category: "Wearables",
        brand: "Beats",
        image: beats_solo3_wireless,
        name: "Beats Solo3 Wireless Headphones",
        new_price: 19999,
        old_price: 22999,
    },
    {
        id: 28,
        category: "Wearables",
        brand: "Fitbit",
        image: fitbit_charge5,
        name: "Fitbit Charge 5 Fitness Tracker",
        new_price: 11999,
        old_price: 13999,
    },
    {
        id: 29,
        category: "Wearables",
        brand: "Amazfit",
        image: amazfit_gts_3,
        name: "Amazfit GTS 3 Smartwatch",
        new_price: 15999,
        old_price: 17999,
    },
    {
        id: 30,
        category: "Wearables",
        brand: "Mi",
        image: mi_band_7,
        name: "Mi Band 7 Fitness Tracker",
        new_price: 2999,
        old_price: 3499,
    },
    {
        id: 31,
        category: "Wearables",
        brand: "fossil",
        image: fossil_hybrid_hr,
        name: "Fossil Hybrid HR Smartwatch",
        new_price: 10999,
        old_price: 12999,
    },
    {
        id: 32,
        category: "Mobile",
        brand: "Samsung",
        image: samsung_galaxy_a52,
        name: "Samsung Galaxy A52",
        rom: 256,
        ram: 8,
        new_price: 35999,
        old_price: 39999,
    }
];

export default alldata;
