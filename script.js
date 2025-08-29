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

// Grab the history body
const historyBody = document.querySelector(".history-body");

// Grab the clear history button
const clearHistoryBtn = document.querySelector(".history-header .copy");

// Attach event listener to all Call buttons
const callBtns = document.querySelectorAll(".btn-section .bg-green-600");

callBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card"); // find the parent card

        // Service name + number from card
        const serviceName = card.querySelector(".card-info h3").textContent;
        const serviceNum = card.querySelector(".num h1").textContent;

        // Check if enough coins
        if (coins < 20) {
            alert("Not enough coins to make a call. You need at least 20 coins.");
            return;
        }

        // Deduct coins
        coins -= 20;
        coinEl.textContent = coins;

        // Show alert
        alert("📞 Calling " + serviceName + " " + serviceNum + "...");

        // Add to Call History dynamically
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

// Clear History button
clearHistoryBtn.addEventListener("click", () => {
    historyBody.innerHTML = ""; // wipe all history items
});
// Call history end here
