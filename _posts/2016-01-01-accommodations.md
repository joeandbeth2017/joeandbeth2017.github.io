---
layout: default
title: Accommodations
---

{% capture query %}accommodations {{ site.place.name }} {{ site.place.city }}{% include gmap.html type="search" query=query %}
