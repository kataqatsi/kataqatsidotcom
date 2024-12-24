<script>
	import Newsletter from '../../components/Newsletter.svelte';
	let title = 'subscribe to kataqatsi newsletter';
	let seoDescription = "Signup for kataqatsi's Newsletter!";
</script>

<svelte:head>
	<title>kataqatsi Newsletter</title>
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
		<Newsletter />
	</div>
	<p>
		<a class="no-underline" href="https://kataqatsi.com/subscribe"
			><span
				class="ml-2 bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text text-xl font-extrabold uppercase text-transparent"
				>Support my work by donating</span
			></a
		>
	</p>
	<p>
		<a href={`https://ko-fi.com/kataqatsi`} class="donate-button" role="button" aria-label="Donate Now">
			Donate Now
		</a>
	</p>
</article>

<style>
        .donate-button {
            display: inline-block;
            padding: 15px 30px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            color: white;
            background-color: #ff3333;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: pulse 2s infinite, colorChange 10s infinite;
            box-shadow: 0 0 20px rgba(255, 51, 51, 0.5);
        }

        .donate-button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(255, 51, 51, 0.8);
        }

        .donate-button:active {
            transform: scale(0.95);
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes colorChange {
            0% { background-color: #ff3333; }
            25% { background-color: #ff6b33; }
            50% { background-color: #ff33a1; }
            75% { background-color: #3369ff; }
            100% { background-color: #ff3333; }
        }

        .donate-button::before {
            content: '❤';
            margin-right: 10px;
            font-size: 28px;
            animation: heartbeat 1s infinite;
        }

        @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
</style>
