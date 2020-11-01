<p align="center">
    <a href="https://soluspay.net">
      <img alt="NOEBS web portal" width="400" src=".github/NOEBS web portal.png">
    </a><br>
    Fastest way to add payment in your App.
</p>

🚀 [See it live](https://pay.noebs.dev/noebs?id=noebs&amount=50)

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ahmadadlan11/noebs-web-portal)](https://github.com/ahmadadlan11/noebs-web-portal/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

This application is build on top of [NOEBS](https://github.com/adonese/noebs/) to provide simple and clean payment subsystem for developers in sudan.

## ℹ️ What is noebs web portal

A generic web view payment interface. Very secure, simple and easy to use, i18n and support for Ar/En and powered by noebs.

## 📦 Features

- :performing_arts: Customizable
- :beginner: Secure
- :100: Reliability
- Support multi languages Arabic, English

## 🏁 Getting Started

To have a in-app purchasing experience, you **MUST** send a message to `adonese@soluspay.net` that contains:

- activity name (eg. store name , business name etc.. )

- Fill in this document so we can create a biller ID for you. Biller ID is a unique identifer that you can use to accept payments. [You can fill the form here](https://github.com/ahmadadlan11/noebs-web-portal/raw/master/.github/Biller%20registration%20%20form.docx) and send it to `adonese@soluspay.net`

_a biller ID is the link between your bank account and EBS._


## :wrench: How it works


- You request this service [via email](mailto:adonese@soluspay.net). Where you send us brief info about your business
- The next step is quite important and it requires an interference from us (for the time being). You need to fill `biller form` document. It is an official document from CBOS to register `billers`, or service providers like you.
- We create a new `namespace` for you (or simply: a username for you, you see we are not that great at naming things!)
- Now, to accept payments, you simply redirect your users to this super awesome, super secure and simple payment page!
- After the payment is done, a user will be notified by an SMS about the money deducted from them AND you will instantaneuosly receive the amount! Just that, simple and secure!

- Hooks are supported: Do you have an endpoint in your server and you want to receive the payment result without needing to go to our server! You can do that. Request it at adonese@soluspay.net
- Custom URLs are supported too: whether you want to host this page on your domain name, OR you want to use a subdomain (from our domain name), all that is supported!

- Got any other requests? No worries, just ping us here, or send us an email and we can deliver it to you in no time!


```json
https://pay.noebs.dev/{activity_name}?id={id}&amount={amount}&lang=ar
```

#### Parameters description

```diff
+ activity_name -> required ,determine the namespace (username of Solus account)

+ id -> required , payment ID.

+ amount -> required , the required amount SDG.

! lang -> optional , page language defalut is english.

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

## :scroll: Project structre

    src
    ├── App.js                  # Main layout
    ├── i18n.js                 # Localization (AR,EN)
    ├── index.js                # Bundle
    ├── App                     # Application files
    │   ├── API                 # API calls hook
    │   ├── assets              # Contain all svg used
    │   ├── Components          # Individual components (abstract)
    │   ├── Screens             # screens layout 
    │   ├── Store               # contexts centralization (context api) 
    ...

### Complex integrations and multi-tenants system

If your system supports multi-tenants, for example you are a store front and you want the fund to be transmitted to different destinations based on a custom ID you provide (a unique ID you generated in your system), Noebs can surely help you with this scenario out of the box.

You can request this integration, by sending an email to: adonese@soluspay.net.


### Want to customize this page or self-host it

1- Download the repo [or clone the repo](https://github.com/ahmadadlan11/noebs-web-portal):

2- Install it and run:

```sh
npm i
npm run start
```
