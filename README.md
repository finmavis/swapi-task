# Star Wars Movie / SWAPI API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi.co).<br>
To see this project in action, go to [Demo Star Wars](https://finmavis.github.io/swapi-task)

## Getting Started

Clone this repo :
`git clone https://github.com/finmavis/swapi-task.git`

Navigate to the root folder and install all dependencies :

- `yarn` or `npm install`

Start Development Mode :

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint` or `yarn lint`

To check javascript linting rules.

### `npm run format` or `yarn format`

To format or prettier codebase using `Prettier`.

## Folder Structure

```
|-- src/
    |-- components/
    |-- shared/
        |-- assets/
            |-- fonts/
            |-- icon/
            |-- images/
        |-- components/
            |-- Loader/
        |-- constants/
        |-- helpers/
        |-- hooks/
        |-- styles/
            |-- base/
            |-- themes/
    |-- App.js
    |-- index.js
    |-- serviceWorker.js
    |-- setupTests.js
```

- `components` : Folder to put all non shared Component
- `shared/assets` : Folder to put assets like fonts, icons and images
- `shared/components`: Folder to put all shared Component
- `shared/constants` : Folder to put all of ours constant like `api url`, `mock`, `action types` and all others constant data that dont changed
- `shared/helpers` : Folder to put our helpers function like Consume API and formating data or others helpers
- `shared/hooks` : Folder to put all of ours custom hooks/logic for component
- `styles` : Folder to put our Styled Component that reusable

## Style Utilities

### Relative Unit

This project using relative unit based 10px. so you can use `1rem` which means `10px` propeties in css to help ours styling more easier handling Resposive.

### Grid

This project using Grid System which is using 3 Column because based on Content/Data, we only need 3 Column. This Grid system i made it myself using Flexbox. You can find `Grid` file in `src/shared/styles/base/grid.js`. This `Grid` system contain `Container`, `Row` and `Col`.<br>

- How to use it

  ```
  import { Container, Row, Col } from 'path/to/grid/file';

  <Container>
    <Row>
      <Col>Column 1</Col>
      <Col>Column 2</Col>
      <Col>Column 3</Col>
    </Row>
  <Container>
  ```

  or if you only want to use `Container`, well, you dont have to import `Row` and `Col`. but if you want to use `Col` you must wrap with `Container` and `Row`.

  ```
  import { Container, Row, Col } from 'path/to/grid/file';

  <Container>
    <YourComponentHere />
  <Container>
  ```

* Custom Grid<br>
  Also you can modify `Container`, `Row` or `Col` to achieve something that this `Grid` cannot do, or you want to add some value or edit some value.

  ```
  import styled from 'styled-components';
  import { Col } from 'path/to/grid/file';

  const YourCustomComponent = styled(Col)`
    background: orangered;
  `;

  <Container>
    <Row>
      <YourCustomComponent>Column 1</YourCustomComponent>
      <YourCustomComponent>Column 2</YourCustomComponent>
      <YourCustomComponent>Column 3</YourCustomComponent>
    </Row>
  <Container>
  ```

### Media Queries

#### Relative Unit

| State           | Properties  |
| --------------- | ----------- |
| Default         | 1rem = 10px |
| max-width 768px | 1rem = 9px  |
| max-width 576px | 1rem = 8px  |

#### Container

| State            | Properties     |
| ---------------- | -------------- |
| Default          | width = 100%   |
| min-width 576px  | width = 540px  |
| min-width 768px  | width = 720px  |
| min-width 992px  | width = 960px  |
| min-width 1200px | width = 1140px |

#### Column

| State           | Numbers of Column in Row |
| --------------- | ------------------------ |
| Default         | 1                        |
| min-width 768px | 2                        |
| min-width 992px | 3                        |
