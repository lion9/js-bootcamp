let studentScore = 17;
let maxScore = 20;
let percent = (studentScore / maxScore * 100).toFixed();
let grade = percent >= 90 && percent <= 100 ? 'A' :
            percent >= 80 && percent <= 89 ? 'B' :
            percent >= 70 && percent <= 79 ? 'C' :
            percent >= 60 && percent <= 69 ? 'D' : 'F';
console.log(`${studentScore}/${maxScore} -> You got a ${grade} (${percent}%)`);