function doHomework(subject,callback) {
    console.log(`bat dau lam bai tap ${subject}`);
    callback();
}
function done(){
    console.log(`da hoan thanh bai tap`);
    
}
doHomework("js",done);