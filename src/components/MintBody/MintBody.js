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
    const testPrice = async () => {
      try {
        if (ethereum){
          let priceTxn = await connectedContract.price();
          console.log("Expecting price");
          
          //await priceTxn.wait();
          console.log(priceTxn.toString())
          console.log("Good stuff should be above me")
        } else {
          console.log("Ethereum object doesnt exist!")
        }
      } catch(error) {
        console.log(error)
      }
    }
    testPrice();

    const askContractToPublicMint = async () => {
      try {
        const WEI_TO_ETH = 1000000000000000000;
        const mintPrice = "55500000000000000";

        if (ethereum){
          console.log("Going to pop wallet now to pay gas...")
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });

          let nftTxn = await connectedContract.mint(1, {value: mintPrice});
          console.log(" Expecting 0.555");

          console.log("Mining... please wait.");
          await nftTxn.wait();
          console.log(nftTxn);
          console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        } else{
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error)
      }
    }
    // Render Methods
    const renderNotConnectedContainer = () => (
      <MintButton onClick={connectWallet}>
        Connect to Wallet
      </MintButton>
    );

    const renderMintUI = () => (
      <MintButton onClick={askContractToPublicMint} >
        Mint NFT
      </MintButton>
    );
  
    useEffect(() => {
      checkIfWalletIsConnected();
    }, [])

  return (
    <>
        <Container>
            

          {currentAccount === "" ? renderNotConnectedContainer() : renderMintUI()}

            
        </Container>
    </>
  )
}

export default MintBody