import { useState } from 'react';
import Web3 from "web3";
import React from 'react';
import "../assets/edrank.css"

const Educatorank = () => {
        
// Properties

const [walletAddress, setWalletAddress] = useState("");
const [jsonData, setJsonData] = useState([]);

// Helper Functions

// Requests access to the user's META MASK WALLET
// https://metamask.io

const generateData = () => {
    const newData = [
      { id: 1, name: 'ANGELA', walletAddress: "0x6d06a9cca25fd349396dc9809548a8e6263c2da4" },
      { id: 2, name: 'ROBIN', walletAddress: "0x6d06a9cca25fd349396dc9809548a88e45cda789" },
      { id: 3, name: 'DORA', walletAddress:  "0x6d86a9bbc25fd349396dc9809548a88e45cda789" },
    ];
    setJsonData(newData);
};

async function requestAccount() {
  console.log('Requesting account...');

  //  Check if Meta Mask Extension exists 
  if(window.ethereum) {
    console.log('detected');

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      generateData();
    } catch (error) {
      console.log('Error connecting...');
    }

  } else {
    alert('Meta Mask not detected');
  }
}



// Create a provider to interact with a smart contract
async function connectWallet() {
  if(typeof window.ethereum !== 'undefined') {
    await requestAccount();

    const provider = new Web3.providers.Web3Provider(window.ethereum);
  }
}

return (
  <div className="App">
    <header className="App-header">
      <button
      
      onClick={requestAccount}
      
      >Top 3 Educators</button>
      <h3 style={{margin:"3vh"}}> Top Wallet Address: {walletAddress}</h3>


      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Wallet Address</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.walletAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </header>
  </div>
);
}
export default Educatorank; 


