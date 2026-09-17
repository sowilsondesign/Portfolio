STACIA WILSON PORTFOLIO — FREE STATIC SITE

FILES
- index.html = page structure/content
- styles.css = all design/layout
- script.js = project category filters + mobile menu
- assets/ = put your images here
- resume.pdf = put your resume here

HOW TO ADD REAL PROJECT IMAGES
1. Put an image in assets/, e.g. assets/nascar-01.jpg
2. In index.html, replace a placeholder div such as:
   <div class="f-main">YOUR PROJECT PHOTO</div>
   with:
   <div class="f-main"><img src="assets/nascar-01.jpg" alt="NASCAR track signage"></div>
3. Add this CSS if desired:
   .f-main img,.gallery-img img,.visual img{width:100%;height:100%;object-fit:cover}

FREE HOSTING
GitHub Pages is ideal for this static site. Create a public repository, upload these files, then Settings > Pages > Deploy from a branch > main > /(root).
Your free URL will be username.github.io. A custom domain can be connected later.

You can also import the repository into Netlify.
