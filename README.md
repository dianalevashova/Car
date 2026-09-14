RentalCar

A car rental catalog web app built with Next.js. Users can browse available cars, filter them by brand, price, and mileage, view detailed specifications for each car, and submit a booking request.

Live demo: car-xi-six.vercel.app

Features
Home page - hero banner with a call-to-action leading to the catalog
Catalog page - browsable list of cars with:
Filters: brand, price per hour, mileage range (from/to)
"Load more" pagination (infinite loading, 4 cars per page)
Car details page - full specifications, rental conditions, features list, and a booking request form
Booking form - sends name, email, and comment to the API for a specific car
Responsive layout, optimized images via next/image
Tech Stack
Next.js (App Router)
TypeScript
CSS Modules
TanStack React Query - useQuery / useInfiniteQuery for data fetching and caching
Axios - API requests
react-icons
Manrope font via next/font/google
modern-normalize - CSS reset
Getting Started
Prerequisites
Node.js 18+
npm
Installation
```bash git clone https://github.com/dianalevashova/Car.git cd Car/my-app npm install ```

Environment Variables
Create a .env.local file in the project root:

Run the development server
```bash npm run dev ```

Open http://localhost:3000 in your browser.

Build for production
```bash npm run build npm run start ```

