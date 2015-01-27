/// <reference path="modules/require.d.ts" />
/// <reference path="AppMain.ts" />

require.config({
    //baseUrl: '../' // commented for now
});

require(['AppMain'],
    (Main: any) => {
        var appMain = new Main();
        appMain.run();
    });