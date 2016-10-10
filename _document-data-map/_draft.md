

### A detailed breakdown of Sears Documents (Probably too deep for this part of the process)

1. Business Requirement Document ([BRD](https://www.dropbox.com/s/3ul75hyeezwkifh/Sears%20Optical%20Business%20Requirements.xlsx?dl=0 (edited)))
	* A breakdown of tasks, with related dates, deliverable, assignment and status
	* _Process to convert the data to json:_
		1. Delete rows that were not keys (Flare and graphics)
		2. Merge all of the week/date cells
		2. Export doc as CSV
		3. Use an [online csv to json converter](http://www.csvjson.com/csv2json)
		4. Cleaned up Contacts by removing unnecessary field and changing title for client contact 
	* Files created:

			Name | Needed? | CSV | JSON
			:-- | :-- | :-- | :--
			Contacts | ... | /csv/BRD/Contacts-Table 1.csv | /json/brd-contact.json
			Project Plan | ... | /csv/BRD/Project Plan-Table 1.csv | /json/...

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

### MASTER MAP, or a final output, if processed
Key Name | Value | Gobal | BRD | SDR | DLG | QA
:-- | :-- | :-: | :-: | :-: | :-: | :-:
Key key | lorem ipsum | X | 0 | 0 | 0 | 0
Custom Metrics:  by Implementation Strategy | | X | |
Custom Metrics: Map | | X | |
Custom Metrics: Implemented | | X | |
Custom Metrics: Where, When To Set | | X | |
Custom Metrics: Setting Example | | X | |
Custom Metrics: Re-allocated | | X | |
Custom Metrics: Used For | | X | |
Custom Metrics: CC | | X | |
Custom Metrics: Notes | | X | |