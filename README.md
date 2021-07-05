# Client Domain Coding challenge

This app contains a user interface that allows to view, add, edit and delete items from a list of soccer players
and exposes a CRUD interface for the operations.

## Tech stack

This project was bootstrapped with [Sapper template](https://sapper.svelte.dev/) using Typescript and SCSS and
we require you to use the same language when implementing new features.

## How to run it

-   Install the necessary dependencies running `npm install` or `yarn install`
-   Run the app in development mode with `npm run dev` or `yarn dev`, it will be located at [http://localhost:3000](http://localhost:3000)

## Task description

The app for the most part is written quite poorly and lacks features in multiple areas.
For this task you may choose any **2 areas** from the following list and improve them or concentrate on a 
**single area** and provide a solution you would be happy to ship to a production environment.
We recommend that you spend no more than 4 hours on the task.

-   **Styling and Components**

    For this part the goal is to add styles to the app as well as break it down into logical components.
    You are completely free to follow the patterns you prefer (vertical/horizontal scrolling, editor on the side/top/bottom/modal, ...),
    as long as you can justify your choices.
    The UI should be responsive in the _375px - 1280px_ range, roughly from mobile to mid-sized desktop.
    You are free to copy any existing layout, here are some examples:

    -   [Rewind: Player profile](https://dribbble.com/shots/5887071-Rewind-Player-profile/attachments)
    -   [Football Player Profile Light](https://dribbble.com/shots/5583141-Football-Player-Profile-Light)
    -   [Football player profile app](https://dribbble.com/shots/4148096-Football-player-profile-app)

-   **Functionality and Feedback**

    We provide you with a basic implementation of fetching existing players.
    Functionality to delete, add, or update a player is missing (currently any interactions with the buttons
    will throw an error). Some `TODO` items have already been added to the `MainContent` and `PlayerEditor` as
    starting points for improvement. The UI is expected to be resilient and address the common errors (ie: network error,
    invalid input, upload failed, …) and to communicate effectively any successful action.

-   **Testing**

    Two examples of tests are implemented: unit with [Jest](https://jestjs.io/en/) and DOM based
    via [Cypress](https://docs.cypress.io/), you can extend them and add any tests you see appropriate to test
    the happy path as well as any potential edge cases that you identify.

-   **New Feature - Login**

    This part consists of adding a new endpoint that will allow the user to login to the application. The player cards
    will then only be editable once a user is authenticated. It is entirely up to you to determine how to handle
    authentication (e.g. a session cookie set upon a successful request), as well as how to manage the shared state
    of a logged in user in the app (e.g. using [Sapper stores](https://sapper.svelte.dev/docs#Stores)). Please note that
    it is **not** necessary to update the existing endpoints to allow only authenticated users to update data.

### Suggestions

-   Try to write clean, maintainable and understandable code.
-   Follow the best practices.
-   Use the styling paradigm you feel more comfortable with (BEM, OOCSS, SMACSS, …).
-   We value pure functional code so the more effort you put into managing effects and state - the better.
-   Write unit tests where you feel they are necessary.
-   Make meaningful commits to track your progress.
-   Use semantic markup.
-   Pay attention to `aria` attributes were applicable.


## Delivery

Push your work to a private GitHub repository and give read access to [bluelabseu-bot](https://github.com/bluelabseu-bot) 
user. Afterwards, we will review the code and you will receive detailed feedback from us regarding your solution. 
We will also invite you to the next stage of the recruitment process if we are happy with your solution.

Note: if you have added any additional dependencies please make sure that they are local: no global dependency 
should be required besides Node.js.
