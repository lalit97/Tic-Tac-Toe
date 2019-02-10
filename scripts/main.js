//main()

flag = 0;
count = 0;
result = "";

l = document.getElementsByTagName("td");

document.getElementById("table_data").onclick = function(e){
    if (flag == 0){
        if (e.target.innerHTML.length == 0){  //avoids double click 
            if (count % 2){
                text = "O";
            }
            else{
                text = "X";
            }
            count += 1;
            e.target.innerHTML = text;
            check_for_win(text);
        }    
    }
    else{
        alert("game over");
    }
}


document.getElementById("play_again").onclick = function(){
    window.location.reload();
}


//functions


function check_for_win(text){
    if (l[0].innerHTML == l[3].innerHTML && l[0].innerHTML == l[6].innerHTML &&l[0].innerHTML != ""){
        draw_straight_line(540,540,100,360,100,360,'y2');
        displayResult(text);
    }
    else if (l[1].innerHTML == l[4].innerHTML && l[1].innerHTML == l[7].innerHTML &&l[1].innerHTML != ""){
        draw_straight_line(639,639,100,360,100,360,'y2');
        displayResult(text);
    }
    else if (l[2].innerHTML == l[5].innerHTML && l[2].innerHTML == l[8].innerHTML &&l[2].innerHTML != ""){
        draw_straight_line(739,739,100,360,100,360,'y2');
        displayResult(text);
    }
    else if (l[0].innerHTML == l[1].innerHTML && l[0].innerHTML == l[2].innerHTML &&l[0].innerHTML != ""){
        draw_straight_line(520,755,130,130,520,755,'x2');
        displayResult(text);
    }
    else if (l[3].innerHTML == l[4].innerHTML && l[3].innerHTML == l[5].innerHTML &&l[3].innerHTML != ""){
        draw_straight_line(520,755,230,230,520,755,'x2');
        displayResult(text);
    }
    else if (l[6].innerHTML == l[7].innerHTML && l[6].innerHTML == l[8].innerHTML &&l[6].innerHTML != ""){
        draw_straight_line(520,755,331,331,520,755,'x2');
        displayResult(text);
    }
    else if (l[2].innerHTML == l[4].innerHTML && l[2].innerHTML == l[6].innerHTML &&l[2].innerHTML != ""){
        displayResult(text);
    }
    else if (l[0].innerHTML == l[4].innerHTML && l[0].innerHTML == l[8].innerHTML &&l[0].innerHTML != ""){
        displayResult(text);
    }
    else if (count == 9){
        alert("match drawn");
        flag = 1;
    }
}




function draw_straight_line(x1,x2,y1,y2,from,to,attr){
    document.getElementById("svg_line").innerHTML = '<svg width="1200" height="600">\
    <line id="line" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'">\
    <animate id="animation" attributeType="XML" attributeName="'+attr+'" from="'+ from +'" to="'+ to +'" dur="2s"/>\
    </line></svg>'
}




// function draw_diagonal_line(){
//     document.getElementById("svg_line").innerHTML = '<svg width="1200" height="600">\
//     <line id="line1" x1="752" y1="186" x2="512" y2="429"></svg>'    
// }




function displayResult(text){
    setTimeout(function(){
        r_string = text + " Wins!";
        document.getElementById("result_string").innerHTML = r_string;
    }, 200);
    flag = 1;
}    
//512 186 752 429 
//752 186 512 429 
