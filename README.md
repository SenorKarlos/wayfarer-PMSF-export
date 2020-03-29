# Wayfarer PMSF SQL export

## Preface for Map Users

I have checked this script while editing and neither it nor the program that enables it is dangerous if used properly. I have been running Tampermonkey for years and have used it on both Ingress Intel (IITC plugin) and now Wayfarer with no issues. To be extra safe follow the optional security tips provided.

## Installation

* Required: Desktop/Laptop Computer & Google Chrome (may also work on FireFox, NOT recommended ot tested on mobile or tablets)

First install Tampermonkey Plugin for Chrome Browser. Go to:

https://www.tampermonkey.net/

![installation](assets/installation_1.png?raw=true)
Click on download. You'll be redirected to Chrome's webstore.

Choose 'Add to Chrome'.
![installation](assets/installation_2.png?raw=true)

Now go the new extension...
![installation](assets/installation_3.png?raw=true)
![installation](assets/installation_4.png?raw=true)

...and open options.
![installation](assets/installation_5.png?raw=true)

* Optional Security Tip: Change the "Site Access" setting to On Click or On Specific Sites, specifying `https://wayfarer.nianticlabs.com`

To install the script, click on '+'. An editor should now open.
![installation](assets/installation_6.png?raw=true)

Open the script file in another browser window. https://github.com/SenorKarlos/wayfarer-PMSF-export/blob/master/wayfarer-PMSF-export.js Copy the entire text in the code viewer an paste it into Tampermonkey's editor. 
![installation](assets/installation_7.png?raw=true)

After saving & closing it should look like the following:
![installation](assets/installation_8.png?raw=true)


## Exporter Usage

Go to the Wayfarer homepage and open your nominations page. If enabled, the script will create an overlay and add an export button. It's as easy as 1,2,3!

* 1 - Click Export to get the box to appear
![usage](assets/usage_1.png?raw=true)
* 2 - Click Copy Export to get the information we need

* 3 - Open Discord and send a DM to your Mapper (or however your Mapper requests) and paste. If the message is too long (almost always) Discord will automatically send it as a text file as shown.
![usage](assets/usage_2.png?raw=true)
![usage](assets/usage_3.png?raw=true)

When finished, you should see this or a LOT of text in your message window.
![usage](assets/usage_4.png?raw=true)

Go back to your Wayfarer window & close the popup.
* Optional Security Tip: While the script only executes itself on the Nominations Page, you can also click the little icon beside your address bar and turn off the plugin or script as well. Refresh your screen and watch Export vanish! just don't forget to re-enable next update!
![usage](assets/usage_5.png?raw=true)


## Mapper Instructions (v1)

* These instructions assume you know MySQL basics and text editor basics

Using your favorite text editor, Replace `username#1234` with the senders discord ID.
Save the file as .sql or copy over to your MySQL client and execute
Run the POI watcher https://github.com/SenorKarlos/POIwatcher to automatically delete accepted POI and to send webhooks based on PMSF manual submit. I suggest using the same webhook channel(s) you specify in $noDiscordPOISubmitChannel if you allow manual submissions.

### Thanks

* Credit to [PickleRickVE](https://github.com/PickleRickVE) and [xxLeevo](https://github.com/xxleevo) almost entirely, I've simply modified the original code with help!