let studentReport = [33, 35, 40, 8, 60, 24];
const limit = 35;

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < limit) {
    console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    
    if (studentReport[i] < limit) {
        console.log(studentReport[i]);
    }
    i++
}

studentReport.forEach(function (item) {
    if (item < limit) {
        console.log(item);
    }
});

for (let t in studentReport) {
    if (studentReport[t] < limit)
        console.log(studentReport[t])
}
    
