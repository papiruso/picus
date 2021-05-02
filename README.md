# Picus

[![N|Solid](https://uncodegem.com/picus/banner.png)](https://uncodegem.com/picus)


[**Picus**](https://uncodegem.com/picus) is a customizable notification system for websites built with vanilla.js. Picus is a lightweight library, taking less than 15KB. Picus is a work in progress, so we will continuously add more functionality, however, you can already use it for your projects.

All suggestions and bugs can be reported to our [telegram group](http://t.me/gem_picus) or the Picus GitHub issues.

Repository - [Npm.js](https://www.npmjs.com/package/picus)

![Version](https://img.shields.io/npm/v/picus)

## Install

```
npm install picus
```
or
```
yarn add picus
```

## Usage
```jsx
import { push } from 'picus';

push('success', 'Success message', {
    maxCount: 7,
    lifetime: 5000,
    position: 'bottom-right',
})
```

### Global settings
```jsx
import { init } from 'picus';

init({
    maxCount: 7,
    lifetime: 5000,
    position: 'bottom-right',
})
```
