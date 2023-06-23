# MovieDiscoveryApp

The application allow user to search for movies, view movie details, filters movies based on genre and save movies to favorites collection.



## Technology

**Client:** React, TypeScript, Redux

**Server:** TMDB public APIs

**Other libraries:**

- [prettier](https://www.npmjs.com/package/prettier)
- [eslint](https://www.npmjs.com/package/eslint)
- [styled-components](https://www.npmjs.com/package/styled-components)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom/v/6.6.2)
- [moment](https://www.npmjs.com/package/moment)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-spinners](https://www.davidhu.io/react-spinners/)
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
- [jest](https://www.npmjs.com/package/jest)
- [aos](https://www.npmjs.com/package/aos)

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/djolodjolovista/MovieDiscoveryApp.git
```

2. Go to the project directory

```bash
  cd MovieDiscoveryApp/client
```

3. Install dependencies

```bash
  npm install
```

4. Add .env file <br />
-Explained in the **Environment Variables** chapter

5. Start the server

```bash
  npm start
```


## Environment Variables
First go to root folder *client*. There is an *.env.example* in the project, we create an *.env* file based on it.

REACT_APP_API_KEY:
`809137eea8553f11200c5303277c6759`

REACT_APP_BASE_URL:
`https://api.themoviedb.org/3`

REACT_APP_ACCOUNT_ID: `19935150`

REACT_APP_SESSION_ID: `f156879aa59bffcc43ae7a3dedb0735ff3f5cdb5`


After adding the *.env* file, you need to restart the IDE (Visual Studio)

## Running Tests

First go to *client* folder

```bash
  cd MovieDiscoveryApp/client
```

To run tests, run the following command

```bash
  npm test
```

A menu with options is displayed, to run all tests enter

```bash
  a
```


## Screenshots

![App Screenshot](https://i.ibb.co/SdZvN77/Snimak-ekrana-2023-06-22-015443.png)

![Movie Card Details Screenshot](https://i.ibb.co/3MHZ4RF/Snimak-ekrana-2023-06-22-015656.png)

![Search Movie Cards Screenshot](https://i.ibb.co/ccjLhp9/Snimak-ekrana-2023-06-22-015546.png)

![Hover Movie Card Screenshot](https://i.ibb.co/pfTLrGV/Snimak-ekrana-2023-06-22-015629.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
