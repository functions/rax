**Warning: This is currently a private repo, please do not share this code.**

<p align="center">
  <a href="https://alibaba.github.io/rx">
    <img alt="Rx" src="https://gw.alicdn.com/L1/461/1/40137b64ab73a123e78d8246cd81c8379358c999_400x400.jpg" width="200">
  </a>
</p>

<p align="center">
A universal React-compatible render engine.
</p>

<p align="center">
<img src="https://img.shields.io/npm/l/universal-rx.svg">
<img src="https://img.shields.io/npm/v/universal-rx.svg">
<img src="https://img.shields.io/npm/dm/universal-rx.svg">
</p>

---

Rx is a universal JavaScript library with a largely React-compatible API. If you use React, you already know how to use Rx.

:zap: **Fast:** blazing fast virtual DOM.

:dart: **Tiny:** 8.5kb only after min+gzip.

:art: **Universal:** cross Browser、Weex and Node.js.

## Size Comparison

[Angular 1.5.8](https://unpkg.com/angular@1.5.8/angular.min.js) - 55.4kb (gzip)

<img src="https://cloud.githubusercontent.com/assets/677114/19777289/162cc37a-9caa-11e6-9377-d30b3b57abb1.png" height="5" width="100%">

[React 15.3.2](https://unpkg.com/react@15.3.2/dist/react.min.js) - 43.7kb (gzip)

<img src="https://cloud.githubusercontent.com/assets/677114/19777289/162cc37a-9caa-11e6-9377-d30b3b57abb1.png" height="5" width="78.88%">

[Vue 2.0.3](https://unpkg.com/vue@2.0.3/dist/vue.min.js) - 23.2kb (gzip)

<img src="https://cloud.githubusercontent.com/assets/677114/19777289/162cc37a-9caa-11e6-9377-d30b3b57abb1.png" height="5" width="41.87%">

[Rx 0.0.5](https://unpkg.com/universal-rx@0.0.5/dist/rx.min.js) - 8.5kb (gzip)

<img src="https://cloud.githubusercontent.com/assets/677114/19777289/162cc37a-9caa-11e6-9377-d30b3b57abb1.png" height="5" width="14.44%">


## Installation

### NPM
We recommend using Rx from npm with `webpack`. If you use npm for client package management, you can install Rx with:
```sh
npm install --save universal-rx
```

### CDN

If you don't want to use `npm` to manage client packages, the `rx` npm packages also provide UMD distributions in `dist` folders, which are hosted on a CDN:
```html
<script src="https://unpkg.com/universal-rx@1/dist/rx.js"></script>
```

To load a specific version of `rx`, replace `1` with the version number.
Minified production versions of `rx` are available at:
```html
<script src="https://unpkg.com/universal-rx@1/dist/rx.min.js"></script>
```

## Example

```js
import {createElement, Component, render} from 'universal-rx';

class Hello extends Component {
  render() {
    return <text style={styles.title}>Hello {this.props.name}</text>;
  }
}

const styles = {
  title: {
    color: '#ff4400',
    fontSize: 48,
    fontWeight: 'bold',
  }
};

render(<Hello name="world" />);
```

More examples take a look at the [`examples`](/examples/) folder.

## Universal Libraries

* :tophat: [universal-rx](/packages/universal-rx): A universal React-compatible render engine.
* :earth_asia: [universal-env](/packages/universal-env): A universal environment utilities.
* :loop: [universal-transition](/packages/universal-transition): A universal transition API.
* :iphone: [universal-platform](/packages/universal-platform): A universal Platform API.
* :bikini: [universal-stylesheet](/packages/universal-stylesheet): A universal StyleSheet API.
* :point_up_2: [universal-panresponder](/packages/universal-panresponder): A universal PanResponder API.
* :speech_balloon: [universal-toast](/packages/universal-panresponder): A universal Toast API.
* :postbox: [universal-router](https://github.com/kriasoft/universal-router): A simple middleware-style router for isomorphic JavaScript web apps.

## Contributing

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our [guidelines for contributing](./.github/CONTRIBUTING.md).
