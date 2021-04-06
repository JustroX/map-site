# CWTS Map

> Web app for saving Google Maps coordinates to Google Sheets.

Website link: [cwts-map.netlify.app](https://cwts-map.netlify.app)

1. Save coordinates in two clicks.
2. Supports feature identification ( tree, shrub, others )
3. Display feature markers 🌳
4. Display boundary lines 🗺
5. Compatible with the previous [chrome extension](https://github.com/JustroX/cwts-extension)

# Why?

It saves time.

# Getting Started

1. Create Spreadsheet

   - **IMPORTANT:** Add header rows (`Latitude`,`Longitude`,etc.)

   ![Extension](readme_images/header.PNG)

   - Share the sheet to the extension server's email (`hatchling@evident-wind-286216.iam.gserviceaccount.com`)
   - Copy the sheet ID (from the URL)
     `https://docs.google.com/spreadsheets/d/{SHEET_ID_HERE}/edit#gid=0`

2. Start working

   - Input sheet ID

     ![Screenshot](readme_images/1.PNG)

   - Navigate the map to your assigned location. You can use the pan controls.

     ![Screenshot](readme_images/2.PNG)

   - Right click on a point and select the feature type.

     ![Screenshot](readme_images/3.PNG)

3. Tada 🎉

   - If the coordinates were saved successfully the markers will be displayed.

     ![Screenshot](readme_images/4.PNG)

     ![Screenshot](readme_images/5.PNG)

# How to add bounday lines?

1. Go to [openstreetmap.org](https://nominatim.openstreetmap.org/)
2. Search your assigned location

   ![Screenshot](readme_images/6.PNG)

3. Click details

   ![Screenshot](readme_images/7.PNG)

4. Click **API request**

   ![Screenshot](readme_images/8.PNG)

5. Copy the whole metadata

   ![Screenshot](readme_images/9.PNG)

6. Paste the metadata to the web app text area named **Boundary Data**

   ![Screenshot](readme_images/10.PNG)

7. Click show boundary and if there's no error the boundary will be displayed

   ![Screenshot](readme_images/11.PNG)

# Contribute

- Fork repo and open PR
- Give stars ⭐
