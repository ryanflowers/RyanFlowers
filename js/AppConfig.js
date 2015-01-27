require.config({});

require(['AppMain'], function (Main) {
    var appMain = new Main();
    appMain.run();
});
