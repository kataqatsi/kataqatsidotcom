# swyxkit!

swyx's preferred starter for Svelte projects:

- SvelteKit
- Tailwind 3 + Tailwind Typography
- Netlify
- GitHub Issues for Blogging

## Key Features and Design Considerations:

- Features
  - Dark mode
  - Github-issues-driven Blog with blog index
    - Blog content pulled from the GitHub Issues API - make to set your `GH_USER_REPO` variable!
    - paginates through api
    - Comment system also from Github Issues
    - Consumes markdown/MDSveX
      - with syntax highlighting
  - RSS (at `/api/rss.xml`) with caching
- Performance touches
  - no `hydrate` on about and blog pages
    - update: temporarily disabled while we figure out mobile nav without hydration
  - set `maxage` to 1 minute to cache (consider making it 1-7 days on older posts)
- Minor design/UX touches
  - Top level blog URLs (`/myblog` instead of `/blog/myblog` - sliiightly better SEO/url design)
  - Error page (try going to URL that doesnt exist)
    - including nice error when github api rate limit exceeded
  - Navlink hover effect
  - Mobile menu with animation
  - Edit on GitHub link
  - Accessible SVG Icons https://github.com/sw-yx/spark-joy/blob/master/README.md#general--misc
  - Custom scrollbar https://css-tricks.com/strut-your-stuff-with-a-custom-scrollbar/

## Live Demo

See https://swyxkit.netlify.app/

![image](https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png)

![image](https://user-images.githubusercontent.com/6764957/147861337-d40a1798-e7ff-40e1-8dd8-ba1350fd3784.png)

## Setup

```bash
export GH_TOKEN=your_gh_token_here # can skip if just trying out this repo casually
npm install
npm run start
```

You should be able to deploy this project straight to Netlify as is, just [like this project is](https://app.netlify.com/sites/swyxkit/deploys/).

Before deploying, remember to configure `/lib/siteConfig.js` - just some hardcoded vars i want you to remember to configure.

This blog uses GitHub as a CMS - if you are doing any serious development at all, you should give `process.env.GH_TOKEN` to raise rate limit from 60 to 5000. Just make a really basic personal access token, should be enough.
https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting

When deploying, don't forget to set it in Netlify: https://app.netlify.com/sites/YOUR_SITE/settings/deploys#environment

## Further Reading

You can read:

- [Why I Enjoy Svelte](https://www.swyx.io/svelte-why/), [Svelte for Sites, React for Apps](https://www.swyx.io/svelte-sites-react-apps/)
- [Why Tailwind CSS](https://www.swyx.io/why-tailwind/)
- [How to Setup Svelte with Tailwind](https://dev.to/swyx/how-to-set-up-svelte-with-tailwind-css-4fg5)

## Acknowledgements

- Design from Lee Robinson: https://github.com/leerob/leerob.io/
- MDSvex from Pngwn is amazing https://mdsvex.pngwn.io/docs#layout
- Other people's code I borrowed from
  - https://github.com/mvasigh/sveltekit-mdsvex-blog
  - https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/routes/%5Blist%5D/rss.js
  - RSS
    - https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
    - https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
    - Reasons it is hard to do dynamic RSS in Sveltekit:
      - Sveltekit Endpoints dont take over from Sveltekit dynamic param routes (`[slug].svelte` has precedence over `rss.xml.js`)
      - RSS Endpoint runs locally but doesnt run in Netlify bc no access to the content in prod
      - approach i went for is to use Vite's `import.meta.globEager` feature and that makes it static for the RSS... 
- Find more sveltekit projects at https://github.com/janosh/awesome-svelte-kit

## Todos

- implement etag header for github api
- store results in netlify build cache
- separate hydration path for mobile nav
- custom components in MDX, and rehype plugins