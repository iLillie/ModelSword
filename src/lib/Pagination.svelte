<script lang="ts">
    export let currentPage: any;
    $: currentPage = Number(currentPage);

    let isNotFirstPage = currentPage > 1;
    $: newPagesCount = isNotFirstPage ? 4 : 5;
</script>

<ul>

  {#if isNotFirstPage}
    <li class="btns">
      <a aria-label="Previous page" href="{currentPage-1}">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.828 6.99999L7.778 11.95L6.364 13.364L0 6.99999L6.364 0.635986L7.778 2.04999L2.828 6.99999Z"
                fill="black"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="{currentPage-1}">{currentPage - 1}</a>
    </li>
  {/if}
  {#each Array(newPagesCount) as _, i}
    <li class:active={currentPage == currentPage+i}>
      <a href="{currentPage+i}">{currentPage + i}</a>
    </li>
  {/each}
  <li class="btns">
    <a aria-label="Next page" href="{currentPage+1}">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.172 6.99999L0.222 2.04999L1.636 0.635986L8 6.99999L1.636 13.364L0.222 11.95L5.172 6.99999Z"
              fill="black"/>
      </svg>
    </a>
  </li>
</ul>

<style>
    ul {
        font-family: "Inter";
        --border: 1px;
        display: flex;
        gap: 1rem;
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
        transition: 300ms ease;
    }

    li a {
        display: grid;
        width: 3rem;
        height: 3rem;
        place-items: center;
        text-decoration: inherit;
    }

    .btns {
        background-color: white;
    }

    li:hover {
        background-color: white;
        text-decoration: none;
        color: black;
        transform: scale(105%);
    }

    .active {
        color: black;
        background-color: white;
    }

    .active:hover {
        background-color: white;
    }
</style>