This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]. Styled using [Tailwind CSS](https://tailwindcss.com/) and icons from [Material UI](mui.com).

## Overview

This is a simple *desktop-designed* currency conversion website that utilizes the [freecurrencyapi.com](freecurrencyapi.com) API in order to receive the latest currency exchange rate. A total of 31 currencies are supported on this site, which are the following:

- EUR - Euro
- USD - US Dollar
- JPY - Japanese Yen
- BGN - Bulgarian Lev
- CZK - Czech Republic Koruna
- GBP - British Pound Sterling
- HUF - Hungarian Forint
- PLN - Polish Zloty
- RON - Romanian Leu
- SEK - Swedish Krona
- CHF - Swiss Franc
- ISK - Icelandic Króna
- NOK - Norwegian Krone
- RUB - Russian Ruble
- TRY - Turkish Lira
- AUD - Australian Dollar
- BRL - Brazilian Real
- CAD - Canadian Dollar
- CNY - Chinese Yuan
- HKD - Hong Kong Dollar
- IDR - Indonesian Rupiah
- ILS - Israeli New Sheqel
- INR - Indian Rupee
- KRW - South Korean Won
- MXN - Mexican Peso
- MYR - Malaysian Ringgit
- NZD - New Zealand Dollar
- PHP - Philippine Peso
- SGD - Singapore Dollar
- THB - Thai Baht
- ZAR - South African Rand

The API being used has an allowance of 5000 requests per month and a rate limit of 10 requests per minute. The number of requests is renewed every month. 

## Features

- API status is visible on upper left corner of the website. There are three states. Green means OK, yellow means there are no more requests available for the month, and red means the API is currently offline.
- Light and Dark mode themes, toggle to switch themes located on upper right corner.
- Dynamic dropdown selection, users cannot select two of the same currency. Users cannot enter prices until two currencies have been selected.
- Displayed flags retain native aspect ratio, which is why flags appear to be different sizes.
- Currency swap button to swap target and base currencies. 
- Visible counter of remaining requests to API.
- Swapping currencies or selecting a new currency after two currencies have already been selected counts as 2 API requests.
