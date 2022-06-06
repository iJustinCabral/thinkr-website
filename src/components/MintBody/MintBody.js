import React, {useEffect, useState} from 'react'
import { Container, MintButton } from './MintBody.elements'
import { ethers } from 'ethers'
import ThinkrContract from '../../Thinkr.json'

// Wait for jon's file to import

const MintBody = () => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [price, setPrice] = React.useState();


    /* Deployed contract addresses, change each time re-deployed
    */
    const THINKR_CONTRACT_ADDRESS = "0x44EF6F738aF95D7B563a4f61F927C06571025574";
  
    /* So we can interact with our contracts
    */
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(THINKR_CONTRACT_ADDRESS, ThinkrContract.abi, signer);  
  
   /* dApp Functions
   *
   *
   * */
  
    const checkIfWalletIsConnected = async () => {
  
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
  
      const accounts = await ethereum.request({ method: 'eth_accounts' });
  
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    }
  
    const connectWallet = async () => {
      try {
  
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]); 
      } 
  
      catch (error) {
        console.log(error);
      }
    } 
    
    // Testing contract functions
    const testLog = async ()  => {
        price = await connectedContract.price()
        setPrice(price)
    }

    testLog();
    console.log(price)
  
    // Render Methods
    const renderNotConnectedContainer = () => (
      <MintButton onClick={connectWallet}>
        Connect to Wallet
      </MintButton>
    );
  
    useEffect(() => {
      checkIfWalletIsConnected();
    }, [])

  return (
    <>
        <Container>
            

          {currentAccount === "" ? (renderNotConnectedContainer()) : 
          (
            <MintButton>
                Mint NFT
            </MintButton>
          )}

            
        </Container>
    </>
  )
}

export default MintBody