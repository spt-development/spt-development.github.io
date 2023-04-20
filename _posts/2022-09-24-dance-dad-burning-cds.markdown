---
layout: post
title:  "Dance dad: Burning CDs"
date:   2022-09-24 13:30:00 +0000
author: Simon Taylor
categories: facebook ffmpeg cd mp4 mp3 macos
published: false
---

This is a record of the steps taken to burn an audio file received via [Facebook Messenger](https://www.messenger.com/) to a CD, in my case for
my daughters dance competition. Downloading an audio file from messenger isn't partciularly intuitive and once I managed to do that, I needed 
to use [ffmpeg](https://ffmpeg.org/) to convert the downloaded file from [mp4](https://en.wikipedia.org/wiki/MP4_file_format) to 
[mp3](https://en.wikipedia.org/wiki/MP3), before using [Apple Music](https://en.wikipedia.org/wiki/Apple_Music) to burn the music to CD.

## Downloading audio files from Facebook Messenger

Facebook used to make it fairly straight forward to download audio files from Messanger, for some reason they now make it as difficult as
possible. These steps were performed in Google Chrome on Mac OS, but shouldn't vary too much from browser to browser, or OS to OS. They
will need to be performed on a desktop rather than mobile device however.

### 1. Open messages

Browse to the messages containing the audio file(s).

![facebook messenger](/assets/images/2022-09-24-dance-dad-burning-cds/facebook-messenger.jpeg){:class="img-fluid"}

### 2. Open up browser dev tools

Hit F12 or however you prefer to open the browser dev tools and then select the network tab.

![idev tools](/assets/images/2022-09-24-dance-dad-burning-cds/dev-tools.jpeg){:class="img-fluid"}

### 3. Play the audio file

Click on the audio file to start it playing. If you have already played it, then refresh the Facebook Messenger page first and clear out the 
network history to make it easier to see which audio file was downloaded when you hit play. Then right click the audio file that appears
in the network window and select "Open in new tab". The audio file will be saved to your downloads folder.

![download audio](/assets/images/2022-09-24-dance-dad-burning-cds/download-audio-file.jpeg){:class="img-fluid"}

[EDIT: 01/04/2023 - Facebook now appears to download all of the mp4 files when the messages page is opened rather than when it is first played. 
I found no way of tying an mp4 file to a particular message, so I had to right click on each one in turn in the dev tools window, to find the 
one I wanted.]

## Converting mp4 to mp3

If you received an mp3 file, this step can be skipped. If you received an mp4 for example, then you will need to convert it
to an mp3 file. If you try buring an mp4 file to CD, you will find that only the first 6 seconds gets written to the CD. I used ffmpeg
that I had previously installed with [brew](https://formulae.brew.sh/formula/ffmpeg), to convert the file with the following command:

{% gist c65fe53fa7f379108e3fe6e956254c48 %}

## Burning the audio file to CD

### 1. Create a new playlist

Open Apple Music and create a new playlist.

![new playlist](/assets/images/2022-09-24-dance-dad-burning-cds/new-play-list.jpeg){:class="img-fluid"}

![new playlist](/assets/images/2022-09-24-dance-dad-burning-cds/new-play-list-2.jpeg){:class="img-fluid"}

### 2. Add the audio file to the playlist

Find the previously downloaded/converted file in finder and drag it and drop it on to the newly created playlist in Apple Music.

![new playlist](/assets/images/2022-09-24-dance-dad-burning-cds/new-play-list-3.jpeg){:class="img-fluid"}

### 3. Burn the CD

With a blank CD already inserted into the CD burner, right click the newly created playlist and select "Burn Playlist to Disc..."; in
the dialog that is opened, leave the defaults selected and click "Burn" - the "Audio CD" format seems to be the most likely format to work,
in a random CD player, but make sure you test the burnt CD!

![burn cd](/assets/images/2022-09-24-dance-dad-burning-cds/burn-cd.jpeg){:class="img-fluid"}

![burn cd](/assets/images/2022-09-24-dance-dad-burning-cds/burn-cd-2.jpeg){:class="img-fluid"}

### 4. Test the CD!!!

I tested it in an old CD player to give confidence that it will probably work at the dance festival.
