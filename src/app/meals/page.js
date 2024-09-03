import Head from 'next/head';
import MealCard from '@/components/MealCard/MealCard';
import Link from 'next/link';

const Meals = () => {
  const meals = [
    {
        id: "1",
      image: '/bannerimg1.jpg', // Make sure the path is correct
      category: 'Appetizer',
      name: 'Spring Rolls',
      price: '5.99',
    },
    {
        id: "2",
      image: '/bannerimg1.jpg',
      category: 'Main Course',
      name: 'Grilled Chicken',
      price: '12.99',
    },{
        id: "3",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "4",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "5",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "6",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "7",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "8",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "9",
        image: '/bannerimg2.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "10",
        image: '/bannerimg3.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "11",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "12",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "13",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },{
        id: "14",
        image: '/bannerimg1.jpg',
        category: 'Main Course',
        name: 'Grilled Chicken',
        price: '12.99',
      },
    // Add more meals as needed
  ];

  return (
    <div>
      <Head>
        <title>Meal Cards</title>
        <meta name="description" content="Responsive meal cards using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold  text-gray-800 text-center mb-8">Our Delicious Meals</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {meals.map((meal, index) => (
            <Link key={meal.id} href={`/meals/${meal.id}`} >
            <MealCard
              image={meal.image}
              category={meal.category}
              name={meal.name}
              price={meal.price}
            />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Meals;
