let d = new Date();
//Second task

function addSuffix1(d) {
    if (d.getDate() % 10 == 1 ||
        d.getDate() % 10 == 2 ||
        d.getDate() % 10 == 5 ||
        d.getDate() % 10 == 7 ||
        d.getDate() % 10 == 8 ||
        d.getDate() == 20) {
        return `Bugün ayın ${d.getDate()}-dir -> ${d.getDate()}-dir`;
    } else if (d.getDate() % 10 == 3 ||
        d.getDate() % 10 == 4) {
        return `Bugün ayın ${d.getDate()}-dür -> ${d.getDate()}-dür`;
    } else if (d.getDate() % 10 == 9 ||
        d.getDate() % 10 == 0) {
        return `Bugün ayın ${d.getDate()}-dur -> ${d.getDate()}-dur`;
    }
    return `Bugün ayın ${d.getDate()}-dır -> ${d.getDate()}-dır`;
}

console.log(addSuffix1(new Date(2019, 4, 4)));


function addSuffix2(d) {
    return (d.getDate() % 10 == 1 || d.getDate() % 10 == 2 || d.getDate() % 10 == 5 || d.getDate() % 10 == 7 || d.getDate() % 10 == 8 || d.getDate() == 20 ? `Bugün ayın ${d.getDate()}-dir`
        : (d.getDate() % 10 == 3 || d.getDate() % 10 == 4 ? `Bugün ayın ${d.getDate()}-dür`
            : (d.getDate() % 10 == 9 || d.getDate() % 10 == 0 ? `Bugün ayın ${d.getDate()}-dur`
                : `Bugün ayın ${d.getDate()}-dır`)));

}
console.log(addSuffix2(d));

//Third task
function getMonthName(d) {
    let monthList = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    return monthList[d.getMonth()];
}

function quarter(d) {
    let month = d.getMonth();
    let quarterOfTheYear = 12 / 4;
    return `${d.getDate()} ${getMonthName(d)} -> ` + (Math.ceil((month + 1) / quarterOfTheYear));
}

console.log(quarter(d));