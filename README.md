# currency-mate

Currency Converter Application Overview
The Currency Converter Application is a tool that allows users to convert an amount from one currency to another using real-time exchange rates. The application fetches current exchange rates from a public API and provides a user-friendly interface to perform and view these conversions. It also maintains a history of past conversions for reference.

Detailed Description:
User Interface:
The application boasts a clean and intuitive UI, ensuring that users can easily navigate and perform currency conversions without any hassle.
Key components include a navigation bar, a converter form with dropdowns and input fields, a section to display conversion results, and a conversion history list.
Real-Time Data:
Exchange rates are fetched in real-time from a reliable public API, such as ExchangeRate-API, ensuring that users always get the most accurate and up-to-date conversion rates.
The application handles API requests efficiently and displays relevant data promptly to the user.
Conversion Process:
Users can select the source and target currencies from dropdown menus.
They enter the amount they wish to convert and press a button to perform the conversion.
The application calculates the converted amount using the fetched exchange rate and displays the result.
Conversion History:
The application keeps track of all conversions performed by the user.
Each conversion entry includes the date, source and target currencies, the amount converted, and the result.
This history is stored in the local storage, ensuring that it persists across sessions.
Error Handling:
The application includes robust error handling mechanisms to manage issues such as failed API requests or invalid user inputs.
Users are notified of any errors through user-friendly alerts or messages.
Responsiveness:
The application is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.
Layout and components adjust dynamically to fit different screen sizes and orientations.
Styling and Theming:
Depending on the tech stack used (React + Chakra UI, React + Tailwind, Tailwind & Daisy UI, or Simple Static HTML), the application features a consistent and visually appealing design.
Optional dark mode or custom theming can be implemented to enhance the user experience further.
By leveraging modern web development frameworks and libraries, the Currency Converter Application provides a robust and efficient tool for users to carry out currency conversions with ease. Whether for travel, business, or personal finance, this application serves as a reliable companion for managing currency exchange needs.



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/currency-mate.git
cd currency-mate
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
