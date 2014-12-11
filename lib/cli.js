
var argv = require('optimist').argv,
    path = require('path'),
    fs = require('fs'),
    logger = require('./logger'),
    clc = require('cli-color'),
    Q = require('q'),
    Table = require('easy-table'),
    version = require('../package').version;

module.exports = function() {

    "use strict";

    if (argv.h) {
        logger.p('it-ebooks v' + version);
        logger.p('Usage: yesbee [-h] [-c filename] [-p directives] [-s signal]');
        logger.p('\nOptions');
        logger.p(Table.printObj({
            '  -h help': 'show this help',
            '  -c configuration file': 'set configuration file (default: ./manifest.json)',
            '  -p properties': 'set properties out of configuration file',
            '  -s signal': 'send signal to a master process: stop, restart'
        }));

        logger.p('Properties');
        logger.p(Table.printObj({
            '  container': 'container which yesbee will run at',
            '  worker': 'number of worker will be activated',
            '  autostart': 'services that autostarted',
            '  dependencies': 'custom scope dependencies (loaded before container scope)'
        }));
    }

};
