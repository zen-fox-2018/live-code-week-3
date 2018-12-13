const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/acer/Documents/phase-1/week3/wednesday/live-code-week-3/mvc-sqlite-query/db/data.db');

module.exports = db;
