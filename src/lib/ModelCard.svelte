<script>
    export let id = "";
    export let thumbnail = "";
    export let type = "saber";
    $: backgroundImage = thumbnail.includes("modelsaber") ? thumbnail.toLowerCase() : `https://modelsaber.com/files/${type}/${id}/${thumbnail}`.toLowerCase();
    export let discord_id = "";
    export let author = "";
    export let title = ""
    export let download = ""
    export let tags = [];
    export let url = "";
    $: tags_lower = tags.map(element => {
        return element.toLowerCase();
    });
    // Todo Implement better way of toggling NSFW.
    $: isNSFW = tags_lower.includes("nsfw");
</script>
<div class="animate-wrapper">
  <article>
    {#if isNSFW }
      <div class="nsfw-filter">
        NSFW WARNING <br>(Hover to see)
      </div>
    {/if}
    <a class="original-link" href="{url}" target="_blank" aria-label="Details">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3021 6.62646V8.62646H5.30206V19.6265H16.3021V14.6265H18.3021V20.6265C18.3021 20.8917 18.1967 21.146 18.0092 21.3336C17.8216 21.5211 17.5673 21.6265 17.3021 21.6265H4.30206C4.03685 21.6265 3.78249 21.5211 3.59496 21.3336C3.40742 21.146 3.30206 20.8917 3.30206 20.6265V7.62646C3.30206 7.36125 3.40742 7.10689 3.59496 6.91936C3.78249 6.73182 4.03685 6.62646 4.30206 6.62646H10.3021ZM21.3021 3.62646V12.6265L17.5081 8.83346L11.5091 14.8335L10.0951 13.4195L16.0941 7.41947L12.3021 3.62646H21.3021Z" fill="white"/>
      </svg>
    </a>
    <div class="overlay">
      <header>
        <a href="https://modelsaber.com/Profile/?user={discord_id}" style="max-width: 20ch;" class="overflow-text">{author}</a>
        <h3 style="max-width: 20ch;" class="overflow-text">{title}</h3>
      </header>
      <a href="{download}" aria-label="Download">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19H20V12H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z"
                fill="white"/>
        </svg>
      </a>
    </div>
    <img class="background" src="{backgroundImage}" alt="">
  </article>
</div>


<style>
    article {
        --border: 2px;
        box-sizing: border-box;
        --backgroundImage:;
        position: relative;
        max-width: 15.5rem;
        aspect-ratio: 1 / 1;
        width: 15.5rem;
        /*background-color: rgba(0, 0, 0, 0.8);*/
        /*background-image: var(--backgroundImage);*/
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 35%,  rgba(0, 0, 0, 0) 65%, #000000 100%);
        background-size: cover;
        color: white;
        border-radius: 0.4em;
        transition: 400ms ease-in-out;
    }

    p {
        color: white;
    }

    .background {
        position: absolute;
        inset: 0 0 0 0;
        width: 100%;
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 0.4em;
    }

    .overlay {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        bottom: 0;
        width: 100%;
        padding: 0.8rem;
        align-items: end;
    }

    h3, p {
        margin: 0;
    }

    h3 {
        font-size: 1rem;
    }

    .overlay > a {
        margin-left: auto;
    }

    a {
        color: #4fa6ff;
    }

    svg, path {
        transition: 300ms ease;
    }

    svg:hover {
        transform: scale(110%);
    }

    svg:hover path {
        fill: rgba(169, 229, 255, 0.8);

    }


    header {
        display: flex;
        flex-direction: column;
    }

    .animate-wrapper {
        position: relative;
        transition: 500ms ease;
        margin-bottom: 2rem;
    }

    .animate-wrapper:hover {
        transform:  scale(110%);
    }

    .animate-wrapper:focus-within {
        transform:  scale(110%);
    }

    article:before {
        content: '';
        position: absolute;
        inset: 0 0 0 0;
        z-index: -1;
        margin: calc(var(--border) * -1);
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(124, 192, 255, 0.8) 0%, rgba(182, 124, 255, 0.8) 111.33%);
    }

    .original-link {
        position: absolute;
        top: 1rem;
        right: 0.75rem;
    }

    .overflow-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .nsfw-filter {
        display: grid;
        place-items: center;
        position: absolute;
        inset: 0 0 0 0;
        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(15px);
        color: black;
        font-family: "Inter";
        font-size: 1.2rem;
        text-align: center;
        transition: 1200ms ease-in;
    }

    .nsfw-filter:hover {
        color: transparent;
        background-color: transparent;
        backdrop-filter: blur(0px);
    }

    @supports not (backdrop-filter: blur(12px)) {
        .nsfw-filter {
            background-color: rgba(0, 0, 0, 1);
            color: white;
        }
    }


</style>