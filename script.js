function setValue(id, value){
    document.getElementById(id).innerText = value + "€";
    return;
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function monero(){
    while (true) {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=eur")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error in response:" + response.status);
                }
                return response.json();
            })
            .then(data => {
                setValue("moneroPriceOut", data.monero.eur);
            });
        await sleep(1000 * 120);
    }
}
async function bitcoin(){
    while (true) {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error in response:" + response.status);
                }
                return response.json();
            })
            .then(data => {
                setValue("bitcoinPriceOut", data.bitcoin.eur);
            });
        await sleep(1000*120);
    }
}
async function etherium(){
    while (true) {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error in response:" + response.status);
                }
                return response.json();
            })
            .then(data => {
                setValue("etheriumPriceOut", data.ethereum.eur);
            });
        await sleep(1000*120);
    }
}
async function dogecoin(){
    while (true) {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=eur")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error in response:" + response.status);
                }
                return response.json();
            })
            .then(data => {
                setValue("dogecoinPriceOut", data.dogecoin.eur);
            });
        await sleep(1000*120);
    }
}
bitcoin();
monero();
etherium();
dogecoin();