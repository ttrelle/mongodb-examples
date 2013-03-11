function line() {
	print("--------------------------------------")
}

function showDbs() {
       var dbs = db.getMongo().getDBs();
        var size = {};
        dbs.databases.forEach(function (x) { size[x.name] = x.sizeOnDisk; });
        var names = dbs.databases.map(function (z) { return z.name; }).sort();
        names.forEach(function (n) {
            if (size[n] > 1) {
                print(n + "\t" + size[n] / 1024 / 1024 / 1024 + "GB");
            } else {
                print(n + "\t(empty)");
            }
        });
}

function welcome() {
	line()
	print("Host: " + db.serverStatus().host );
	line()
	showDbs()
	line()
}

prompt = function() {
	return db + "> ";
}

welcome()