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
