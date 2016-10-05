Stratigent Documentation Generator prototype using jsdoc

Once you have received your invite, please check out the repository and run the output

To install

1. download wkhtmltopdf v0.12.3.2 and install
	https://www.dropbox.com/s/ov5rusafmc7hu5p/wkhtmltox-0.12.3.2_msvc2013-win64.exe?dl=0 (64 bit)

2. Install nodejs (http://nodejs.org)
2. navigate to the directory of your checkout on the command line using bash (either the shell in mac, or 
the bash shell for windows at (http://git-scm.com/download/win)
3. $ npm install # install dependencies
4. $ chmod +x doc.sh # make it executable 
5. $ ./doc.sh run # generate your directory

This creates a fancy HTML file with your data layer map file.

TODO: add custom filters to output PDF/CSV
TODO: add custom tags for tagmap/sdr
