# React Workshop

This project was built during a workshop to demonstrate the basic use of [React Router](https://reactrouter.com/docs/en/v6) for navigation in a React app.

## To run the project on your local

- Clone the repo `git clone git@github.com:johnotu/react-workshop.git` (SSH) OR `git clone https://github.com/johnotu/react-workshop.git` (HTTPS)

- Change into the project directory `cd react-workshop`

- Install dependencies `npm install` OR `yarn` depending on the package manager you are using.

- Start the app `npm start` OR `yarn start`

The app should be running on the browser at [http://localhost:3000](http://localhost:3000) or any opther port that was assigned when it launched.

## Assignments

- Use query parameters (rather than url parameters) to display the details of a star wars person on the Person page. For instance, rather than use `/people/1` to display Luke Skywalker's details, use `/people?id=1`. **Hint**: Read up [React Router's useSearchParams](https://reactrouter.com/docs/en/v6/hooks/use-search-params)
- Display a Loading component while data is being fetched on the Person page. It doesn't have to be fancy but functional. It can be a simple `div` element that displays "Loading..." while person data is being fetched.

To submit, commit and push your changes to a new branch using the branch naming format `assignment/1/<FIRST_NAME-LAST_NAME>`. For example, a valid submission would be in a branch named **assignment/1/john-otu**
