// Create a variable to hold the number of NFTs (step 1)
let numberOfNFTs = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above (step 2)
function mintNFT(name, description, image) {
  const nft = {
    name: name,
    description: description,
    image: image
  };

  numberOfNFTs++; // Increment the number of NFTs

  return nft;
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log() (step 3)
function listNFTs(nfts) {
  for (const nft of nfts) {
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("--------------------");
  }
}

// Print the total number of NFTs we have minted to the console (step 4)
function getTotalSupply() {
  return numberOfNFTs;
}

// Call your functions below this line
const nft1 = mintNFT("NFT 1", "Description 1", "image1.jpg");
const nft2 = mintNFT("NFT 2", "Description 2", "image2.jpg");

const nfts = [nft1, nft2];

listNFTs(nfts);

console.log("Total Supply: " + getTotalSupply());
