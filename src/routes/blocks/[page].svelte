<script lang="ts">
    import ModelCard from "../../lib/ModelCard.svelte";
    export let sabers: any;
    export let page: any;
</script>

<svelte:head>
  <title>Testings</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>



<section>
  <div class="grid-layout">
    {#each Object.entries(sabers) as [id, obj]}

      <ModelCard tags="{obj.tags}" id="{id}" thumbnail="{obj.thumbnail}"
                 author="{obj.author}" url="https://modelsaber.com/Bloqs/?id={obj.id}" type="{obj.type}" title="{obj.name}" download="{obj.download}"/>
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
