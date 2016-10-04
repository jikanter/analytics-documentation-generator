#!/bin/bash
PUBLISH_TO=/c/Users/jordan.kanter/Dropbox\ \(Stratigent\)/Individual\ -\ Jordan/Clients/United/
if [ "${1}" = "" ]; then
  echo "usage: doc.sh <action>"; exit 1;
fi
if [ "${1}" = "run" ]; then
 ../../node_modules/jsdoc/jsdoc.js --verbose DataLayer-Map.js
elif [ "${1}" = "publish" ]; then
  cp -r out/ ${PUBLISH_TO}
  cp DataLayer-Map.js ${PUBLISH_TO}
elif [ "${1}" = "run-csv" ]; then
  ./js2csv.js
elif [ "${1}" = "run-pdf" ]; then
  ./js2pdf.js
fi
