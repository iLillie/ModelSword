<script lang="ts">
	import '../app.css';
	import {page} from "$app/stores";
	import Pagination from "../lib/Pagination.svelte";
</script>

<div class="container">
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
		<Pagination currentPage="{$page.params.page}" />
	</footer>
</div>

<style>
	.container {
		display: grid;
		max-width: min(100vw - 2rem, 70rem);
		margin-inline: auto;
		grid-template-rows: 1fr auto 1fr;
		align-items: center;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	header {
		margin-inline: auto;
		font-size: 1.25rem;
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
		font-family: "Inter", serif;
		font-size: 1.5rem;
	}

	.active {
		color: #B67CFF;
		text-decoration: underline;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 3rem 0 3rem 0;
	}
</style>
