---

---
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:html="http://www.w3.org/TR/REC-html40"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="{{ page.lang | default: site.lang | default: "en" }}">
      {%- include head.html -%}
      <body class="bg-light text-dark">

        {%- include header.html -%}

        <section class="container-xl flex-grow-1 mt-3" aria-label="Content">
          <div class="row">
            <div class="col">
              <h2 class="post-list-heading">Sitemap</h2>
              <p>This is an XML sitemap, meant for consumption by search engines.</p>
              <ul class="post-list ps-0 w-100">
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <li class="pb-3">
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
		    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </li>
                </xsl:for-each>
              </ul>
            </div>
          </div>
        </section>

        {%- include footer.html -%}

      </body>

    </html>

  </xsl:template>
</xsl:stylesheet>
