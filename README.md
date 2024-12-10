# React useEffect Hook Missing Cleanup Function
This example demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function for asynchronous operations.  This can lead to memory leaks and unexpected behavior, especially when components are unmounted before the asynchronous operation completes.

The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the behavior of the component, and the issues caused by improper cleanup.  (Open your browser's developer tools to watch the console)