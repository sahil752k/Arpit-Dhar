export interface OriginalProduct {
  id: string;
  name: string;
  category: 'pulses' | 'spices' | 'seeds' | 'oil';
  categoryClass: string;
  description: string;
  price?: string;
  image: string;
}

export const originalProducts: OriginalProduct[] = [
  {
    id: 'chia-seeds',
    name: 'Chia seeds',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'Tiny, nutrient-dense seeds packed with fiber, protein, and omega-3 fatty acids, great for smoothies and puddings.',
    image: '/images/chia.png'
  },
  {
    id: 'akkha-udid',
    name: 'Akkha Udid',
    category: 'pulses',
    categoryClass: 'all pulses',
    description: 'A protein-rich pulse commonly used in dals and curries.',
    image: '/images/akkha-udid.png'
  },
  {
    id: 'tur-dal',
    name: 'Tur Dal',
    category: 'pulses',
    categoryClass: 'all pulses',
    description: 'A staple in Indian cuisine, used for making dal tadka and sambhar.',
    image: '/images/tur-dal.png'
  },
  {
    id: 'udad-dal',
    name: 'Udad Dal',
    category: 'pulses',
    categoryClass: 'all pulses',
    description: 'Used in making idlis, dosas, and various Indian dishes.',
    image: '/images/udad-dal.png'
  },
  {
    id: 'dhane',
    name: 'Dhane',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'Adds a citrusy flavor to curries, spice blends, and pickles.',
    price: '$17',
    image: '/images/dhane.png'
  },
  {
    id: 'jira',
    name: 'Jira',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'An aromatic spice used for tempering and flavoring various dishes.',
    price: '$17',
    image: '/images/jira.png'
  },
  {
    id: 'kalonji',
    name: 'Kalonji',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'Small black seeds with a slightly bitter taste, used in pickles and curries.',
    price: '$17',
    image: '/images/kalonji.png'
  },
  {
    id: 'mohari',
    name: 'Mohari',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'Adds a pungent flavor to dishes and is essential in Indian cooking.',
    price: '$17',
    image: '/images/mohari.png'
  },
  {
    id: 'red-chilli',
    name: 'Red Chilli Powder',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'Used to add spice and heat to various cuisines.',
    price: '$17',
    image: '/images/red-chilli.png'
  },
  {
    id: 'star-anise',
    name: 'Star Anise',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'A fragrant spice with a licorice-like flavor, commonly used in biryanis and masalas.',
    price: '$17',
    image: '/images/star-anise.png'
  },
  {
    id: 'pumpkin-seed-green',
    name: 'pumpkin Seed green',
    category: 'seeds',
    categoryClass: 'all seeds',
    description: 'A nutritious seed rich in protein, magnesium, and antioxidants.',
    price: '$18',
    image: '/images/pumpkin-seed-green.png'
  },
  {
    id: 'quinoa',
    name: 'Quinoa',
    category: 'seeds',
    categoryClass: 'all seeds',
    description: 'A high-protein, gluten-free grain often used as a rice substitute.',
    price: '$18',
    image: '/images/quinoa-seeds.png'
  },
  {
    id: 'peanuts',
    name: 'peanuts',
    category: 'seeds',
    categoryClass: 'all seeds',
    description: 'A rich source of protein and healthy fats, used in multiple dishes.',
    price: '$18',
    image: '/images/peanuts.png'
  },
  {
    id: 'coconut-sugar',
    name: 'Coconut Sugar',
    category: 'oil',
    categoryClass: 'all oil',
    description: 'A natural sweetener made from coconut palm sap, with a low glycemic index.',
    price: '$10',
    image: '/images/coconut-sugar.png'
  },
  {
    id: 'haldi-powder',
    name: 'Haldi powder',
    category: 'spices',
    categoryClass: 'all spices',
    description: 'A vibrant yellow spice known for its anti-inflammatory properties.',
    price: '$15',
    image: '/images/haldi.png'
  },
  {
    id: 'bajra',
    name: 'Bajra',
    category: 'pulses',
    categoryClass: 'all pulses',
    description: 'A nutritious dal often used in soups and stews.',
    price: '$12',
    image: '/images/bajra-dal.png'
  },
  {
    id: 'mug-dal',
    name: 'Mug Dal',
    category: 'pulses',
    categoryClass: 'all pulses',
    description: 'A light and easily digestible dal used in Indian cooking.',
    price: '$14',
    image: '/images/mug-dal.png'
  },
  {
    id: 'pumpkin-seed-white',
    name: 'Pumpkin Seed White',
    category: 'seeds',
    categoryClass: 'all seeds',
    description: 'A crunchy, protein-rich snack that is also great for baking.',
    price: '$10',
    image: '/images/pumpkin-seed-white.png'
  }
];
