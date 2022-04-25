<script lang="ts">
    import ModelCard from "../../lib/ModelCard.svelte";
    import {page} from "$app/stores";
    export let sabers: any;
    export let pageNum: any;

    let toProperType = (input: any) => {
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
    let type = toProperType($page.params.category);
</script>

<svelte:head>
  <title>{type}</title>
</svelte:head>

<section>
  <div class="grid-layout">
    {#each Object.entries(sabers) as [id, obj]}
      <ModelCard tags="{obj.tags}" id="{id}" thumbnail="{obj.thumbnail}"
                 author="{obj.author}" url="https://modelsaber.com/{type}/?id={obj.id}" type="{obj.type}" title="{obj.name}" download="{obj.download}"/>
    {/each}
  </div>
</section>

<style>
    .grid-layout {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
        width: 100%;
        gap: 2rem;
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
        width: 100%;
    }
</style>
