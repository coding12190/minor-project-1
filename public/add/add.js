document.getElementById("form-btn").addEventListener("click",postData);

function postData(){
    const info={};
    info.name=document.getElementById("name").value;
    info.sem=document.getElementById("sem").value;
    info.contact=document.getElementById("contact").value;
    info.books=document.getElementById("books").value.split("\n");
   
    const options={
        method:"POST",
        body:JSON.stringify(info),
        headers:{
            'Content-type':'application/json'
        }
    }
    fetch("/api1",options)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            document.getElementById("message").innerText="Successfully Posted!!";
            setTimeout(()=>{
                document.getElementById("message").innerText="";
            },1000)
        })
}
