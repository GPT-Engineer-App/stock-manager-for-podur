# stock-manager-for-podur

Create a stock management tool for PODUR. Our garment produces womans clothes. Uses materials from different stores. Material comes into the warehouse in rolls. Each roll is approximately 25 meters. The material is measured in yards or meter depending on the shop it is purchased from. Material is then used to produce the dresses where the tool get the material amount used and number of dresses produced as in put. Calculate also a KPI on how many yards/meters is used per dress. If the KPI is lower than 3 or over 4, highight this in red. 

Stock will be added to the tool when entering the garment, and when it is used to produce the dressed. Tool should keep track of material left in the warehouse and also what is produced and how many pieces. Furthermore, all this information should be possible to export in excel in table format.

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
git clone https://github.com/GPT-Engineer-App/stock-manager-for-podur.git
cd stock-manager-for-podur
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
