import React, {useEffect, useState} from 'react'
import { Container, MintButton } from './MintBody.elements'
import { ethers } from 'ethers'

import ThinkrContract from '../../Thinkr.json'

// Wait for jon's file to import

const MintBody = () => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [pubPrice, setPubPrice] = React.useState();
    const [prePrice, setPreSalePrice] = React.useState();
    const [remainingSupply, setRemainingSupply] = React.useState();
    const [totalMinted, setTotalMinted] = React.useState();
    const [mintSlots, setMintSlots] = React.useState();

    //web3React Hook stuff



    /* Deployed contract addresses, change each time re-deployed
    */
    const THINKR_CONTRACT_ADDRESS = "0x149Dbd97FcdD1eFddeA5a30866A1566d8810Cb35";

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

    //console.log("TOTAL", connectedContract.totalSupply())
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


    // Testing contract functions
    const testPrice = async () => {
      try {
        if (ethereum){

        //await connectedContract.togglePublicSaleStarted();
        //await connectedContract.togglePresaleStarted();
        await connectedContract.seedAllowlist(["0xe4b5B6b30672925ea418369F12a13B7E5A48Bbfa"]);

          let priceTxn = await connectedContract.price();
          console.log("Expecting price");

          //await priceTxn.wait();
          console.log(priceTxn.toString())
          console.log("Good stuff should be above me")

          //let numOfSlots = await connectedContract.getMintSlots(currentAccount);
          //console.log("Slots", numOfSlots)

        } else {
          console.log("Ethereum object doesnt exist!")
        }
      } catch(error) {
        console.log(error)
      }
    }

    getPubSalePrice();
    getPreSalePrice();
    getRemainingSupply();
    getTotalMinted();
    getMintSlots();
    console.log(pubPrice);
    console.log(prePrice);
    console.log(remainingSupply);
    console.log(totalMinted);
    console.log(currentAccount);
    console.log(mintSlots);

    const askContractToPublicMint = async () => {
      try {
        const WEI_TO_ETH = 1000000000000000000;
        const mintPrice = "55500000000000000";

        if (ethereum){
          let priceTxn = await connectedContract.price();
        //  let numOfSlots = await connectedContract.getMintSlots({from: currentAccount});
        //  console.log(numOfSlots);
          //Get mint slots function
          //getMintSlots(address)
        //  priceTxn = priceTxn * 3;

          console.log("Going to pop wallet now to pay gas...")
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });

          let checkPubSale = await connectedContract.publicSaleStarted();
          console.log(checkPubSale);

          let checkPreSale = await  connectedContract.presaleStarted();
          console.log(checkPreSale);

          if(checkPreSale){
             let nftTxn = await connectedContract.allowlistMint(1, {value: priceTxn.toString()});
             await nftTxn.wait();
          }

          if(checkPubSale){
             let nftTxn = await connectedContract.mint(1, {value: priceTxn.toString()});
             await nftTxn.wait();
          }

          //console.log(" Expecting 0.555");

          //console.log("Mining... please wait.");
          //await nftTxn.wait();
        //  console.log(nftTxn);
        //  console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
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
