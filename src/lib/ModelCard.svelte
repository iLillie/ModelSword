<script>
    import {css} from "./css.js";

    export let id = "1645913663";
    export let thumbnail = "original.png";
    export let type = "saber";
    $: backgroundImage = thumbnail.includes("modelsaber") ? `url("${thumbnail}")` : `url("https://modelsaber.com/files/${type}/${id}/${thumbnail}")`;

    export let author = "A";
    export let title = "A"
    export let download = "https://modelsaber.com/files/saber/1646015238/K%20~%20WEEEEE.saber"
    export let tags = [];
    export let url = "";
    $: tags_lower = tags.map(element => {
        return element.toLowerCase();
    });
    $: isNSFW = tags_lower.includes("nsfw");
</script>


<article class="gradients" use:css={{backgroundImage}}>
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
  <div>
    <header>
      <p style="max-width: 30ch;" class="overflow-text">{author}</p>
      <h3 style="max-width: 20ch;" class="overflow-text">{title}</h3>
    </header>
    <a href="{download}" aria-label="Download">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19H20V12H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z"
              fill="white"/>
      </svg>
    </a>
  </div>
</article>

<style>
    article {
        --border: 2px;
        box-sizing: border-box;
        --backgroundImage:;
        position: relative;
        max-width: 19rem;
        aspect-ratio: 1 / 1;
        width: 19rem;
        background-color: rgba(0, 0, 0, 0.8);
        background-image: var(--backgroundImage);
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, #000000 100%), var(--backgroundImage);
        background-size: cover;
        color: white;
        border-radius: 0.4em;
    }

    .original-link {
        position: absolute;
        top: 0;
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
        transition: 700ms;
        transition-delay: 200ms;
    }

    .nsfw-filter:hover {
        color: transparent;
        background-color: transparent;
        backdrop-filter: blur(0px);
    }

    @supports not (backdrop-filter: blur(12px)) {
        .nsfw-filter {
            background-color: rgba(0, 0, 0, .95);
            color: white;
        }
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


    p {
        color: white;
    }

    div {
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
        font-size: 1.3rem;
    }

    a {
        margin-left: auto;
        padding-left: 1rem;
        padding-top: 1rem;
    }

    header {
        display: flex;
        flex-direction: column;
    }
</style>