var myPromise = new Promise(function(resolve, reject) {
    const x = 40;
    const y = 40;
    if (x === y) {
        resolve();
    } else {
        reject();
    }
})
myPromise.
then(function() {
    console.log('success');
}).
catch(function() {
    console.log('error');
});