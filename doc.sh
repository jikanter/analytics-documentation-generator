#!/bin/bash -x
#PUBLISH_TO=/c/Users/jordan.kanter/Dropbox\ \(Stratigent\)/Individual\ -\ Jordan/Clients/Airline/
#PUBLISH_TO=/Users/admin/Dropbox\ \(Stratigent\)/Individual\ -\ Jordan/Clients/Airline/
PUBLISH_TO=$(pwd)/../../doc
# remove 64 from MINGW
PLATFORM=$(exec uname -s | cut -d "6" -f 1)
MKPDF="server/pdfgen"
WINMKPDF="${MKPDF}"
REMOTE_HOST=
FORMATTING_SCRIPT="javascript:(function(){ document.querySelector('h1').setAttribute('style', 'visibility:hidden'); document.querySelector('h2').setAttribute('style', 'visibility:hidden'); document.querySelector('nav h2').setAttribute('style', 'visibility:hidden');})()"

if [[ "${1}" = "" ]]; then
  echo "usage: doc.sh <action>"; exit 1;
fi

if [[ "${1}" = "run" ]] && [[ "${2}" = "" ]]; then
  node_modules/jsdoc/jsdoc.js --verbose DataLayer-Map.js
elif [[ "${1}" = "run" ]] && [[ "${2}" = "server" ]]; then
  node server/ui.js
  node server/static.js
elif [[ "${1}" = "run" ]] && [[ "${2}" = "sdr" ]]; then
  echo "generating an sdr"
  node_modules/jsdoc/jsdoc.js --verbose DataLayer-Map.js
  if [ "${PLATFORM}" = "MINGW" ]; then
    ${WINMKPDF} --javascript-delay 500 --debug-javascript --run-script "${FORMATTING_SCRIPT}" --run-script "javascript:(function(){ document.querySelectorAll('h3')[1].innerText = 'Stratigent SDR';})()" out/index.html out/sdr.pdf
  else
    ${MKPDF} --javascript-delay 500 --debug-javascript --run-script "${FORMATTING_SCRIPT}" --run-script "javascript:(function(){ document.querySelectorAll('h3')[1].innerText = 'Stratigent SDR';})()" out/index.html out/sdr.pdf
  fi
elif [ "${1}" = "run" ] && [ "${2}" = "tag-map" ]; then
   node_modules/jsdoc/jsdoc.js --verbose DataLayer-Map.js
  if [ "${PLATFORM}" = "MINGW" ]; then
   ${WINMKPDF} --javascript-delay 500 --debug-javascript --run-script "${FORMATTING_SCRIPT}" --run-script "javascript:(function(){ document.querySelectorAll('h3')[1].innerText = 'Stratigent Tag Map';})()" out/index.html out/tag-map.pdf
  else
    ${MKPDF} --javascript-delay 500 --debug-javascript --run-script "${FORMATTING_SCRIPT}" --run-script "javascript:(function(){ document.querySelectorAll('h3')[1].innerText = 'Stratigent Tag Map';})()" out/index.html out/tag-map.pdf
  fi
elif [ "${1}" = "publish" ]; then
  cp -r out/ "${PUBLISH_TO}"
  cp DataLayer-Map.js "${PUBLISH_TO}"
elif [ "${1}" = "run-csv" ]; then
  # just experimental. Do not use
  node ./js2csv.js
elif [ "${1}" = "run-pdf" ]; then
  # just experimental. Do not use
  ./js2pdf.js
elif [[ "${1}" = "run-excel" || "${1}" = "run-xslx" ]]; then
  ./js2xlsx.js
fi
