---
layout: default
title: Accommodations
---

{% capture query %}accommodations {{ site.place.city }} {{ site.place.state }}{% include gmap.html type="search" query=query %}
