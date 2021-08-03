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


### Responsiveness
There are only one breakpoint to test in mobile and its at 500px. There are no more intermediate steps.


## Unit testing

-  Very basic Jest testing due to lack of time but it actually showed me an inconsistency with the name of my component:

```
test('renders content', () => {
    const endpoint = {
       url: "/hp-characters"
    }

    const component = render(<useFetch url={endpoint} />)
    console.log(component);
})
```
---
```
 PASS  src/Note.test.js
  ✓ renders content (67 ms)

  console.error
    Warning: <useFetch /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
    at useFetch
```

## What I like the most

This exercise made me learn more and faster than in the last 3 months.

## Given the time, things I could have done better

-  Had I had more time, I would have fixed the insertion of the data to include in the 'Students' and 'Staff' endpoint and not only in the 'Characters' one. 
-  Small details in the Mobile styles
-  Mostly the Redux capabilities. This is my main regret. -- UPDATE -- Since the official delivery of the app, I kept working on it and now is functioning the Redux store to add favorites using a slice method in the action in order to only have a maximum of 5 items. 

## Describing any Pain Point or Bug and its solution.

-  When first fetching the db.json file, there was an error: \
### TypeError: Cannot read property 'map' of null
The students list is passed as a prop to the map function in StudentsList component and when trying to map it, the little fraction of time it takes to get the data it causes to still show the initialState of 'students' state, which is null. So to avoid this I used a form of "Conditional Templating" like this:
```
{students && <StudentsList students = {students} />}
```
This way the second part after the '&&' will evaluate only if the first part (students) is true. :+1:

-  When trying to insert data into db.json, I thought there was a CROSS ORIGIN (CORS) error. But the actual problem was that the data had no id's, which are needed in order to let us add data. 

-  The Redux functionality... Couldn't finish it. I had to learn it alongside but wasn't capable of add nor delete to the state. 

---

# Final words

- This was a huge learning experience and I had a lot of fun and sure I'm going to improve this exercise eventually. In any case, I want to thank you for giving some time to read this notes.

Best regards.

---

Esta fue una increíble experiencia de aprendizaje y me divertí mucho al realizarla. Seguro volvere a terminarla pronto. En cualquier caso muchas gracias por tomarse el tiempo de revisar estas notas. 

Saludos cordiales

Marco Antonio Sosa Rosales.
