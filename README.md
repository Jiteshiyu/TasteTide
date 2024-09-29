# TasteTide

TasteTide is a recipe search app built with React.js that allows users to search for recipes and save their favorite ones.

![React](https://img.shields.io/badge/React-007ACC?style=for-the-badge&logo=react&logoColor=white)
![JSX](https://img.shields.io/badge/JSX-React%20Component-informational?style=for-the-badge&logo=react)
![Forkify](https://img.shields.io/badge/Forkify-Recipe%20App-FF6B00?style=for-the-badge&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Challenges and Learnings](#challenges-and-learnings)
- [Contributing](#contributing)

## Demo

You can view a live demo of the project [here](https://tastetide.netlify.app/).

## Features

- Search for recipes by ingredients.
- Save favorite recipes for easy access.
- View detailed information about each recipe.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- React (for building the UI)
- Context API (for state management)
- Tailwind CSS (for styling)
- Forkify API (for fetching recipe data)

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure that **Node.js** and **npm** are installed on your machine. If not, you can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/TasteTide.git
   cd TasteTide
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.

## How It Works

The TasteTide app uses an external API to fetch and display recipe data.

1. Fetching Recipe Data: The app send a GET request to the Forkify API, retrieving data such as recipe names, ingredients, and images.
2. Favorite Functionality: Users can add recipes to their favorites and view them on a separate page.
3. Displaying Data: The app shows a list of recipes based on the user's search query and allows for detailed views of each recipe.
4. Search Feature: Users can input ingredients to search for corresponding recipes.

## Future Improvements

- Add user authentication for personalized experiences.
- Implement a more advanced search functionality (e.g., by dietary restrictions).
- Improve the user interface with additional animations and graphics.
- Add error handling for failed API requests.

## Challenges and Learnings

- API Integration: Integrating the Forkify API presented challenges in handling asynchronous requests and state management.
- State Management: Utilizing the Context API for global state management helped streamline data flow throughout the app.
- Responsive Design: Ensuring a responsive layout across devices required careful use of Tailwind CSS utilities.

## Contributing

Contributions are welcome! If you have any ideas for new features or improvements, feel free to submit a pull request or open an issue.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## Support
If you liked the project, give it a 🌟 on the repo!

Connect with me:

[![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@YourName&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/YourLinkedIn/)
[![Github](https://img.shields.io/static/v1.svg?label=follow&message=@YourUsername&color=grey&logo=github&style=for-the-badge&logoColor=white&colorA=black)](https://www.github.com/YourUsername/)


