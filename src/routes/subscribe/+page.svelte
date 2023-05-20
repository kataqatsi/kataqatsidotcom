<script>
	import Newsletter from '../../components/Newsletter.svelte';
	let title = 'subscribe to kataqatsi newsletter';
	let seoDescription = "Signup for kataqatsi's Newsletter!";
</script>

<svelte:head>
	<title>swyx's Newsletter</title>
	<link rel="alternate" type="application/rss+xml" href="https://kataqatsi.com/rss.xml" />
	<meta property="og:url" content={'https://kataqatsi.com/subscribe'} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="Description" content={seoDescription} />
	<meta property="og:description" content={seoDescription} />
	<meta name="twitter:card" content={'summary'} />
	<meta name="twitter:domain" content="kataqatsi.co," />
	<meta name="twitter:creator" content="@kataqatsi" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={seoDescription} />
	<meta name="twitter:label1" content="Top picks" />
	<meta name="twitter:data1" content={'Weekly'} />
	<meta name="twitter:label2" content="Value" />
	<meta name="twitter:data2" content={'Priceless'} />
</svelte:head>

<article
	class="mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16
    lg:px-8 xl:max-w-3xl prose dark:prose-invert"
>
	<p>
		<a class="no-underline" href="https://kataqatsi.com/subscribe"
			>✉️ <span
				class="ml-2 bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text text-xl font-extrabold uppercase text-transparent"
				>kataqatsi Newsletter</span
			></a
		>
	</p>
	<div class="mytext mb-8">
		<p class="text-base font-light text-opacity-75">
			Join <span
				class="bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text font-extrabold text-transparent"
				>100+</span
			> developers getting mediocre content before I publish!
		</p>
		<Newsletter />
	</div>
	<p>
		<a class="no-underline" href="https://kataqatsi.com/subscribe"
			><span
				class="ml-2 bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text text-xl font-extrabold uppercase text-transparent"
				>Support my work</span
			></a
		>
	</p>
	<p>
		<a
			href={`https://ko-fi.com/kataqatsi`}
			target="_blank"
			rel="noopener noreferrer"
			>
			<img
				src="https://www.ko-fi.com/img/githubbutton_sm.svg"
				alt="Buy Me a Coffee at ko-fi.com"
			/>
		</a>
	</p>
</article>

<style>
</style>