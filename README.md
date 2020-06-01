#React Comparison
<p align="center">
<a href="https://www.npmjs.com/package/react-comparison">
    <img src="https://img.shields.io/npm/v/react-comparison.svg" alt="npm version" >
  </a>
  <a href="https://packagephobia.now.sh/result?p=react-comparison">
    <img src="https://packagephobia.now.sh/badge?p=react-comparison" alt="install size" >
  </a>
  <a href="https://codecov.io/gh/react-comparison/react-comparison">
    <img src="https://codecov.io/gh/react-comparison/react-comparison/graph/badge.svg" alt="code coverage" >
  </a>
  <a href="#backers" alt="sponsors on Open Collective">
      <img src="https://opencollective.com/react-comparison/backers/badge.svg" alt="backers" >
  </a> 
  <a href="#sponsors" alt="Sponsors on Open Collective">
    <img src="https://opencollective.com/react-comparison/sponsors/badge.svg" alt="sponsors" >
  </a> 
  <a href="https://github.com/react-comparison/react-comparison/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/react-comparison.svg" alt="license">
  </a>
  <a href="https://david-dm.org/react-comparison/react-comparison">
    <img src="https://david-dm.org/react-comparison/react-comparison/status.svg" alt="dependency status">
  </a>
  <a href='https://gitter.im/react-comparison/react-comparison?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge'>
    <img src='https://badges.gitter.im/react-comparison/react-comparison.svg' alt='Join the chat at https://gitter.im/react-comparison/react-comparison'>
  </a></p>
  
  ## Overview
  
  React Comparison is a React Component built with React Hooks that allows you to compare two objects in different ways. You can compare either two videos or two images, even two divs, as well. It has developed with passion.
  
  ## Quick Start Guide
  Installing React Comparison only takes a single command and you're ready to roll. <br />
  ``yarn add react-comparison`` or ``npm install react-comparison``
  
  ####Example
  
  The following code excerpt demonstrates a basic usage example:
  ````
import React from "react";
import { useComparison } from "react-comparison";

export default function App() {
    const { Side1, Side2, Wrapper } = useComparison();

    return (
        <Wrapper>
            <Side1>
                {/* Your First Component Goes Here */}
            </Side1>
            <Side2>
                {/* Your Second Component Goes Here */}
            </Side2>
        </Wrapper>
    );
}
````
## License

[MIT](https://github.com/react-comparison/react-comparison/blob/master/LICENSE.md)