function starPattern4Stars() {
    let n=5;
    for(let i=0; i<n; i++){
         let row= "";
            for(let j=0; j<n; j++){
              row= row + "*" 
            }
            console.log(row);    
    }

    console.log("==========================================");

    for(let i=0; i<n; i++){
         let row= "";
            for(let j=0; j<i+1; j++){
              row= row + "*" ;
            }
            console.log(row); 
    }

    console.log("==========================================");

    let num = 5
     for(let i=0; i<num; i++){
         let row= "";
            for(let j=0; j<=i; j++){
              row= row  + (j+1);
            }
            console.log(row); 
    }

    console.log("==========================================");


     for(let i=0; i<num; i++){
         let row= "";
            for(let j=0; j<=i; j++){
              row= row  + (i+1);
            }
            console.log(row); 
    }

    console.log("==========================================");


     for(let i=0; i<num; i++){
         let row= "";
            for(let j=0; j<num-i; j++){
              row= row  + (j+1);
            }
            console.log(row); 
    }

    console.log("==========================================");

     for(let i=0; i<num; i++){
         let row= "";
            for(let j=0; j<num-i; j++){
              row= row  + ('*');
            }
            console.log(row); 
    }

    console.log("==========================================");

     for(let i=0; i<n; i++){
         let row= "";
            for(let j=0; j<n-(i+1); j++){
              row= row  + (' ');
            }
             for(let k=0; k<i+1; k++){
              row= row  + ('*');
            }
            console.log(row); 
    }

 console.log("==========================================");

    for (let i = 0; i < n; i++) {
        let row = "";
        let toggle = 1;
        for (let j = 0; j < i + 1; j++) {
            row += toggle;
            toggle = toggle === 1 ? 0 : 1;
        }
        console.log(row);
    }

    console.log("==========================================");
let toggle = 1;
    for (let i = 0; i < n; i++) {
        let row = "";
        
        for (let j = 0; j < i + 1; j++) {
            row += toggle;
            toggle = toggle === 1 ? 0 : 1;
        }
        console.log(row);
    }

}


starPattern4Stars()


