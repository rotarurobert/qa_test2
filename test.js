
module.exports = {
    pb1: function (string) {
        let split = string.split(":")
        hour = split[0]
        min = split[1]
        sec = split[2]
        let ok
        if (sec % 2 == 0) {
            ok = "P"
        } else {
            ok = "I"
        }
        console.log(ok)
        ceva = ""
        for (i = 1; i <= hour / 5; i++) {
            ceva += "h5 "
        }
        console.log(ceva)
        ceva = ""
        for (i = 1; i <= hour % 5; i++) {
            ceva += "h1 "
        }
        console.log(ceva)
        ceva = ""
        for (i = 1; i <= min / 5; i++) {
            ceva += "min5 "
        }
        console.log(ceva)
        ceva = ""
        for (i = 1; i <= min % 5; i++) {
            ceva += "min1 "
        }
        console.log(ceva)
    },
    pb2:function(string){
        let split = string.split(":")
        hour = split[0]
        min = split[1]
        sec = split[2]
        let ok
        if (sec % 2 == 0) {
            ok = "P"
        } else {
            ok = "I"
        }
        console.log(ok)
        console.log("h5 ".repeat(hour/5))
        console.log("h1 ".repeat(hour%5))
        console.log("min5 ".repeat(min/5))
        console.log("min1 ".repeat(min%5))
    }
}