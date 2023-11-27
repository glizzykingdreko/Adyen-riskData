# Adyen RiskData

The `adyen-riskdata` npm module is a Node.js implementation designed to generate `dfValue` (riskData) and `components` key required for payment posts on some Adyen-integrated websites. This module simplifies the process of generating essential risk-related data, adhering to Adyen's standards for enhanced security in payment transactions.

For the card encryption part in Nodejs please refer to my other project:
- [Adyen-5.11.0](https://github.com/glizzykingdreko/adyen-5.11.0)
- [Adyen-4.5.0](https://github.com/glizzykingdreko/adyen-4.5.0)
- [Adyen-4.4.1](https://github.com/glizzykingdreko/adyen-4.4.1)

## Table of Contents
- [Adyen RiskData](#adyen-riskdata)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Credits](#credits)

## Features

- Generates `dfValue` (riskData) and `components` for Adyen payment processing.
- Customizable for different device and browser environments.
- Easy to integrate with existing Node.js applications.

## Installation

Install via npm:
```bash
npm install adyen-riskdata
```

## Usage

To use the module, simply require it in your Node.js application and create an instance of the `RiskData` class with appropriate parameters. Here's an example:

```javascript
const RiskData = require("adyen-riskData");

let riskDataInstance = new RiskData(
    "Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537...", // userAgent
    "en-US", // language
    24, // colorDepth
    4, // deviceMemory 
    8, // hardwareConcurrency
    360, // screenWidth
    640, // screenHeight
    360, // availScreenWidth
    640, // availScreenHeight
    -300, // timezoneOffset
    "America/Chicago", // timezone
    "MacIntel" // platform
);

console.log(riskDataInstance.generate());

// Output:
{
  riskData: 'DpqwU4zEdN0050000000000000BTWDfYZVR300056987765WpYWiKzBGfeypNASARQVGfm3JQDzg002cG3BdnXVmf00000YVxEr000008bcIu6FDHOVQCU4RphkX:40',
  components: {
    userAgent: '0eace09620203eff37d8a24433455faa',
    webdriver: 0,
    language: 'en-US',
    colorDepth: 24,
    deviceMemory: 4,
    pixelRatio: 2,
    hardwareConcurrency: 8,
    screenWidth: 360,
    screenHeight: 640,
    availableScreenWidth: 360,
    availableScreenHeight: 640,
    timezoneOffset: -300,
    timezone: 'America/Chicago',
    sessionStorage: 1,
    localStorage: 1,
    indexedDb: 1,
    addBehavior: 0,
    openDatabase: 0,
    platform: 'MacIntel',
    plugins: '29cf71e3d81d74d43a5b0eb79405ba87',
    canvas: 'c6885e141ffa5f80011869e291b711e7',
    webglVendorAndRenderer: undefined,
    adBlock: 0,
    hasLiedLanguages: 0,
    hasLiedResolution: 0,
    hasLiedOs: 0,
    hasLiedBrowser: 0,
    fonts: 'c87b1b27f41f86dec72c1d2e0def7120',
    audio: '55f67124434b2de71322279aef16e36b',
    enumerateDevices: '5f3fdaf4743eaa707ca6b7da65603892'
  }
}
```

## Contributing

We appreciate any contributions you might make. Please feel free to submit a pull request, issue, or suggestion.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Credits

- [GlizzyKingDreko](https://github.com/GlizzyKingDreko) - Developer

