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


let data_new_collection = [
    // Mobiles
    {
        id: 1,
        category: "Mobile",
        brand: "samsung",
        image: samsung_galaxy_a25,
        name: "Samsung Galaxy A25",
        rom: 256,
        ram: 8,
        new_price: 35999,
        old_price: 39999,
    },
    {
        id: 2,
        category: "Mobile",
        brand: "apple",
        image: Iphone_14_256_Red,
        name: "Iphone 14 (256GB) Red",
        rom: 256,
        new_price: 76999,
        old_price: 79999,
    },
    {
        id: 3,
        category: "Mobile",
        brand: "oneplus",
        image: Oneplus13_Pro_512_12,
        name: "Oneplus 13 Pro (512GB ROM) (12GB RAM)",
        rom: 512,
        ram: 12,
        new_price: 74999,
        old_price: 84999,
    },
    {
        id: 4,
        category: "Mobile",
        brand: "xiaomi",
        image: Xiaomi_Redmi_10_128_6,
        name: "Xiaomi Redmi 10 (128GB ROM) (6GB RAM)",
        rom: 128,
        ram: 6,
        new_price: 14999,
        old_price: 16999,
    },
    {
        id: 5,
        category: "Mobile",
        brand: "vivo",
        image: vivo_y73s_128_8,
        name: "Vivo Y73s (128GB ROM) (8GB RAM)",
        rom: 128,
        ram: 8,
        new_price: 20999,
        old_price: 22999,
    },
    // Laptops
    {
        id: 6,
        category: "Laptop",
        brand: "lenovo",
        image: lenovo_thinkpad_e14_512_8_i3,
        name: "Lenovo ThinkPad E14 (512GB SSD, 8GB RAM, i3)",
        rom: 512,
        ram: 8,
        processor: "i3",
        new_price: 54999,
        old_price: 59999,
    },
    {
        id: 7,
        category: "Laptop",
        brand: "asus",
        image: asus_vivobook_15_512_12_i5,
        name: "Asus VivoBook 15 (512GB SSD, 12GB RAM, i5)",
        rom: 512,
        ram: 12,
        processor: "i5",
        new_price: 64999,
        old_price: 69999,
    },
    {
        id: 8,
        category: "Laptop",
        brand: "dell",
        image: dell_inspiron_15_256_4_i3,
        name: "Dell Inspiron 15 (256GB SSD, 4GB RAM, i3)",
        rom: 256,
        ram: 4,
        processor: "i3",
        new_price: 37999,
        old_price: 42999,
    },
    // Wearables
    {
        id: 9,
        category: "Wearable",
        brand: "boat",
        image: boat_airpods_141,
        name: "Boat Airpods 141 True Wireless Earbuds",
        new_price: 1299,
        old_price: 1499,
    },
    {
        id: 10,
        category: "Wearable",
        brand: "jbl",
        image: jbl_tune_750btnc,
        name: "JBL Tune 750BTNC Bluetooth Headphones",
        new_price: 3999,
        old_price: 4999,
    },
    {
        id: 11,
        category: "Wearable",
        brand: "beats",
        image: beats_solo3_wireless,
        name: "Beats Solo3 Wireless Headphones",
        new_price: 19999,
        old_price: 22999,
    },
    {
        id: 12,
        category: "Wearable",
        brand: "fitbit",
        image: fitbit_charge5,
        name: "Fitbit Charge 5 Fitness Tracker",
        new_price: 11999,
        old_price: 13999,
    },
    {
        id: 13,
        category: "Wearable",
        brand: "amazfit",
        image: amazfit_gts_3,
        name: "Amazfit GTS 3 Smartwatch",
        new_price: 15999,
        old_price: 17999,
    },
    {
        id: 14,
        category: "Wearable",
        brand: "mi",
        image: mi_band_7,
        name: "Mi Band 7 Fitness Tracker",
        new_price: 2999,
        old_price: 3499,
    },
    {
        id: 15,
        category: "Wearable",
        brand: "fossil",
        image: fossil_hybrid_hr,
        name: "Fossil Hybrid HR Smartwatch",
        new_price: 10999,
        old_price: 12999,
    },
    {
        id: 16,
        category: "Mobile",
        brand: "samsung",
        image: samsung_galaxy_a52,
        name: "Samsung Galaxy A52",
        rom: 256,
        ram: 8,
        new_price: 35999,
        old_price: 39999,
    }
];

export default data_new_collection;
