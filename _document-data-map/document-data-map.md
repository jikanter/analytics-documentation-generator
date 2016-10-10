#Stratigent Document Generator:
##The Map

_Sample documents: Sears optical looks like it has a complete set._

1. Business Requirement Docs ([BRD](https://www.dropbox.com/s/3ul75hyeezwkifh/Sears%20Optical%20Business%20Requirements.xlsx?dl=0 (edited)))
	* Basic description of what is in BRD
	* _Process to convert the data to json:_
		1. Delete rows that were not keys (Flare and graphics)
		2. Export doc as CSV
		3. Use an [online csv to json converter](http://www.csvjson.com/csv2json)
	* Files created:

			Name | Needed? | CSV | JSON
			:-- | :-- | :-- | :--
			... | ... | /csv/SDR/... | /json/...

* Solution Design Requirements ([SDR](https://www.dropbox.com/s/mcordxd0da1913f/Luxottica%20Global%20SDR-Sears%20Optical.xlsx?dl=0))
	* This living documentation contains the implementation strategy for  Luxottica Retail.
	* _Process to convert the data to json:_
		1. Delete rows that were not keys (Flare and graphics)
		2. Export doc as CSV
		3. Use an [online csv to json converter](http://www.csvjson.com/csv2json)
	* Files created:

			Name | Needed? | CSV | JSON
			:-- | :-- | :-- | :--
			| | /csv/SDR/cc-Table 1.csv | /json/...
			| | /csv/SDR/Custom Metric by Strategy-Table 1.csv | /json/...
			| | /csv/SDR/Custom Metric Map-Table 1.csv | /json/...
			| | /csv/SDR/Implemented-Table 1.csv | /json/...
			| | /csv/SDR/Notes-Table 1.csv | /json/...
			| | /csv/SDR/Re-allocated Metrics-Table 1.csv | /json/...
			| | /csv/SDR/Setting Example-Table 1.csv | /json/...
			| | /csv/SDR/Used For-Table 1.csv | /json/...
			| | /csv/SDR/Welcome-Table 1.csv | /json/...
			| | /csv/SDR/Where, When to Set-Table 1.csv | /json/...

* _dataLayer Guide ([DLG](https://www.dropbox.com/s/dqxq78nrmcdzk46/SearsOptical-Data%20Layer%20Map-150327.xlsx?dl=0))
	* Basic description of what is in a dLG 
	* _Process to convert the data to json:_
		1. Delete rows that were not keys (Flare and graphics)
		2. Export doc as CSV
		3. Use an [online csv to json converter](http://www.csvjson.com/csv2json)
	* Files created:

			Name | Needed? | CSV | JSON
			:-- | :-- | :-- | :--
			Data Layer Guide | YES | /csv/_dataLayerGuide.csv | /json/_dataLayerGuide.json

* Quality Assurance ([QA](https://www.dropbox.com/s/aser78zvyv13ip8/Sears%20Optical%20-%20DEV%20Testing%206.15.xlsx?dl=0))
	* Basic description of what is in QA 
	* _Process to convert the data to json:_
		1. Delete rows that were not keys (Flare and graphics)
		2. Export doc as CSV
		3. Use an [online csv to json converter](http://www.csvjson.com/csv2json)
	* Files created:

			Name | Needed? | CSV | JSON
			:-- | :-- | :-- | :--
			QA Doc | YES | /csv/qa.csv | /json/qa.json 


Key Name | Value | Gobal | BRD | SDR | DLG | QA
:-- | :-- | :-: | :-: | :-: | :-: | :-:
Key key | lorem ipsum | X | 0 | 0 | 0 | 0