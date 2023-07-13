# checkValidator

Periodically check the W3C feed validator to see if it validates a specific feed. 

### Validating the validator

There was a long discussion on the W3C repo about which version of RSS 2.0 it should use to validate feeds. This is a trick question, because there is only one version of RSS 2.0. The format is frozen and the <i>only</i> spec is the one I wrote <a href="https://cyber.harvard.edu/rss/rss.html">hosted at harvard.edu</a> since 2003. But somehow the W3C has come to believe that there is some other spec. This really scares me, because the people who are now choosing to be be the authority on what isa  valid feed doesn't understand perhaps the most basic thing about RSS 2.0, the <a href="https://cyber.harvard.edu/rss/rss.html#roadmap">roadmap</a>:

> RSS is by no means a perfect format, but it is very popular and widely supported. Having a settled spec is something RSS has needed for a long time. The purpose of this work is to help it become a unchanging thing, to foster growth in the market that is developing around it, and to clear the path for innovation in new syndication formats. Therefore, the RSS spec is, for all practical purposes, frozen at version 2.0.1. We anticipate possible 2.0.2 or 2.0.3 versions, etc. only for the purpose of clarifying the specification, not for adding new features to the format. Subsequent work should happen in modules, using namespaces, and in completely new syndication formats, with new names.

### Add an API?

Last week I posted a feature request that they add a simple API that would allow us to write an app that kept track of whether they were breaking our feeds in their validator. THere hasn't been a response to that request, so I hacked together this simple Node app that submits the feed, and scrapes the return HTML to make a good guess whether or not it's calling the feed valid. 

Please add the API. Let's do this right, and collaborate, and make the validator better. 

### Running this code

You are welcome to run this code to keep an eye on a feed you care about. Or adapt it to check a set of feeds. 

It checks my feed at startup and then once an hour. You can change it to check yours. Or convert it to check a set of feeds you care about.

