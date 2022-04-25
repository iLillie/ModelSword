<script lang="ts">
	import '../app.css';
	import {page} from "$app/stores";
	import Pagination from "../lib/Pagination.svelte";
</script>

<div class="wrapper">
	<header>
		<nav>
			<ul>
				<li><a class:active={$page.url.pathname.toLowerCase().includes("sabers")} href="/sabers">Sabers</a></li>
				<li><a class:active={$page.url.pathname.toLowerCase().includes("bloqs")} href="/bloqs">Bloqs</a></li>
				<li><a class:active={$page.url.pathname.toLowerCase().includes('platforms')} href="/platforms">Platforms</a></li>
				<li><a class:active={$page.url.pathname.toLowerCase().includes('avatars')} href="/avatars">Avatars</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<Pagination num="{$page.params.page}" />
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 3rem 0 3rem 0;
	}

	ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		align-items: center;
	}

	ul a {
		color: White;
		font-weight: 500;
		font-family: "Inter";
		font-size: 1.5rem;
	}

	footer a {
		font-weight: bold;
	}

	.active {
		color: #B67CFF;
		text-decoration: underline;
	}

	header {
		margin-inline: auto;
		font-size: 1.25rem;
	}

	.wrapper {
		display: grid;
		max-width: min(100vw - 2rem, 70rem);
		margin-inline: auto;
		grid-template-rows: 1fr auto 1fr;
		align-items: center;
		min-height: 100vh;
	}
</style>
