# Que
## Phone recommendation platform

###What
Que is a phone recommendation platform, that provides users with recommendations based on their input
along with the ability to find more information through it

###Why
People often buy products that neither satisfies their needs, nor be of good value, due to the influence of marketing, hearsay opinions that are taken as facts, brand loyalty, and misleading or misinfo around specifications (e.g: RAM or megapixel count)

###How
Que addresses the issue through asking the user for their needs, not their wants, we gauge the features they care about the most and then provide recommendations we believe to be the most suited, we along include third party reviews to help the user make an educated choice


##Repo Map

The source is split into multiple folders and files:

- Index.html
	The main website file, contains all the HTML code
- /css/ folder This folder contains all the css files for the project, which are split to:
	-main.css  containing the main theme css code
	-search.css, view.css, list.css  the css code for the three different views in the webpage
-/db/ folder contains the phones data model and the psuedo data array
-/img/ folder contains all the images for the project
-/scripts/ includes all the javascript files that handle the logic of the website
	-navihation.js handles the button navigation through the website
	-view-phones.js handles the search algorithm and displaying the results
	-view-item.js handles displaying the selected item
