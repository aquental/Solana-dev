# Solana-dev
Solana Dev Bootcamp

```Shell
nvm use v21.6.1
npm i @solana/web3.js
```

```Typescript
import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();
console.log(`✅ Generated keypair!`)
```

```Shell
mkdir generate-keypair
cd generate-keypair
npm init -y
npm install typescript @solana/web3.js esrun @solana-developers/helpers

npx esrun generate-keypair.ts
```

```Typescript
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
```

```Shell
npx esrun check-balance.ts
```
