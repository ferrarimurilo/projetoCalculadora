console.log("aaaa")

process.stdin.on("data", (data) => {
    let abc = data.toString()
    console.log(abc, "asdasdasd")
})