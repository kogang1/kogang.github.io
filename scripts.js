document.getElementById('connectWalletButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // We use ethers.js to create a provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            alert(`Wallet connected: ${address}`);
        } catch (error) {
            console.error('User rejected the request:', error);
        }
    } else {
        alert('Please install MetaMask or Rainbow Wallet!');
    }
});

document.getElementById('coin').addEventListener('click', () => {
    const claimButton = document.getElementById('claimButton');
    claimButton.style.display = 'block';
});
