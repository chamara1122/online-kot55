const container = document.querySelector(".container");

const colors = [
    "red",
    "orange",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "purple"
];

const names = [
    "Shashi","Nimal","Kamal","Sunil","Thilak",
    "Prasad","Asela","Ruwan","Sampath","Darshana",
    "Dilan","Lahiru","Chamal","Nuwan","Dinuka",
    "Kavinda","Supun","Heshan","Isuru","Sandaruwan",
    "Dinesh","Akila","Pawan","Manoj","Gayan",
    "Suresh","Roshan","Lasith","Nadeera","Indika",
    "Chaminda","Janaka","Prabath","Ajith","Buddhika",
    "Aruna","Anura","Pasan","Kelum","Jagath",
    "Mahesh","Ranjith","Upul","Nishan","Sanjeewa",
    "Eranga","Lakshan","Madushan","Thisara","Dulaj",
    "Kasun","Chanuka","Malinda","Lahiru","Sampath",
    "Bandara","Priyan","Saman","Roshan","Ashoka",
    "Nuwan","Tharindu","Gihan","Pradeep","Sajith",
    "Kasun","Viraj","Manoj","Gayan","Harsha",
    "Dammika","Kalana","Kumara","Rangana","Weerasinghe",
    "Senarath","Chinthaka","Perera","Silva","Fernando",
    "Indrajith","Chathura","Shehan","Lakmal","Danushka",
    "Buddhika","Prasanna","Jagadeesh","Dhanushka","Chamara",
    "Darshana","Mahela","Lasantha","Rajitha","Samantha",
    "Ananda","Wimal","Sumith","Manoj","Ekanayake"
];

for (let i = 0; i < 100; i++) {

    const card = document.createElement("div");

    const row = Math.floor(i / 10);

    card.className = `card ${colors[row]}`;

    const number = String(i).padStart(2, "0");

    const sold = String(Math.floor(Math.random() * 5) + 1).padStart(2, "0");

    card.innerHTML = `
        <div class="number">${number}</div>

        <div class="details">
            <p>විකුණුම් ගණන : ${sold}</p>
            <p>නම : ${names[i]}</p>
        </div>
    `;

    container.appendChild(card);
}
const paid = Math.random() > 0.5;

const status = paid ? "✅" : "❌";

card.innerHTML = `
<div class="header">
    <span>${status}</span>
    <span>Rs.500</span>
    <span>2026-08-01</span>
</div>

<div class="number">${number}</div>

<div class="title">ONLINE කොටු KOLE</div>

<div class="place">පොලොන්නරුව</div>

<div class="prize">
    <div>3/3 = 300</div>
    <div>1/1 = 100</div>
</div>
`;
