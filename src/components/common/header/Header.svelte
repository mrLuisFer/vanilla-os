<script lang="ts">
</script>

<header class="header">
  <div class="header_tiled-window">
    <p>Tiled, Float</p>
  </div>
  <div class="header_applist">
    <ul class="header_applist-ul">
      <li>
        <i class="fas fa-code"></i>
      </li>
      <li>
        <i class="fab fa-firefox-browser"></i>
      </li>
      <li>
        <i class="fas fa-folder-open"></i>
      </li>
      <li>
        <i class="fas fa-code"></i>
      </li>
      <li>
        <i class="fas fa-book"></i>
      </li>
      <li>
        <i class="fas fa-comments"></i>
      </li>
      <li>
        <i class="fab fa-youtube"></i>
      </li>
      <li>
        <i class="fas fa-cog"></i>
      </li>
    </ul>
  </div>
</header>

<style lang="scss">
  .header {
    display: flex;
    background: var(--polar-night-0);
    padding: 0.5rem 1.5rem;
    align-items: center;

    &_tiled-window {
      background: var(--aurora-yellow);
      padding: 0.5rem 0.6rem;
      font-family: "Roboto Mono", sans-serif;

      p {
        margin: 0;
        font-size: 0.8rem;
      }
    }

    &_applist {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 1rem;

      &-ul {
        list-style: none;
        padding: 0;
      }
    }
  }
</style>
