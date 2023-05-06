---
layout: post
title:  "spt-development-cid 2.0.11 - 11th time lucky"
date:   2022-04-11 20:00:59 +0000
author: Simon Taylor
categories: microservices correlation spring opensource travis
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
---
TLDR; The versions 2.0.1 to 2.0.11 of spt-development-cid are identical to 2.0.0 and therefore there is no pressing need to upgrade.

In an effort to stream line the release process of the spt-development-cid (and ultimately the other related projects) we managed to
burn through 11 patch release numbers, without actually making any code changes. We have therefore removed all but the 
[2.0.11 release](https://github.com/spt-development/spt-development-cid/releases/tag/2.0.11) from Github and would also remove them
from [Maven Central](https://mvnrepository.com/artifact/com.spt-development/spt-development-cid) if we were able to.

Just to reiterate, there is nothing wrong with versions 2.0.1 to 2.0.11 other than they contain no changes when compared to version 2.0.0.
{: class="lead"}

## Automated Release

Below is a summary of some of the problems we ran into whilst trying to automate the release process with
[Travis CI](https://www.travis-ci.com) and the solutions we found.

### `maven-release-plugin` requires full clone of repository

`mvn release:prepare release:perform -B` will update the versions and kick off the Maven `deploy` phase - we already had
the relevant plugins configured to deploy to sonatype with `mvn deploy -Prelease`. Out of the box, Travis performs
a shallow clone of the current branch, it was therefore necessary to switch off the default checkout and issue the
clone and checkout commands manually.

{% gist 4739651e18d0aee7b643555a7f760dc9 %}

The other commands in the install phase are used to capture the version number for releasing to 
[Github](https://github.com/spt-development/spt-development-cid/releases) and decrypting the private key used for
signing the jars uploaded to Sonatype.

### Deploy stage requires values from maven `settings.xml`

Add encrypted environment variables and reference them in a custom settings file referenced with the `--settings` 
mvn parameter.

{% gist 08ac0b5568df5e96510dd5025d3194d3 %}

### Inability to encrypt special characters in environment variables properly

`cd` to a clone of the repository and use the following command, entering `ENV_VAR=value` when prompted:

{% gist 076ce4d2d6597d7f96ee94b49c519fa6 %}

### Prevent checkins by `maven-release-plugin` kicking off another build (and release)

Use the `scmCommentPrefix` setting of `maven-release-plugin` to include `[skip travis]`.

{% gist 58fff269dd021eab81b8897e454b76fa %}

Note also the `goals` configuration setting with the value `deploy`. If a distribution site is provided in the pom, the 
`maven-release-plugin` will run the `site-deploy` phase which will attempt to upload the release to the site specified.
To upload to Github, we need to use the releases provider; specifying `deploy` runs the `deploy` phase instead.

### Create the release in Github

The Travis [Github releases provider](https://docs.travis-ci.com/user/deployment/releases/) makes this straight forward, 
however it is tightly coupled to tagging a particular version of the code. In order to prevent an infinite loop of
releases all of the `maven-release-plugin` checkins include the `[skip travis]` comment, which stops Travis from 
running the build for those checkins - including the 'tag build'. To resolve this, rather than specifying on `tags: true`
we have specified `branch: main` so the releases provider runs when there is a checkin on the main
branch (after the `maven-release-plugin` has run and tagged the build). For this to work, the `TRAVIS_TAG` environment
variable needs to be set.

{% gist ee23fce85e78ec0a3ec1d3c2033c62a9 %}
