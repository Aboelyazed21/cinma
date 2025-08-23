// src/data/movies.ts

export interface Movie {
  id: number;
  title: string;
  titleAr: string;
  genre: string;
  year: number;
  rating: number;
  duration: string;
  poster: string;
  trailer: string;
  description: string;
  descriptionAr: string;
  category: string;
}

export const movies: Movie[] = [
  {
  id: 1,
  title: 'Spider-Man: No Way Home',
  titleAr: 'الرجل العنكبوت: لا طريق للعودة',
  genre: 'Action, Adventure, Sci-Fi',
  year: 2021,
  rating: 8.4,
  duration: '2h 28m',
  poster: 'https://media0084.elcinema.com/uploads/_315x420_a4e5ad03bb02f5ea56f70584b03e442f5e9e58ca79249ff9bc0fdb7f25d8052e.jpg',
  trailer: 'https://www.youtube.com/embed/JfVOs4VSpmA?autoplay=1',
  description: 'Spider-Man seeks help from Doctor Strange to make everyone forget his identity.',
  descriptionAr: 'يطلب الرجل العنكبوت المساعدة من الدكتور سترينج لجعل الجميع ينسون هويته.',
  category: 'action'
},

  {
  id: 2,
  title: 'The Batman',
  titleAr: 'باتمان',
  year: 2022,
  genre: 'Action, Crime, Drama',
  rating: 7.8,
  duration: '2h 56m',
  poster: 'https://img.youm7.com/ArticleImgs/2023/2/1/73610-WhatsApp-Image-2023-02-01-at-3.17.55-PM.jpeg',
  trailer: 'https://www.youtube.com/embed/mqqft2x_Aa4', // 🔹 لينك التريلر من يوتيوب
  description: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind cryptic clues.',
  descriptionAr: 'يغامر باتمان في العالم السفلي لمدينة غوثام عندما يترك قاتل سادي خلفه أدلة غامضة.',
  category: 'action'
},

 {
  id: 3,
  title: 'Fast & Furious 9',
  titleAr: 'السرعة والغضب 9',
  genre: 'Action, Crime, Thriller',
  year: 2021,
  rating: 5.2,
  duration: '2h 23m',
  poster: 'https://autozone-mag.com/storage/posts/2444-S7-fast-and-furious-9-voici-la-bande-annonce-181112.jpg',
  trailer: 'https://www.youtube.com/embed/FUK2kdPsBws?autoplay=1',
  description: 'Dom and his crew face the most lethal opponent they\'ve ever encountered.',
  descriptionAr: 'يواجه دوم وطاقمه الخصم الأكثر فتكاً الذي واجهوه على الإطلاق.',
  category: 'action'
},

{
  id: 4,
  title: 'John Wick: Chapter 4',
  titleAr: 'جون ويك: الفصل الرابع',
  genre: 'Action, Crime, Thriller',
  year: 2023,
  rating: 7.7,
  duration: '2h 49m',
  poster: 'https://blog.richersounds.com/wp-content/uploads/2023/04/review-john-wick-chapter-4-elevates-the-badass-action-franchise-to-a-new-level.jpg',
  trailer: 'https://www.youtube.com/embed/qEVUtrk8_B4?autoplay=1',
  description: 'John Wick uncovers a path to defeating The High Table.',
  descriptionAr: 'يكشف جون ويك عن طريق لهزيمة الطاولة العالية.',
  category: 'action'
},

{
  id: 5,
  title: 'The Shawshank Redemption',
  titleAr: 'الخلاص من شاوشانك',
  genre: 'Drama',
  year: 1994,
  rating: 9.3,
  duration: '2h 22m',
  poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  trailer: 'https://www.youtube.com/embed/PLl99DlL6b4?autoplay=1',
  description: 'Two imprisoned men bond over years, finding solace and eventual redemption.',
  descriptionAr: 'رجلان مسجونان يترابطان على مدى سنوات، يجدان العزاء والخلاص في النهاية.',
  category: 'drama'
},
{
  id: 6,
  title: 'Forrest Gump',
  titleAr: 'فورست غامب',
  genre: 'Drama, Romance',
  year: 1994,
  rating: 8.8,
  duration: '2h 22m',
  poster: 'https://i5.walmartimages.com/seo/Forrest-Gump-25th-Anniversary-Blu-ray_b6e28822-d145-465d-b36c-5e5f72e4f962.c777167a15d34d2c5aa11ed23f3b615c.jpeg',
  trailer: 'https://www.youtube.com/embed/bLvqoHBptjg?autoplay=1',
  description: 'The presidencies of Kennedy and Johnson, the Vietnam War, and more, seen through the eyes of Forrest Gump, a man with a low IQ but good intentions.',
  descriptionAr: 'رئاسة كينيدي وجونسون وحرب فيتنام وأكثر، من خلال عيون فورست غامب، رجل ذو معدل ذكاء منخفض لكنه صاحب نوايا طيبة.',
  category: 'drama'
},

  {
  id: 8,
  title: 'The Grand Budapest Hotel',
  titleAr: 'فندق بودابست الكبير',
  genre: 'Adventure, Comedy, Crime',
  year: 2014,
  rating: 8.1,
  duration: '1h 39m',
  poster: 'https://m.media-amazon.com/images/M/MV5BNjUzODY0NDA0N15BMl5BanBnXkFtZTgwMDc2OTI3MzE@._V1_.jpg',
  trailer: 'https://www.youtube.com/embed/1Fg5iWmQjwk?autoplay=1',
  description: 'A legendary concierge and his protégé embark on a quest involving the theft and recovery of a priceless Renaissance painting and the battle for a family fortune.',
  descriptionAr: 'بواب أسطوري وتلميذه يشرعان في مهمة تتعلق بسرقة لوحة عصر النهضة واستعادتها والمعركة على ثروة عائلية.',
  category: 'comedy'
},

  {
  id: 9,
  title: 'The Conjuring',
  titleAr: 'الاستدعاء',
  genre: 'Horror, Mystery, Thriller',
  year: 2013,
  rating: 7.5,
  duration: '1h 52m',
  poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg',
  trailer: 'https://www.youtube.com/embed/k10ETZ41q5o?autoplay=1',
  description: 'Paranormal investigators help a family terrorized by a dark presence.',
  descriptionAr: 'محققو الخوارق يساعدون عائلة ترهبها قوة مظلمة.',
  category: 'horror'
},
{
  id: 10,
  title: 'Dune',
  titleAr: 'الكثبان الرملية',
  genre: 'Adventure, Drama, Sci-Fi',
  year: 2021,
  rating: 8.0,
  duration: '2h 35m',
  poster: 'https://dunenovels.com/wp-content/uploads/2020/11/WindsofDune-2.jpg',
  trailer: 'https://www.youtube.com/embed/n9xhJrPXop4?autoplay=1',
  description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset.',
  descriptionAr: 'عائلة نبيلة تنخرط في حرب للسيطرة على أثمن أصول المجرة.',
  category: 'scifi'
},
{
  id: 11,
  title: 'Oppenheimer',
  titleAr: 'أوبنهايمر',
  genre: 'Biography, Drama, History',
  year: 2023,
  rating: 8.3,
  duration: '3h 0m',
  poster: 'https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  trailer: 'https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1',
  description: 'The story of American scientist J. Robert Oppenheimer and his role in developing the atomic bomb.',
  descriptionAr: 'قصة العالم الأمريكي ج. روبرت أوبنهايمر ودوره في تطوير القنبلة الذرية.',
  category: 'new'
},
{
  id: 12,
  title: 'Barbie',
  titleAr: 'باربي',
  genre: 'Adventure, Comedy, Fantasy',
  year: 2023,
  rating: 6.9,
  duration: '1h 54m',
  poster: 'https://m.media-amazon.com/images/M/MV5BNGY0ZjA3MzAtYjIwOS00NTk5LThmMzEtNjI0MmU4MzQ1NmRiXkEyXkFqcGdeQWFybm8@._V1_.jpg',
  trailer: 'https://www.youtube.com/embed/pBk4NYhWNMM?autoplay=1',
  description: 'Barbie and Ken are having the time of their lives in the colorful and perfect world of Barbie Land.',
  descriptionAr: 'باربي وكين يقضيان أفضل أوقاتهما في عالم باربي الملون والمثالي.',
  category: 'new'
},

  {
    id: 13,
    title: 'Inception',
    titleAr: 'استهلال',
    genre: 'Action, Adventure, Sci-Fi',
    year: 2010,
    rating: 8.8,
    duration: '2h 28m',
    poster: 'https://play-lh.googleusercontent.com/NjfL81YSoD8iEQCTqnWe-WSexFMNNghTulAOCNAbE76a1qraaZxH_Tc8oDh9Kzw9hlbAXS4P0C09pYc8Dg',
    trailer: 'https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
    descriptionAr: 'لص يسرق أسرار الشركات من خلال تقنية مشاركة الأحلام يُكلف بزرع فكرة بدلاً من سرقتها.',
    category: 'scifi'
  }
];

// دالة ترجع الأفلام حسب الكاتيجوري
export const getMoviesByCategory = (category: string) => {
  return movies.filter(movie => movie.category === category);
};

// دالة ترجع أفلام عشوائية
export const getRandomMovies = (count: number = 10) => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
