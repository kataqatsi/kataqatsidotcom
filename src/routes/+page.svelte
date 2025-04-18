<script>
	import Newsletter from '../components/Newsletter.svelte';
	import FeatureCard from '../components/FeatureCard.svelte';
	import LatestPosts from '../components/LatestPosts.svelte';
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';
	import WhackMoji from '../components/WhackMoji.svelte';
	import WhackMojiLight from '../components/WhackMojiLight.svelte';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;

	let isDarkMode = false;
	onMount(() => {
		// Initial check
		isDarkMode = document.documentElement.classList.contains('dark');

		// Create a mutation observer to watch for class changes on documentElement
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'class') {
					isDarkMode = document.documentElement.classList.contains('dark');
				}
			});
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div
	class="mx-auto flex w-screen max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700"
>
	<div class="flex flex-col-reverse items-start sm:flex-row">
		<div class="mb-16 flex flex-col pr-8">
			<h1 class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
				David
				<span
					class="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"
				>
					<span class="relative skew-y-3 text-yellow-400">{SITE_TITLE}</span>
				</span>
				Anderson
			</h1>
			<h2 id="bio" class="mb-4 italic text-gray-700 dark:text-gray-200">
				Values-First, Inventor, Programmer
			</h2>
			<h2 class="mb-4 text-gray-700 dark:text-gray-200">
				former: cto <a href="https://hello.involio.com/">involio</a>
				<br />
				<br />Everyone has the next big idea for a startup.
				<br />Not everyone can actually code it.
				<br />Also it's hard to trust people nowadays.
				<br />I'm the dependable guy you can trust to build your startup from scratch.
			</h2>
			<h2 class="mb-4 text-gray-700 dark:text-gray-200">
				If you need software help you can contact me <a href="https://cal.com/kataqatsi">here</a>
			</h2>
		</div>
		<img
			class="relative mb-8 mr-auto w-[80px] rounded-full bg-cyan-300 bg-opacity-25 sm:mb-0 sm:w-[176px]"
			src="/pp3.webp"
			alt="kataqatsi in forest"
		/>
	</div>

	<div class="flex w-full justify-center">
		<Newsletter />
	</div>

	<div class="flex w-full justify-center gap-4">
		{#if isDarkMode}
			<WhackMoji />
		{:else}
			<WhackMojiLight />
		{/if}
	</div>

	<!-- <section class="w-full mb-16">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Featured Posts
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
			<FeatureCard title="Welcome to swyxkit 2022!" href="/welcome" stringData="Jan 2022" />
			<FeatureCard
				title="Moving to a GitHub CMS"
				href="/moving-to-a-github-cms"
				stringData="Jan 2022"
			/>
			<FeatureCard title="HTML Ipsum demo" href="/moo" stringData="Jan 2022" />
		</div>
	</section> -->

	<LatestPosts {items} />
</div>
