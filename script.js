// ========================================
// ONLINE KOTU KOLE
// script.js
// ========================================

const container = document.querySelector(".container");

// Card Settings
const PRICE = "Rs.500";
const DATE = "2026-08-01";
const TITLE = "ONLINE කොටු KOLE";
const PLACE = "පොලොන්නරුව";

const PRIZE1 = "3/3 = Rs.300";
const PRIZE2 = "1/1 = Rs.100";

// Row Colors (10 Rows)
const rowColors = [
    "red",
    "orange",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "green"
];

// Generate 100 Cards
for (let i = 0; i < 100; i++) {

    const card = document.createElement("div");

    // Number 00-99
    const number = String(i).padStart(2, "0");

    // Row Color
    const color = rowColors[Math.floor(i / 10)];

    // Payment Status
    const paid = Math.random() >= 0.5;

    const status = paid ? "✅" : "❌";

    card.className = `card ${color}`;

    card.innerHTML = `
        <div class="header">
            <span class="status">${status}</span>
            <span class="price">${PRICE}</span>
            <span class="date">${DATE}</span>
        </div>

        <div class="number">
            ${number}
        </div>

        <div class="title">
            ${TITLE}
        </div>

        <div class="place">
            ${PLACE}
        </div>

        <div class="prize">
            <div>${PRIZE1}</div>
            <div>${PRIZE2}</div>
        </div>
    `;

    container.appendChild(card);

}
