{% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{post.content | first_image}}</a>
    </li>
  {% endfor %}
