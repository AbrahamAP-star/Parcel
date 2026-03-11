const $app=document.getElementById("app"),API="https://api.escuelajs.co/api/v1/products?offset=0&limit=10",main=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10");await t.json();let e=products?.map(t=>`
        <article class="Card">
            <img src="${t.images[0]}" alt="${t.title}" />
            <h2>${t.title} <small>Precio: $ ${t.price}</small> </h2>
            <p>${t.description}</p>
            <p>${t.price}</p>
            <button>Comprar</button>
        </article>
        `).join(""),a=document.createElement("section");a.classList.add("Items"),a.innerHTML=e,$app.appendChild(a)};main();
//# sourceMappingURL=Parcel.db71460e.js.map
