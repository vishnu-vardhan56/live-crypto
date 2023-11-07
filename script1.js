var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd', settings)
    .then(response => response.json())
    .then(data => {
        btc.innerHTML = data.bitcoin.usd;
        eth.innerHTML = data.ethereum.usd;
        doge.innerHTML = data.dogecoin.usd;
    })
    .catch(error => console.error('Error:', error));
