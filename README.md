# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the app

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Opens [http://localhost:3000](http://localhost:3000) in the browser. Concurrently, it launches json-server's mocked API in [http://localhost:3030](http://localhost:3030).

## JSON files provided

The files provided were compiled in a unique db.json file in the root directory. Each endpoint is accesible through its corresponding url:

- http://localhost:3030/hp-characters
- http://localhost:3030/hp-gryffindor
- http://localhost:3030/hp-staff
- http://localhost:3030/hp-students


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Unit testing

## What I like the most

## Given the time, things I could have done better

## Describing any Pain Point or Bug and its solution.

-  When first fetching the db.json file, there was an error: \
### TypeError: Cannot read property 'map' of null
The students list is passed as a prop to the map function in StudentsList component and when trying to map it, the little fraction of time it takes to get the data it causes to still show the initialState of 'students' state, which is null. So to avoid this I used a form of "Conditional Templating" like this:
```
{students && <StudentsList students = {students} />}
```
This way the second part after the '&&' will evaluate only if the first part (students) is true. :+1:

-  When trying to insert data into db.json, I thought there was a CROSS ORIGIN (CORS) error. But the actual problem was that the data had no id's, which are needed in order to let us add data. 