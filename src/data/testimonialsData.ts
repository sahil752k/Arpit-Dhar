import { Testimonial, UserComment } from '../types';

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Pooja Deshmukh',
    role: 'Home Chef & Food Blogger',
    location: 'Pune, Maharashtra',
    comment: 'The aroma of Mother Farm’s Tur Dal and Jira is incomparable! You can immediately tell they don’t use artificial polishing oils. The dal cooks into such a silky, flavorful texture with half the pressure cook whistles.',
    rating: 5,
    avatar: '/images/client1.jpg',
    verified: true,
    date: 'March 2026'
  },
  {
    id: 't-2',
    name: 'Rajesh Sharma',
    role: 'Organic Store Owner',
    location: 'Mumbai, Maharashtra',
    comment: 'We have been sourcing unpolished pulses and raw chia seeds from MOTHERFARM TRADING for 6 months now. Our retail customers constantly ask for repeat orders because the quality is consistently top tier.',
    rating: 5,
    avatar: '/images/client2.jpg',
    verified: true,
    date: 'February 2026'
  },
  {
    id: 't-3',
    name: 'Sunita Patil',
    role: 'Fitness Enthusiast & Mother',
    location: 'Nagpur, Maharashtra',
    comment: 'Their green pumpkin seeds and quinoa are super fresh and clean. Zero dust, zero stones, just pure honest farm produce. Highly recommended for every health-conscious home!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    verified: true,
    date: 'January 2026'
  },
  {
    id: 't-4',
    name: 'Dr. Anand Kulkarni',
    role: 'Ayurvedic Practitioner',
    location: 'Washim, Maharashtra',
    comment: 'Knowing Mahesh and the team personally, I can attest to their commitment to soil health and natural farming. Their haldi (turmeric) has authentic high curcumin potency and deep earthy flavor.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verified: true,
    date: 'April 2026'
  }
];

export const initialComments: UserComment[] = [
  {
    id: 'c-1',
    userName: 'Kavita Joshi',
    userComment: 'Received my box of spices and lentils today! Packaging was airtight and completely eco-conscious. The Red Chilli powder has such a rich natural color without any harsh chemicals.',
    userAvatar: 'https://ui-avatars.com/api/?name=Kavita+Joshi&background=15803d&color=fff',
    rating: 5,
    timestamp: Date.now() - 86400000 * 2
  },
  {
    id: 'c-2',
    userName: 'Vikram Gaikwad',
    userComment: 'Akkha Udid from Motherfarm makes the best Dal Makhani. The freshness is noticeable from the first whistle.',
    userAvatar: 'https://ui-avatars.com/api/?name=Vikram+Gaikwad&background=b45309&color=fff',
    rating: 5,
    timestamp: Date.now() - 86400000 * 4
  },
  {
    id: 'c-3',
    userName: 'Meera Sengupta',
    userComment: 'Ordered the combo pack of seeds (Chia, Pumpkin & Quinoa). Outstanding quality and very reasonable prices compared to city supermarkets.',
    userAvatar: 'https://ui-avatars.com/api/?name=Meera+Sengupta&background=047857&color=fff',
    rating: 5,
    timestamp: Date.now() - 86400000 * 7
  }
];
