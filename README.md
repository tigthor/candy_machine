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
