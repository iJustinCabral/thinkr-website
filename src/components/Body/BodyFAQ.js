import React from 'react'
import {BodyFAQSection, CardSection, CTitle, CAnswer, CTextWrapper} from './BodyFAQ.elements'

function BodyFAQ({toggleState, myRef})  {
    
    return(
        <div ref={myRef}>
            <BodyFAQSection className= {toggleState === 1 ? "content active-content" : "content"}>
                <Card title = "What is a blockchain?" answer ="A blockchain is a distributed database. The database is shared among computers on a network and transactions are recorded on the database without the need for a third party. No single user on a blockchain should have control of its data. All collective users of a blockchain come to a consensus, from either mining or staking, on a blockchain’s changes. Blockchain technology is what powers platforms like Ethereum or Bitcoin. "/>
                <Card title = "What is Ethereum?" answer ="Ethereum, also known as ETH, is a blockchain best known for being the first major one to support smart contracts. Ethereum’s support of smart contracts enables things such as decentralized apps, NFTs, and will be the home of the Thinkr NFT collection."/> 
                <Card title = "What is a smart contract?" answer= "Smart contracts are simple programs which are stored on the blockchain that will run when predetermined conditions are met. For example, you may decide to turn the title of your car into an NFT and auction its rights for sale. This transaction is stored on the blockchain, which acts as the trusted 3rd party to verify the purchase. In the future, smart contracts will become as intertwined in our life as cell phone applications are today."/> 
                <Card title = "What is an NFT?" answer = "NFT stands for Non-Fungible Token. NFTs are digital collectables stored on blockchains. They are bought and traded using cryptocurrencies such as Ethereum. On the Ethereum blockchain, NFTs are made using smart contracts, such as ERC-721 or ERC-1151 token standards."/> 
                <Card title = "What’s a Crypto Wallet?" answer ="A crypto wallet is a digital wallet that generates a pair of private/public alphanumeric keys that represent your digital identity on the blockchain. Your public key is what you use when you want someone to send you money, or connect to a website. Your private key should NEVER be shared, and it’s how you can recover your wallet in the case your pc, tablet, or phone ever got destroyed.  Today, most private keys are generated using “seed phrases” which make the process of remembering them even easier."/>
                <Card title = "Where can I get a Crypto Wallet?" answer= "There are numerous companies that provide access to crypto wallets, but some of the more popular ones we recommend are Metamask, Ledger, Coinbase, and Trust."/> 
                <Card title = "Are cryptocurrencies and NFTs stored in my wallet?" answer= "NO. This is a common misconception. Cryptocurrencies and NFTs are stored on the blockchain itself. Your crypto wallet only gives you access to your blockchain assets because they are cryptographically paired. When you sell an asset on the blockchain, you're just assigning ownership to a different public/private key pair."/> 
            </BodyFAQSection>
            <BodyFAQSection className= {toggleState === 2 ? "content active-content" : "content"}>
                <Card title = "What blockchain will the Thinkr NFT collection be on?" answer = "The Thinkr NFT collection will be available on the Ethereum blockchain." />
                <Card title = "How much will the NFT cost?" answer = "Mint cost will be .0888 Ethereum for 4000 THINK list members. The remaining 6000 will be sold through a public sale with a mint price of 0.111 Ethereum. However, due to Ethereum price volatility, these could be subject to change in the future."/> 
                <Card title = "How many NFTs will be minted?" answer = "There will be 10,000 Thinkr NFTs available for mint in our collection."/> 
                <Card title = "Is there only going to be one series of NFTs minted?" answer = "No. Thinkr is committed to being a long standing member of the web3 community, and will continue to create more series of NFTs when the time is right."/>
                <Card title = "How will the initial mint revenue be handled?" answer = " Our revenue goal for the Thinkr NFT collection mint is $3 million dollars. All sales will go into a public treasury for community transparency until the DAO is launched later this year. The Thinkr founding team members will be taking a salary of $100,000 vested over a year which accounts for roughly 30%. The Lovelace Scholarship program will account for 20%, which covers three students for four years. Our plan is to expand the core team with 6 full-time hires including: Accountant, Social Worker, Software engineer, Marketing Manager, Social Media Manager, and Operations Manager accounting for 15%. 20% of the funds will also be allocated for taxes and legal fees. The remaining 15% will be used for company runway, research, development, and community giveaways."/> 
                <Card title = "Will there be any royalties collected during secondary sales of the NFT?" answer = "Yes. We will be collecting 5% in royalties on any secondary sale. All royalties will be sent to the Thinkr community treasury. "/> 

            </BodyFAQSection>
            <BodyFAQSection className= {toggleState === 4 ? "content active-content" : "content"}>
                <Card title = "Why am I getting so many Direct Messages in Discord channels?" answer ="Discord has become a community center for many NFT projects. In turn this has opened the door for malicious Discord bots. If you ever receive DMs from any account you were never  in previous contact with, DO NOT ANSWER IT, AND DO NOT CLICK ANY LINKS."/>
                <Card title = "I've been getting emails about OpenSea that includes links to their website, are they safe?" answer ="We highly discourage clicking on any links sent to your email about OpenSea or cryptocurrency. Phishing is the most common way hackers attempt to steal your assets, so please be vigilant about confirming the email sender is legitimate." />
                <Card title = "Someone is asking for my Private Key to send me crypto, is that normal?" answer ="Never give your Private Keys to anyone. They are for your eyes only. The only thing you should be sending to someone is your Public Key. "/>
                <Card title = "Is it safe to connect my wallet to websites I’m not sure about?" answer ="Never connect your wallets to websites you do not recognize. When in doubt use skepticism. "/>
                <Card title = "Where can I check if a NFT smart contract is validated?" answer ="To check if a NFT smart contract is valid, you can visit etherscan.io and paste the contract address into the search bar. When you scroll to the bottom of the page, there will be a green checkmark next to the contract where you can view the code. This means it’s validated. "/>
                <Card title = "Should I enable 2-Factor Authentication on my most important accounts?" answer ="Yes. Adding additional factors to your accounts will reduce the likelihood of any bad actor successfully stealing your assets in the event your passwords get leaked or compromised. Use unique passwords for all your crypto accounts and use two-factor or more factors when logging in. "/>
                <Card title = "Where can I check if a NFT smart contract is validated?" answer ="To check if a NFT smart contract is valid, you can visit etherscan.io and paste the contract address into the search bar. When you scroll to the bottom of the page, there will be a green checkmark next to the contract where you can view the code. This means it’s validated."/>
                <Card title = "Are cryptocurrencies like Ethereum and Bitcoin safe?" answer ="Absolutely. Besides some price volatility, if you take the proper precautions you shouldn't have to worry about losing your assets. "/>
            </BodyFAQSection>
        </div>
    )

}

function Card(props){
    return (
        <CardSection>
            <CTextWrapper>
                <CTitle className='card__title'>{props.title}</CTitle>
                <CAnswer className='card_descritpion'>{props.answer}</CAnswer>
            </CTextWrapper>
        </CardSection>
    )
}


export default BodyFAQ