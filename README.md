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

```Shell
npx esrun transfer.ts 9TAiq2rgwPhfrksxFUtEtqCEra7qBZ3ZtkSgtzUCnZq9


https://explorer.solana.com/tx/3jJPnfbZSWo5UH8Gs2hD1V6QWsRSMsuEDLso4VMRqtNe5WusN24kCP7JNJfWa7otGUq3tDZMPVaaF8ETN1hPA93t?cluster=devnet
```

continuar:

https://www.soldev.app/course/intro-to-custom-on-chain-programs

```Shell
npm install @solana/wallet-adapter-base \
    @solana/wallet-adapter-react \
    @solana/wallet-adapter-react-ui
```
