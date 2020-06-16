# Solidity Compilation

First install all dependencies with `npm i`

To compile the `Example.sol`, use the `solc` compiler. You'll need to install it globally first:

```
npm i -g solc
```

Then you can compile it with:

```
solcjs ./Example.sol --bin --abi --base-path .
```

- `--bin` creates the bytecode
- `--abi` creates the abi
- `--base-path` tells the compiler where to look for imports

Once you've compile the abi and bytecode, you can run `node deploy` to deploy the contract to the ganache-core instance and call methods on the contract!
