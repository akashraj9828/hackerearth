 convert =function(A, B){

        if(B==1){
            return A
        }
        ar=[]
        for(i=0;i<B;i++)
            ar.push([])
         j=0
         dir=-1;

        for(i=0;i<A.length;i++){
            // console.log("---: convert -> i", i%B);
            // console.log("---: convert -> A[i]", A[i]);
            
            if(i%(B-1)==0){
                dir=-dir
            }
            ar[j].push(A[i])
            j=j+dir;

        }
            
        
        ans=''
        for(i=0;i<B;i++){
            ans+=ar[i].join('');
            console.log("---: convert -> ar[i]", ar[i]);

        }

        console.log("---: convert -> ans", ans);
        return ans
    }

    convert("PAYPALISHIRING", 3)
    // A ="kHAlbLzY8Dr4zR0eeLwvoRFg9r23Y3hEujEqdio0ctLh4jZ1izwLh70R7SAkFsXlZ8UlghCL95yezo5hBxQJ1Td6qFb3jpFrMj8pdvP6M6k7IaXkq21XhpmGNwl7tBe86eZasMW2BGhnqF6gPb1YjCTexgCurS"
    // B = 1
    // convert(A,B)