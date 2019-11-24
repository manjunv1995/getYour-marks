function getValue() {
    let teluguMarks = document.getElementById("teluguMarks").value;
    let englishMarks = document.getElementById("englishMarks").value;
    let mathsMarks = document.getElementById("mathsMarks").value;
    let scienceMarks = document.getElementById("scienceMarks").value;
    let socialMarks = document.getElementById("socialMarks").value;

    let result = parseInt(teluguMarks) + parseInt(englishMarks) + parseInt(mathsMarks) + parseInt(scienceMarks) + parseInt(socialMarks);
    document.getElementById("urMarks").innerHTML = result;
    let percentage = this.percentage(result);

}

function percentage(result) {
    let gotIt = (result / 500) * 100;
    document.getElementById("urPercentage").innerHTML = gotIt;
}