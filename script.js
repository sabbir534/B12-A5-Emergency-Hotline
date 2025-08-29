const heartCountEl = document.getElementById("countHeart");
let heartCount = 0;
document.querySelectorAll(".increaseHeart").forEach(btn => {
    btn.addEventListener("click", () => {
        heartCount++;
        heartCountEl.textContent = heartCount;
    });
});


const coinEl = document.getElementById("coin");
let coins = parseInt(coinEl.textContent);
const historyBody = document.querySelector(".history-body");



const callBtns = document.querySelectorAll(".callButton");

callBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const serviceName = card.querySelector(".card-info h3").textContent;
        const serviceNum = card.querySelector(".num h1").textContent;


        if (coins < 20) {
            alert("❌ Not enough coins to make a call. You need at least 20 coins.");
            return;
        }
        coins -= 20;
        coinEl.textContent = coins;
        let msg = `📞 Calling ${serviceName} ${serviceNum}...`;
        let singleLineMessage = msg.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();
        alert(singleLineMessage);

        const timeNow = new Date().toLocaleTimeString();
        const historyItem = document.createElement("div");
        historyItem.className = "history-item flex items-center gap-4 px-3 py-4 bg-[#FAFAFA] w-full justify-between";
        historyItem.innerHTML = `
        <div class="history-info">
          <h4 class="font-[Inter] font-semibold">${serviceName}</h4>
          <p class="font-['Hind_Madurai'] text-[#5C5C5C]">${serviceNum}</p>
        </div>
        <div class="history-time">${timeNow}</div>
      `;
        historyBody.appendChild(historyItem);
    });
});

const clearHistoryBtn = document.getElementById("clearHistoryBtn");
clearHistoryBtn.addEventListener("click", () => {
    historyBody.innerHTML = "";
});


let totalCopy = document.getElementById("totalCopy");
let copyCount = 0;

const copyBtns = document.querySelectorAll(".copy-btn");

copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const hotlineNumber = card.querySelector(".service-number").textContent;
        navigator.clipboard.writeText(hotlineNumber).then(() => {
            let copyAlert = `${hotlineNumber} copied to clipboard!`;
            let singleLineAlert = copyAlert.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();
            alert(singleLineAlert);
            copyCount++;
            totalCopy.textContent = copyCount;
        });
    });
});