import React, {useEffect, useState} from 'react'
import { Container, MintButton } from './MintBody.elements'
import { ethers } from 'ethers'

import ThinkrContract from '../../Thinkr.json'

const MintBody = () => {

    /* Global variables fetched from blockchain */
    const [currentAccount, setCurrentAccount] = useState("");
    const [pubPrice, setPubPrice] = React.useState();
    const [prePrice, setPreSalePrice] = React.useState();
    const [remainingSupply, setRemainingSupply] = React.useState();
    const [totalMinted, setTotalMinted] = React.useState();
    const [mintSlots, setMintSlots] = React.useState();


    /* Deployed contract addresses, change each time re-deployed */
    const THINKR_CONTRACT_ADDRESS = "0x149Dbd97FcdD1eFddeA5a30866A1566d8810Cb35";

    /* Importing deployed contract via ethers.js */
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(THINKR_CONTRACT_ADDRESS, ThinkrContract.abi, signer);

   /* dApp Functions */

   /* Checking if wallet is connected */
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

    /* Connect user's wallet.
    *  We know this works for MetaMask, not sure about other wallet providers.
    */
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

    /* Getter functions to return data from blockchain as a global variable. */

    const getMintSlots = async () => {
      let mintSlots = await connectedContract.getMintSlots(currentAccount);
      mintSlots = ethers.BigNumber.from(mintSlots).toNumber();

      setMintSlots(mintSlots);
    };

    const getRemainingSupply = async () => {
      let totalSupply = await connectedContract.totalSupply();
      totalSupply = ethers.BigNumber.from(totalSupply).toNumber();

      setRemainingSupply(10000 - totalSupply);
    };

    const getTotalMinted = async () => {
      let totalSupply = await connectedContract.totalSupply();
      totalSupply = ethers.BigNumber.from(totalSupply).toNumber();

      setTotalMinted(totalSupply);
    };

    const getPubSalePrice = async () => {
      let pubPrice = await connectedContract.price();
      pubPrice = ethers.utils.formatEther(pubPrice);
      pubPrice = pubPrice.toString();

      setPubPrice(pubPrice);
    };

    const getPreSalePrice = async () => {
      let prePrice = await connectedContract.allowlistPrice();
      prePrice = ethers.utils.formatEther(prePrice);
      prePrice = prePrice.toString();

      setPreSalePrice(prePrice);
    };


    /* Function solely for testing contract functionality */
    const testPrice = async () => {
      try {
        if (ethereum){

        //await connectedContract.togglePublicSaleStarted();
        //await connectedContract.togglePresaleStarted();
        //await connectedContract.seedAllowlist(["0xe4b5B6b30672925ea418369F12a13B7E5A48Bbfa"]);

        } else {
          console.log("Ethereum object doesnt exist!")
        }
      } catch(error) {
        console.log(error)
      }
    }

    /* Call dApp functions */

    //testPrice();

    getPubSalePrice();
    getPreSalePrice();
    getRemainingSupply();
    getTotalMinted();
    getMintSlots();

    /*
    console.log(pubPrice);
    console.log(prePrice);
    console.log(remainingSupply);
    console.log(totalMinted);
    console.log(currentAccount);
    console.log(mintSlots);
    */

    /* Minting function */
    const askContractToPublicMint = async () => {
      try {

        if (ethereum){
          let priceTxn = await connectedContract.price();

          /* Wait for wallet prompt */
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });

          /* Check the boolean values for sale event */
          let checkPubSale = await connectedContract.publicSaleStarted();
          let checkPreSale = await  connectedContract.presaleStarted();

          /* Presale mint */
          if(checkPreSale){
             let nftTxn = await connectedContract.allowlistMint(1, {value: priceTxn.toString()});
             await nftTxn.wait();
          }

          /* Public sale mint */
          if(checkPubSale){
             let nftTxn = await connectedContract.mint(1, {value: priceTxn.toString()});
             await nftTxn.wait();
          }
          
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
