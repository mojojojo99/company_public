---
layout: page
title: Reviews 
description: See all reviews we've collected from our customers!
order: 5
name2: reviews 

image: reviews.jpg
image2: reviews2.jpg
---
<section>
<h2>Reviews</h2>

Read here what customers/clients have said about us! <br/> <br/>

Please feel free to <b><a href="#divReviewForm" style="color: #660000" >leave your own review</a> </b> below too or connect with us through <a href="https://api.whatsapp.com/send/?phone=6591125678">whatsapp</a>, <a href="tel:+6591125678">phone</a> or email. <br />
<hr />

{% assign comments = site.data.comments | where_exp: "item", "true" %} 
{% assign sorted_comments = comments | sort: 'date' | reverse %}

<div class="boo_inner clearfix">
{% for comment in sorted_comments %}
{% capture number %}{{ forloop.length }}{% endcapture %}
{% assign i = forloop.index0 | plus:1 %}
<div class="slide_content">
	<div class="testimonial_2" style="background-color: #c5d5e6; margin: 2em 0">
		<div class="content_2" style="overflow-wrap:break-word">
	            <div class="row uniform">
                <div class="6u 12u(small)" style="padding: 0 0 0 1.5em">
			            <h3 style="text-align:left; padding-top:1em">{{comment.name}}</h3>
                </div>
                <div class="6u 12u(small)" style="padding: 0 0 0 1.5em">
                {% if comment.rating == "5" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★★★★</h3>
                {% elsif comment.rating == "4" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★★★</h3>
                {% elsif comment.rating == "3" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★★</h3>
                {% elsif comment.rating == "2" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★</h3>
                {% else %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★</h3>
                {% endif %}
                </div>
              </div>
            <hr style="margin: 1.5em 0"/>
            <div style="text-align:left">
            {{comment.message | strip_html | markdownify }} 
            <br />
            <br />
            <p>
              <time
                class="post-meta dt-published"
                datetime="{{ page.date | date_to_xmlschema }}"
                itemprop="datePublished"
              >
                {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                {{ comment.date | date:"%H:%M - %b %-d, %Y" }}
              </time>
            </p>
            <div>
            </div>
            </div>
	    </div>
</div>
</div>
{% endfor %}

</div>
<div>
</div>

</section>

<section>
<hr/>

<h2>Leave your own Review</h2>

<div id="divReviewForm">
{% include comment-form.html %}
</div>

<hr/>
</section>
