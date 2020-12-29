#!/usr/bin/env node
var xlsx = require('xlsx');
var dlMap = require('./DataLayer-Map');
var fs = require('fs');

var fileName = "out/Tag-Map.xlsx";
var workBookName = "Tag-Map";
var workSheetName = "Pretty";

var outRows = [];

[ ...Object.keys(dlMap.Bootstrapper.dataObject),
  ...Object.values(dlMap.Bootstrapper.dataObject),
  ...Object.keys(dlMap.Bootstrapper.dataObject.page),
  ...Object.keys(dlMap.Bootstrapper.dataObject.global)  ].map(function (c, ind, arr) {
  outRows.push(["Generated-Tag-Map", ind, c]);
});

/* set up the workbook. Docs are weird because I couldn't find anywhere it
 * states explicitly that a workbook is just an object */
var wb = {};
wb.Props = {};
wb.Props.Title = "Introductory Excel Worksheet";
wb.SheetNames = [];
wb.Sheets = [];

// create a worksheet from an array of arrays
var ws = xlsx.utils.aoa_to_sheet(outRows);

// add the sheet to the workbook
wb.SheetNames.push(workSheetName);
wb.Sheets[workSheetName] = ws;

// write the workbook to a file
xlsx.writeFile(wb, fileName);