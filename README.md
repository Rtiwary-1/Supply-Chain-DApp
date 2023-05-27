# Supply-Chain-DApp
A blockchain based supply chain dapp for tracking medicines.
Smart Contract based Supply Chain Management for Data Integrity and Anti-Tampering.


<p> SMART CONTRACT -->  https://mumbai.polygonscan.com/address/0xfff6649d1b6d9407d41cc1e8772cbc3bbdd810c9 </p>


<h3> Tech Stack </h3>
<ul>
  <li>Blockchain --> Ethereum, Solidity and hardhat </li>
  <li> Backend --> Fastapi </li>
  <li> Frontend --> Reactjs and Ethers.js </li>
</ul>


# How to run 

## 1.Run every service seperately

## Project is divided into two parts i.e  client(frontend) , backend  

### Backend

- So first setup metamask wallet and enable testnet
- get some test ethers from this [webiste](https://mumbaifaucet.com/)
- now deploy this contract to polygon mumbai testnet via remix ide or hardhat or using any other tool . [This](https://wiki.polygon.technology/docs/develop/remix/) might help
- go to alchemy.com and create a app and select mumbai testnet and get the key it will look like this --> `https://polygon-mumbai.g.alchemy.com/v2/<your_key>`
- Then go to contract.py on line 9 you see w3 so change the url there 
- after that change the account address ,key(private_key) and contract address in contract.py
- `key = '<account-private-key>' `
- `account = w3.toChecksumAddress('<your-account-address>')  `
- `address = w3.toChecksumAddress('<contract-address>')`
- then run this command `pip install -r requirements.txt` (its better if you create virtual environment)
- now everything is done so just run this command `uvicorn main:app --reload` this will start the backend server
- Now go to `http://localhost:8000/docs` and add workers,products and status etc


### Client/Frontend

- Go to client folder and run this command `npm install`
-  Then go to componenst folder which is inside client folder and change contract address which is there 4 display file
- its like `const ContractAddress = '<your_contract_address>' `
- you can change contents of home page by editing home.js file 
- now everything is done you can run the command `npm start`
- now your app is runnng on port 300
