# Previously On

This is a React project integrated with the [BetaSeries API](https://developers.betaseries.com/), designed to provide a seamless experience for managing and discovering TV shows and movies. While the project can run without a Node.js server, incorporating Node.js significantly enhances performance. The difference is noticeable—enabling Node.js offers faster response times, better handling of API requests, and overall smoother interactions. Once you see it in action, the performance boost will be clear.

## Key Features

- **React-based Frontend**: Provides a modern, responsive user interface for interacting with the BetaSeries API.
- **BetaSeries API Integration**: Fetch and manage data related to TV shows and movies.
- **Optional Node.js Backend**: While the project can run without a backend, adding a Node.js server improves API handling, caching, and reduces client-side workload.

## Why Use Node.js?

Running the project with Node.js adds an extra layer of optimization:

- **Improved API Request Handling**: Node.js helps streamline communication with the BetaSeries API, reducing the latency for data retrieval.
- **Better Performance**: Offloading some processes to a Node.js server takes the strain off the frontend, providing a faster, smoother experience.
- **Scalability**: Ideal if you plan to extend the project in the future, such as adding a database or additional features.

## Getting Started

### Clone the repository:
```bash
git clone git@github.com:Kaneki-Ken993/Previously-On.git
```

### Create a `.env` file

Add the variable `API_KEY` which you can get from the BetaSeries API website after signing up [here](https://www.betaseries.com/) and choosing the API tab.

### Install dependencies:
```bash
npm install
```

### Start the React project:
```bash
npm run dev
```

### Running the project:
```bash
cd server 
npm run start
```
