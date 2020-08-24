function loadPosts(){
    fetch('/api')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        data.forEach(element => {
            const books= element.books.map((book)=>
                    (`<li>${book}</li>`)
                ).join("");
            
            
    //        document.getElementById("posts").innerHTML+= `<div class="post">
    //        <div class="card flex-column">
    //            <div class="sem"><h3>${element.sem} sem</h3></div>
    //            <div class="name"><h3>${element.name}</h3></div>
    //                <div class="books">
    //                    <ul>
    //                        ${books}
    //                    </ul>
    //                </div>
    //            <div class="contact"><h3>${element.contact}</h3></div>
    //        </div>
    //    </div>`;
    document.getElementById("posts").innerHTML+= `
    <div class="card flex-column">
        <div class="sem"><h3>${element.sem} sem</h3></div>
        <div class="name"><h3>${element.name}</h3></div>
            <div class="books">
                <ul>
                    ${books}
                </ul>
            </div>
        <div class="contact"><h3>${element.contact}</h3></div>
    </div>
`;
           
        });
    })
  

}
loadPosts();
