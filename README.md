# Candy Machine
```
git clone https://github.com/tigthor/candy_machine.git
cp bin/macos/candy_machine ~/bin
```
## Prerequisites

Read the Solana Command-line Guide
https://docs.solana.com/cli

Install the Solana Command-line Tools
https://docs.solana.com/cli/install-solana-cli-tools

## devnet for the win

Devnet serves as a playground for anyone who wants to take Solana for a test drive, as a user, token holder, app developer, or NFT publisher. NFT publishers should target devnet before going for mainnet.

I highly recommend making devnet your default solana url:

`solana config set --url https://api.devnet.solana.com`

Create devnet wallet (for testing)
Read the fine manual
`solana-keygen help new`

If your me, you’ll redact your mnemonic, store it somewhere safe and take advantage of the --outfile flag.
```bash
solana-keygen new --outfile ~/.config/solana/devnet.json
```
#### Generating a new keypair
`solana config set --keypair ~/.config/solana/devnet.json`

### .json Metadata format

```
{
  "name": "Solbabes #4381",
  "symbol": "",
  "description":"Solbabes #4381 solbabes.art",
  "seller_fee_basis_points": 600,
  "image": "image.png",
  "properties": {
    "creators": [
      {
        "address": "ANjT258doJD2bvdGMmLTG7vMQusVcbeptpEN7stbDVwB",
        "share": 100
      }
    ],
    "files": [{ "uri": "4381.png", "type": "image/png" }]
  },
  "attributes": [
    {
      "trait_type": "Backgrounds", 
      "value": "Red"
    }, 
    {
      "trait_type": "Body Color", 
      "value": "Light-Yellow"
    }, 
    {
      "trait_type": "Tattoo", 
      "value": "Just Hands"
    }, 
    {
      "trait_type": "EyeBrows", 
      "value": "Blue"
    }, 
    {
      "trait_type": "Eye Color", 
      "value": "Green"
    }, 
    {
      "trait_type": "Bikinis", 
      "value": "Style 7  Pink"
    }, 
    { 
      "trait_type": "Glasses", 
      "value": "Round"
    }, 
    {
      "trait_type": "Hair", 
      "value": "Top Knot Black"
    }
  ]
}
```
# Uploading
### Organizing your project assets
Here’s how you should organize the files you want to upload.Notice that these come in numerical pairs. eg: 4.png and 4.json are two halves of the NFT – one is the art, the other is the metadata. If you have a 10k collection, then there should be 20k files in this directory.

Also notice that we’re starting with 0.json + 0.png, because that’s the default value for the --start-with. Staying close the defaults ensures you don’t have surprises like publishing fewer NFTs than you meant to.

run this command to upload
```
candy_machine upload ./assets --url https://api.devnet.solana.com --keypair ~/.config/solana/devnet.json
```
## create candy machine store
```
candy_machine create_candy_machine -k ~/.config/solana/devnet.json
```

## Mint token
```
candy_machine mint_one_token -k ~/.config/solana/devnet.json
```
## Import private key to Phantom
* Copy ~/.config/solana/devnet.json 
* open phantom and add new wallet
* use phantom import wallet feature
* paste the ~/.config/solana/devnet.json


# generative-art-node

Create generative art by using the canvas api and node js

## Installation

```
git clone https://github.com/solbabes/generative-art-node

yarn add all
```

## Usage

Create your different layers as folders in the 'layers' directory, and add all the layer assets in these directories. Optionally, append '_r' and '_sr' to the layer file names to make those layer files rare or super rare respectively. 

*Example:* If you had an ball layer you would create a ball directory, and then a file might be called:

- `red_eye_ball_sr.png`
- `red_eye_ball_r.png`
- `red_eye_ball.png`

> Rarity is customizable in `src/config.js`.

Once you have all your layers, go into `src/config.js` and update the `layersOrder` array to be your layer folders name in order of the back layer to the front layer.

*Example:* If you were creating a portrait design, you might have a background, then a head, a mouth, eyes, eyewear, and then headwear, so your `layersOrder` would look something like this:

```
const layersOrder = [
    'background',
    'head',
    'mouth',
    'eyes',
    'eyewear',
    'headwear',
];
```

Then optionally, update your `format` size, ie the outputted image size, and the defaultEdition, which is the amount of variation outputted.

When your are all ready, run the following command and your outputted art will be in the `build` directory:

```
npm run build

```

# UI

# Candy-Machine-Mint

The Candy-Machine-Mint project is designed to let users fork, customize, and deploy their own candy machine mint app to a custom domain, ultra fast.

A candy machine is an on-chain Solana program (or smart contract) for managing fair mint. Fair mints:
* Start and finish at the same time for everyone.
* Won't accept your funds if they're out of NFTs to sell.

The Candy-Machine-Mint project is meant to be as simple and usable as possible, accessible to everyone from long-time crypto devs to junior React devs with a vague interest in NFTs. Our goal is to empower users to create their own front ends to display, sell, and manage their NFTs as simply as possible by just updating a few styled components and following a well-documented process for setup and shipping.

## Getting Set Up

### Prerequisites

* Ensure you have recent versions of both `node` and `yarn` installed.

* Follow the instructions [here](https://docs.solana.com/cli/install-solana-cli-tools) to install the Solana Command Line Toolkit.

* Follow the instructions [here](https://hackmd.io/@levicook/HJcDneEWF) to install the Metaplex Command Line Utility.
  * Installing the Command Line Package is currently an advanced task that will be simplified eventually.

### Installation

1. Fork the project, then clone down. Example:
```
git clone git@github.com:exiled-apes/candy-machine-mint.git
```

2. Build the project. Example:
```
cd candy-machine-mint
yarn install
yarn build
```

3. Define your environment variables using the instructions below, and start up the server with `npm start`.

#### Environment Variables

To run the project, first create a `.env` file at the root directory and define the following variables:

```
REACT_APP_CANDY_MACHINE_CONFIG="redacted"
```

This is a Solana account address. You can get the value for this from the `.cache/temp` file. This file is created when you run the `metaplex upload` command in terminal.

```
REACT_APP_CANDY_MACHINE_ID="redacted"
```

Same as above; this is a Solana account address. You can get the value for this from the `./cache/temp` file. This file is created when you run the `metaplex upload` command in terminal.

```
REACT_APP_CANDY_START_DATE=1630422000000
```

This is a unix time stamp that configures when your mint will be open.

```
REACT_APP_SOLANA_NETWORK=devnet
```

This identifies the Solana network you want to connect to. Options are `devnet`, `testnet`, and `mainnet`.

```
REACT_APP_SOLANA_RPC_HOST=https://explorer-api.devnet.solana.com
```

This identifies the RPC server your web app will access the Solana network through.

```
REACT_APP_TREASURY_ADDRESS="redacted"
```

This the Solana address that receives the funds gathered during the minting process. More docs coming as we can test this.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).