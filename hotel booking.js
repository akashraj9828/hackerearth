    
    // logic arrage both times in increasing order
    // loop through it
    // if arrival time encountered increment room count and check count<rooms available
    
    var A = [1, 2, 3, 4]    //arrival time
    var B = [10, 2, 6, 14]  //departure time
    var C = 2               //rooms available
    var a = A.sort(function(a,b){
        return a-b;
    })
    var b = B.sort(function(a,b){
        return a-b;
    })

    // console.log(a,b)
    var ai = 0;
    var bi = 0;
    var count = 0;
    // console.log("ai: "+ ai +" bi: "+bi);
    
    // console.log('aaaaaaa');
    var len=a.length+b.length
    for (var i = 0; i <len; i++) {
    // console.log("ai: "+ ai +" bi: "+bi);

        // console.log(i);
        
        if (a[ai] < b[bi]) {
            // console.log(a[ai] +"<"+ b[bi])
            // console.log("check in: " + a[bi])
            count=count+1;
            // console.log("room used: " + count)
            if (count > C) {
                return 0;
                // console.log("Overflow")
            }
            ai=ai+1;
        }else
        if (b[bi] < a[ai]) {
            // console.log(a[ai] +">"+ b[bi])
            // console.log("check out: " + b[bi])
            count=count-1;
            // console.log("room used: " + count)
            bi=bi+1;
        }else
        if (a[ai] == b[bi]) {
            // console.log("check in/out: " + b[bi])
            ai++;
            bi++;
        }
    }
    return 1;
    // console.log("Perfect")

