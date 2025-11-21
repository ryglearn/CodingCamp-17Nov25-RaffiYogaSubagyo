let user = prompt("Please enter your name:");
document.getElementById("username").innerText = user ? user : "Guest";

document.getElementById("contactForm").addEventListener("submit", ((e)=>{
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;
    
    if(nama === "" || email === "" || pesan === ""){
        alert("Semua Kolom Wajib Diisi!");
        return;
    }
    
    let output= document.getElementById("output");
    output.classList.remove("hidden");
    output.innerHTML=`
    <p>Nama: ${nama}</p>
    <p>Email: ${email}</p>
    <p>Pesan: ${pesan}</p>`;
    }));