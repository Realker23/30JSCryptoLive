const cryptoURL = "https://api.coincap.io/v2/assets";

const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");

const fetchData = async () => {
  const apiCall = await fetch(cryptoURL);
  const json = await apiCall.json();
  const datas = json.data;

  for (const data of datas) {
    if (data.id === "bitcoin") {
      bitcoin.innerHTML = `$${parseFloat(data.priceUsd).toFixed(2)}`;
    }
    if (data.id === "ethereum") {
      ethereum.innerHTML = `$${parseFloat(data.priceUsd).toFixed(2)}`;
    }
    if (data.id === "dogecoin") {
      dogecoin.innerHTML = `$${parseFloat(data.priceUsd).toFixed(2)}`;
    }
  }
};

fetchData();
