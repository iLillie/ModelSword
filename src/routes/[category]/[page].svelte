<script context="module">
    export const hydrate = false;
</script>

<script lang="ts">
    import ModelCard from "../../lib/ModelCard.svelte";
    import {page} from "$app/stores";
    export let models: any;
    let category: string = $page.params.category;
    let categoryType = category.charAt(0).toUpperCase() + category.slice(1);
    let toCategoryType = (input: string) => {
        return input.charAt(0).toUpperCase() + input.slice(1) + "s";
    }
</script>

<svelte:head>
  <title>ModelSword - {categoryType}</title>
</svelte:head>

<section>
  <div class="grid-layout">
    {#each Object.entries(models).reverse() as [id, obj]}
        <ModelCard tags="{obj.tags}"
                   id="{id}" thumbnail="{obj.thumbnail}"
                   author="{obj.author}"
                   url="https://modelsaber.com/{toCategoryType(obj.type)}/?id={obj.id}" type="{obj.type}"
                   title="{obj.name}"
                   download="{obj.download}"
                  discord_id="{obj.discordid}"/>
    {/each}
  </div>
</section>

<style>
    .grid-layout {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        width: 100%;
        gap: 1rem;
        justify-items: center;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    h1 {
        color: white;
    }
</style>
