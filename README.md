# Star Wars Movie

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi.co).

## Getting Started

Clone this repo : 
```git clone https://github.com/finmavis/tmdb-clone.git```

Navigate to the root folder and install all dependencies :
- [Yarn](https://yarnpkg.com) : `yarn install`
- [NPM](https://yarnpkg.com) : `npm install`

Start Development Mode :
- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Folder Structure
```
src/
  component/
    assets/
      images/
    styles/
  container/
  helpers/
  App.js
  App.test.js
  index.css
  index.js
```

- `component` : Folder to put Stateless Component
  - `assets` : Folder to put assets like images
  - `styles` : Folder to put our Styled Component that reusable
- `contaner` : Folder to put our Statefull Component
- `helpers` : Folder to put our helpers function like Consume API and formating data or others helpers

## Style Utilities

### Relative Unit
This project using relative unit based 10px. so you can use `1rem` which means `10px` propeties in css to help ours styling more easier handling Resposive.

### Grid

This project using Grid System which is using 3 Column because based on Content/Data, we only need 3 Column. This Grid system i made it myself using Flexbox. You can find `Grid` file in `src/component/Grid.js`. This `Grid` system contain `Container`, `Row` and `Col`.<br>

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

- Custom Grid
  Also you can modify `Container`, `Row` or `Col` to achieve something that this `Grid` cant do, or you want to add some value or edit some value;

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
  State | Properties
  ------------ | -------------
  Default | 1rem = 10px
  max-width 768px | 1rem = 9px
  max-width 576px | 1rem = 8px

  #### Container

  State | Properties
  ------------ | -------------
  Default | width = 100%
  min-width 576px | width = 540px
  min-width 768px | width = 720px
  min-width 992px | width = 960px
  min-width 1200px | width = 1140px

  #### Column

  State | Numbers of Column in Row
  ------------ | -------------
  Default | 1
  min-width 768px | 2
  min-width 992px | 3