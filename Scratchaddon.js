(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function(website) {
        window.location.href = website;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', ' %s', 'To', 'https://scratch.mit.edu'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('https://scratch.mit.edu', descriptor, ext);
})({});
