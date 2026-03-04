import http from "http";

const server = http.createServer(req, res)=>{
const url= req.url;
const method = req.method;
// routing manual
if(url === "/"&& method === "GET"){
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({message:"Selamat datang di halaman home"});
}else if(){url ==="/about"&& methode === "GET"){
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({message:"Halaman About"});
}else if{url?.startsWith("/users/")&& method === "GET"){
    const id =url.split("/")(2)
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({message:`user ID:${id}));
}else {
     res.writeHead(200,{"content-type":"application/json"});
    res.end{JSON.stringify({message:"Router tidak ditemukan"});
}
});
server.listen(3000,()=>{
    console.log("server berjalan di http://localhost:300");
}