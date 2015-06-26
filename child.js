var exec = require('child_process').exec;
exec('osmfilter /home/karito/node/999.osc --keep="@user=Rub21 or @user=ediyes" -o=process.osm', 
	function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
        console.log('exec error: ', error);
    }
});