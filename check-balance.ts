import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

//try: 9TAiq2rgwPhfrksxFUtEtqCEra7qBZ3ZtkSgtzUCnZq9 (5 SOL)
//toly.sol: 86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY
//shaq.sol: gacMrsrxNisAhCfgsUAVbwmTC3w9nJB6NychLAnTQFv
//mccann.sol: JCZjJcmuWidrj5DwuJBxwqHx7zRfiBAp6nCLq3zYmBxd

var suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  suppliedPublicKey = "FzQZCvAQnyXMGnZEMgrbC4iHodtKxMXXCc42Vk7NGXua";
  console.log(`Using the default public key ${suppliedPublicKey}`);
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
/*
const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);
*/

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
