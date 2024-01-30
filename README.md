## Getting Started

Install dependencies
npm i
then run the development server:

```bash
npm run dev
```

Running the above command should open [http://localhost:3000](http://localhost:3000) as well.

If not please navigate to the browser and enter this [http://localhost:3000](http://localhost:3000) in the address bar.

## About this project

This project uses [Nextjs](https://nextjs.org/docs) since this is one of the recommended methods for setting up a new react projects. However [Gatsby](https://www.gatsbyjs.com/) maybe preferable in the case of this project if it was CMS backed.

Other npm libraries used in the project are Lodash and date fns. grid layout implemented using pure CSS.
fetch api used along side useEffect and useState to display the events data

Issues faced
Data object json has an issue with metalgearsolid (2023-14-29) object with the date being incorrect, as a result the event cannot be displayed
Data object json was not correctly formatted in some cases so i adjusted it but missed out on the break tags that were there in the summary.
Final fantasy 16 16X9 image is the only file in jpeg format so i would have to add the dynamic extension logic to accept either webp or jpeg to fetch the image but ran out of time.
simple view replaced by popup to save on time but image display needs to be better adjusted with better css
