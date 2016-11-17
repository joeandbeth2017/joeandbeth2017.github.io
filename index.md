---
layout: default
title: The Big Day
---

<div>
{{ site.date | date: "%B %-d %Y" }}
</div><div>
{{ site.place.name }}, {{ site.place.city }}, {{ site.place.state }}
</div>

{% include gmap.html type="place" query="St+Christopher+Vandalia" %}
