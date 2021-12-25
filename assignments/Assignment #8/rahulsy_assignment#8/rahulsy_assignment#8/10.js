let aCount=0 ,bCount=0 ,cCount=0 ,dCount=0 ,eCount=0 ,fCount=0 ,gCount=0 ,hCount=0 ,iCount=0 ,jCount=0 ,kCount=0 ,lCount=0 ,mCount=0 ,nCount=0 ,oCount=0 ,pCount=0 ,qCount=0 ,rCount=0 ,sCount=0 ,tCount=0 ,uCount=0 ,vCount=0 ,wCount=0 ,xCount=0 ,yCount=0 ,zCount=0 ;

const str=prompt("Enter any string!");

let alphabets;
if (str){
    alphabets =  str.split('');
    document.write("<h1>Entered string: " + str +" </h1>")

    for(let i=0; i<=alphabets.length; i++){
        switch(alphabets[i]){
            case "a":
            case "A":
            aCount++;
            break;  
            case "b":
            case "B":
            bCount++;
            break; 
            case "c":
            case "C":
            cCount++;
            break; 
            case "d":
            case "D":
            dCount++;
            break; 
            case "e":
            case "E":
            eCount++;
            break; 
            case "f":
            case "F":
            fCount++;
            break; 
            case "g":
            case "G":
            gCount++;
            break; 
            case "h":
            case "H":
            hCount++;
            break; 
            case "i":
            case "I":
            iCount++;
            break; 
            case "j":
            case "J":
            jCount++;
            break; 
            case "k":
            case "K":
            kCount++;
            break; 
            case "l":
            case "L":
            lCount++;
            break; 
            case "m":
            case "M":
            mCount++;
            break; 
            case "n":
            case "N":
            nCount++;
            break; 
            case "o":
            case "O":
            oCount++;
            break; 
            case "p":
            case "P":
            pCount++;
            break; 
            case "q":
            case "Q":
            qCount++;
            break; 
            case "r":
            case "R":
            rCount++;
            break; 
            case "s":
            case "S":
            sCount++;
            break; 
            case "t":
            case "T":
            tCount++;
            break; 
            case "u":
            case "U":
            uCount++;
            break; 
            case "v":
            case "V":
            vCount++;
            break; 
            case "w":
            case "W":
            wCount++;
            break; 
            case "x":
            case "X":
            xCount++;
            break; 
            case "y":
            case "Y":
            yCount++;
            break; 
            case "z":
            case "Z":
            zCount++;
            break;   
        }
    }
    if(aCount)document.write("<p>a:"+aCount+"</p>");
    if(bCount)document.write("<p>b:"+bCount+"</p>");
    if(cCount)document.write("<p>c:"+cCount+"</p>");
    if(eCount)document.write("<p>e:"+eCount+"</p>");
    if(fCount)document.write("<p>f:"+fCount+"</p>");
    if(gCount)document.write("<p>g:"+gCount+"</p>");
    if(hCount)document.write("<p>h:"+hCount+"</p>");
    if(iCount)document.write("<p>i:"+iCount+"</p>");
    if(jCount)document.write("<p>j:"+jCount+"</p>");
    if(kCount)document.write("<p>k:"+kCount+"</p>");
    if(lCount)document.write("<p>l:"+lCount+"</p>");
    if(mCount)document.write("<p>m:"+mCount+"</p>");
    if(nCount)document.write("<p>n:"+nCount+"</p>");
    if(oCount)document.write("<p>o:"+oCount+"</p>");
    if(pCount)document.write("<p>p:"+pCount+"</p>");
    if(qCount)document.write("<p>q:"+qCount+"</p>");
    if(rCount)document.write("<p>r:"+rCount+"</p>");
    if(sCount)document.write("<p>s:"+sCount+"</p>");
    if(tCount)document.write("<p>t:"+tCount+"</p>");
    if(uCount)document.write("<p>u:"+uCount+"</p>");
    if(vCount)document.write("<p>v:"+vCount+"</p>");
    if(wCount)document.write("<p>w:"+wCount+"</p>");
    if(xCount)document.write("<p>x:"+xCount+"</p>");
    if(yCount)document.write("<p>y:"+yCount+"</p>");
    if(zCount)document.write("<p>z:"+zCount+"</p>");
}else{
    alert("Empty string is not allowed!")
}



