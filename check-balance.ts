import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

//try: 9TAiq2rgwPhfrksxFUtEtqCEra7qBZ3ZtkSgtzUCnZq9 (5)
var suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  suppliedPublicKey = "FzQZCvAQnyXMGnZEMgrbC4iHodtKxMXXCc42Vk7NGXua";
  console.log(`Using the default public key ${suppliedPublicKey}`);
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
