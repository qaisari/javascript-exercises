self.onmessage = function (event) {
    console.log("Main: " + event.data)
    let x = 10000000000
    while (x > 0) x--
    self.postMessage("Hello main.")
}