/// <reference path="AppMain"/>
//test
require.config({
});

require(['AppMain'],
    (Main: any) => {
        var appMain = new Main();
        appMain.run();
    });

