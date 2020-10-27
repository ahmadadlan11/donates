<p align="center">
    <a href="https://soluspay.net">
      <img alt="NOEBS web portal" width="400" src=".github/NOEBS web portal.png">
    </a><br>
    Fastest way to add payment in your App.
</p>

🚀 [See it live](https://vercel.com/)

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ahmadadlan11/noebs-web-portal)](https://github.com/ahmadadlan11/noebs-web-portal/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

This application is build on top of [NOEBS](https://github.com/adonese/noebs/) to aprovide simple and clean payment subsystem for developers in sudan.

##  ℹ️ What is noebs web portal

A generic web view payment interface. Very secure, simple and easy to use, i18n and support for Ar/En and powered by noebs.

## 📦 Features

- :performing_arts: Customizable
- :beginner: Secure
- :100: Reliability
- Support multi languages Arabic,English

## 🏁 Getting Started

To have a in-app purchasing experience, there are two requirment needed:

- Create a Solus account [here](https://google.com)

- Create billerId by fill [THIS](https://github.com/ahmadadlan11/noebs-web-portal/blob/master/.github/Biller%20registration%20%20form.docx) and send it to ``` adonese@soluspay.net ```

##### We can host the page in our system (ie. yourname.soluspay.net) without extra fees


## :wrench: How its work

example of final url
 ```json
 yourname.soluspay.net/yourname?id={id}&amount={amount}
 ```
 
 parameters description:
 
```diff
+ yourname -> required ,determine the namespace (usename of Solus account)

! id -> optinal , transaction ID for 

+ token -> required , transaction ID 

- amount -> required , the required amount SDG
```

## :rainbow: Customization

Color scheme in **NOEBS web portal** is primary driven from **LOGO** colors.

```js
//tailwind.config.js

      colors: {
        background: "#F6F6F6",
        primary: "#E70E02",
        secondary: "#EEAC5A",
        deepOrange: "#E54A1F",
      },
      
```
**primary** is the dominant color.


## How to use

1- Download the repo [or clone the repo](https://github.com/ahmadadlan11/noebs-web-portal):

2- Install it and run:
```sh
npm i
npm run start
```
