# Wayfarer PMSF SQL export

## Preface for Map Users

I have checked this script while editing and neither it nor the program that enables it is dangerous if used properly. I have been running Tampermonkey for years and have used it on both Ingress Intel (IITC plugin) and now Wayfarer with no issues. To be extra safe follow the optional security tips provided

It does not even get your player name let alone any personal or account data, and runs completely on your side of the conneection to Niantic

## Installation

* Required: Desktop/Laptop Computer & Google Chrome (may also work on FireFox, NOT recommended ot tested on mobile or tablets)

* First install Tampermonkey Plugin for Chrome Browser. Go to: https://www.tampermonkey.net/

* Click on download. You'll be redirected to Chrome's webstore
![installation](assets/installation_1.png?raw=true)

* Choose 'Add to Chrome'
![installation](assets/installation_2.png?raw=true)

* Now go to the new extension and open details
![installation](assets/installation_3.png?raw=true)
![installation](assets/installation_4.png?raw=true)

* OPTIONAL SECURITY TIP: Change the "Site Access" setting to On Click or On Specific Sites, specifying `https://wayfarer.nianticlabs.com`

![installation](assets/installation_5.png?raw=true)

* To install the script, click on '+'. An editor should now open. Delete all the text in it
![installation](assets/installation_6.png?raw=true)

* Open the script file in another browser window at this link: https://github.com/SenorKarlos/wayfarer-PMSF-export/blob/master/wayfarer-PMSF-export.js

![installation](assets/installation_12.png?raw=true)

* Copy the entire text in the code viewer, making sure not to get anything extra
![installation](assets/installation_9.png?raw=true)
![installation](assets/installation_10.png?raw=true)
* Then paste it into Tampermonkey's editor. In order to display the correct Submitted Date on the map we need to make one small edit if you are west of Universal Time (UTC London Time). Examples provided for North America at Midnight on the submission date. (3600 x hours offset) For UTC and east it should show the correct date, however if you want to stick with Midnight Local Time, simply use a negative number

Newfoundland Time - `12600`\
Atlantic Time - `14400`\
Eastern Time - `18000`\
Central time - `21600`\
Mountain Time - `25200`\
Pacific Time - `28800`

![installation](assets/installation_11.png?raw=true)
![installation](assets/installation_7.png?raw=true)

After saving & closing it should look like the following:
![installation](assets/installation_8.png?raw=true)




## Exporter Usage

* Go to the Wayfarer homepage and open your nominations page. If enabled, the script will create an overlay and add an export button. It's as easy as 1,2,3!

* 1 - Click Export to get the box to appear
![usage](assets/usage_1.png?raw=true)
* 2 - Click Copy Output to get the information we need

* 3 - Open Discord and send a DM to your Mapper (or however your Mapper requests) and paste. The message will likey be too long so Discord will automatically send it as a text file as shown, just click Upload
![usage](assets/usage_2.png?raw=true)
![usage](assets/usage_3.png?raw=true)

When finished, you should see this or a LOT of text in your message window.
![usage](assets/usage_4.png?raw=true)

Go back to your Wayfarer window & close the popup.
* OPTIONAL SECURITY TIP: While Tampermonkey only runs on the Nominations Page with our current setup, you can also click the new little icon beside your address bar and turn off the whole plugin or just the script as well. Refresh your screen and watch Export vanish! just don't forget to re-enable next update!
![usage](assets/usage_5.png?raw=true)


## Mapper Instructions (v1)

* These instructions assume you know MySQL basics and text editor basics

* Using your favorite text editor, Replace `username#1234` with the senders discord ID.
* Save the file as .sql or copy over to your MySQL client and execute.
* Run the POI watcher at https://github.com/SenorKarlos/POIwatcher to automatically delete accepted POI and to send webhooks based on PMSF manual submit. I suggest using the same webhook channel(s) you specify in $noDiscordPOISubmitChannel if you allow manual submissions.

### Thanks

* Credit to [PickleRickVE](https://github.com/PickleRickVE) and [xxLeevo](https://github.com/xxleevo) almost entirely, I've simply modified the original code with help!