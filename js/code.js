fetch('../data/data.json')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    let results = data.results;
    console.log(results);
})