var side = 25;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var gishArr = [];
var gish2Arr = [];
var gish3Arr = [];



var matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 5, 5, 1, 4, 3],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 5, 3, 4, 1, 1, 2],
    [4, 1, 0, 0, 0, 1, 0, 0, 1, 0, 5, 3, 1, 1, 1, 1, 3],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 5, 4, 1, 1, 1, 1, 1, 1],
    [0, 4, 0, 3, 0, 1, 0, 0, 5, 0, 0, 1, 1, 1, 1, 3, 1],
    [0, 1, 0, 3, 3, 1, 0, 5, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 3, 3, 1, 5, 0, 1, 3, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 5, 1, 1, 1, 1],
    [0, 0, 0, 0, 5, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 5, 2, 1, 0, 0, 1, 0, 0, 1, 1, 3, 1, 3, 1],
    [2, 0, 5, 3, 0, 1, 0, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1],
    [2, 5, 5, 0, 0, 1, 0, 4, 1, 5, 4, 4, 5, 1, 1, 3, 1],
    [5, 1, 1, 1, 0, 1, 0, 2, 4, 4, 5, 4, 3, 3, 4, 4, 3],
]


function setup() {
    noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');

    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 3){
                var monster = new Monster(x,y);
                gishArr.push(monster);
            }
            else if (matrix[y][x] == 4){
                var monster = new Monster2(x,y);
                gish2Arr.push(monster);
            }
            else if (matrix[y][x] == 5){
                var monster = new Monster3(x,y);
                gish3Arr.push(monster);
            }
        }
    }
}

//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }else if (matrix[i][j] == 4) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }else if (matrix[i][j] == 5) {
                fill("purple");
                rect(j * side, i * side, side, side);
            }
            

        }
    }


    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var u in xotArr) {
        xotArr[u].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var u in eatArr) {
        eatArr[u].eat();
    }

    for (var u in gishArr){
        gishArr[u].eat();
    }
    for (var u in gish2Arr){
        gish2Arr[u].eat();
    }
    for (var u in gish3Arr){
        gish3Arr[u].eat();
    }
    
}
 
