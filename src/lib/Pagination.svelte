<script lang="ts">
  export let num: any;
  $: page = Number(num);
  $: new_pages = page <= 1 ? 5 : 4;
</script>

<ul>

  {#if page > 1}
    <li class="btns">
      <a href="{page-1}"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.828 6.99999L7.778 11.95L6.364 13.364L0 6.99999L6.364 0.635986L7.778 2.04999L2.828 6.99999Z" fill="white"/>
      </svg></a>
    </li>
    <li>
      <a href="{page-1}">{page-1}</a>
    </li>
  {/if}
  {#each Array(new_pages) as _, i}
    <li class:active={page == page+i}>
      <a href="{page+i}">{page+i}</a>
    </li>
  {/each}
  <li class="btns">
    <a href="{page+1}"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.172 6.99999L0.222 2.04999L1.636 0.635986L8 6.99999L1.636 13.364L0.222 11.95L5.172 6.99999Z" fill="white"/>
    </svg></a>
  </li>
</ul>

<style>
    ul {
        font-family: "Inter";
        --border: 1px;
        display: flex;
        gap: 2rem;
        list-style: none;
        background-color: rgba(0, 0, 0, 0.75);
        padding: 1rem 1rem;
        border-radius: 0.5em;
        position: relative;
        color: white;
    }

    ul:before {
        content: '';
        position: absolute;
        inset: 0 0 0 0;
        z-index: -1;
        margin: calc(var(--border) * -1);
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(124, 192, 255, 0.8) 0%, rgba(182, 124, 255, 0.8) 111.33%);
    }

    ul a {
        color: inherit;
        font-weight: 500;
        font-family: "Inter";
        font-size: 1.5rem;
    }

    li {
        border-radius: 0.2rem;
    }

    li a {
        display: grid;
        width: 3rem;
        height: 3rem;
        place-items: center;
        text-decoration: inherit;
    }

    .btns {
        background-color: black;
    }

    li:hover {
        background-color: #313131;
        text-decoration: none;
        color: #B67CFF;
    }

    .active {
        color: #B67CFF;
        background-color: black;
    }

    .active:hover {
        background-color: black;
    }
</style>