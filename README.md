# British Columbia Ferry Finder

## Abstract
Ferry Finder provides up to date ferry schedules of ferry routes between the British Columbia Islands. Ferry finder is an easy to navigature interface providing details such as ferry capacity, possible cancellations, departure times, and more.

## Demonstration
![giff of ferry finder](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2FhMjYwMTI3YTdlOTE0YmU2Y2Q3Y2ViYjVhNTJhYWJlZGEyY2E4NCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/NvyGKnyTVjMbM7eK4g/giphy.gif)

## Context
This application was completed over 5 days as the final project of Module3 in [Turing School of Software and Design](https://turing.edu/)'s Front End Engineering program. The project was built to match the specifications of [this project rubric](https://frontend.turing.edu/projects/module-3/showcase.html), which required each student to select and implement a public API in an application that demonstrates everything learned the five weeks prior.

## Technologies used
- React
- Router
- Cypress
- Node.js
- Vercel
- PropTypes
- CSS
- JSX

## Deployed Pages
- [Ferry Finder App](https://ferry-finder.netlify.app/)

## Wins
-This application features a succint architecture, characterized by concise and well-organized code. The app component's state exclusively manages data retrieved from the API and handles errors, while child components access all relevant data through the parameters of their match objects. This design choice not only enhances readability but also streamlines the development process.
-Responsive Web Design
-React Router Integration

## Challenges
- The main challenge encountered during this project was identifying the best architectural structure. Initially, the App component stored all the data in its state and then passed it to the child components. However, this approach led to unpredictable bugs as the child components rendered before the App component could update its state and pass the data as props. This issue resulted in unexpected behavior and hindered the smooth functioning of the application.

## Improvements
-Some possible extensions in the future for this application could be
  - User reviews of ferries and routes
  - Additional API implementation of British Columbia public transportation or something adjacent 

## Installation
- using the terminal, clone the [Ferry Finder](https://github.com/priscillaapaxton/ferry-finder)
- `cd` into Ferry-Finder directory
- run `npm i`
- run `npm start`

## Contributor
- Priscilla Paxton [GitHub](https://github.com/priscillaapaxton) | [LinkedIn](https://www.linkedin.com/in/priscilla-paxton/)
