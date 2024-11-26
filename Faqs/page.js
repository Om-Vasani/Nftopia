import Image from "next/image";
import Link from "next/link";
import "./Faqs.css"

export default function Faqs(){

   return(
      <>
         <div className="container-13">
            <Link href="/Error">
               <h1>Frequently Asked Questions</h1>
            </Link>
         </div>
         <div className="container-3">
            <h2 className="Marketplace">What Is Cryptocurrency (NFT) Marketplace?</h2>
            <p className="nft">
            Non-fungible tokens and their smart contracts allow for detailed attributes to be added, like the <br/> 
            identity of the owner, rich metadata, or secure file links. The potent of non-fungible tokens to <br/> 
            immutably prove digital ownership is an important progression for an increasingly digital world. They <br/> 
            could see blockchain's promise of trustless security applied to the ownership or exchange of almost <br/> 
            any asset.
            </p>
         </div>
         <div className="container-4">
            <h2 className="Marketplace">Can I Make Money On It?</h2>
            <p className="nft">
            you can definitely make money through delivery optimization. Here are several ways <br/> 
            you can monetize delivery optimization, ranging from offering consulting services to <br/> 
            developing software and starting a delivery service business.
            </p>
         </div>
         <div className="container-5">
            <h2 className="Marketplace">How Do You Know Your NFT Is Authentic?</h2>
            <p className="nft">
            Determining the authenticity of an NFT (Non-Fungible Token) is crucial to ensure that you are dealing <br/> 
            with a legitimate and original digital asset. Here are the steps you can follow to verify the authenticity of <br/> 
            an NFT are minted and recorded on blockchain networks like Ethereum, Binance Smart Chain, or <br/> 
            others. Each NFT has a unique identifier and metadata that can be publicly verified.   
            </p>
         </div>
         <div className="container-6">
            <h2 className="Marketplace">How Are Non-Fungible Tokens Used?</h2>
            <p className="nft">
            Non-Fungible Tokens (NFTs) are digital assets that represent ownership or proof of authenticity of a <br/> 
            unique item or piece of content, typically stored on a blockchain. NFTs have various applications <br/> 
            across different industries, thanks to their ability to verify and secure digital ownership. Here are some <br/> 
            common and emerging uses of NFTs.
            </p>
         </div>
         <div className="container-8">
            <h2 className="Marketplace">Who's Making Waves In The NFT Space?</h2>
            <p className="nft">
            The NFT space is vibrant and diverse, with contributions from artists, musicians, platforms, virtual <br/> 
            worlds, and major corporations. These key players are driving innovation and helping to shape the <br/> 
            future of digital ownership and decentralized economies. As the technology and market continue to <br/> 
            evolve, we can expect even more exciting developments and new entrants making waves in the NFT <br/> 
            space.
            </p>
         </div>
      </>
   );
}