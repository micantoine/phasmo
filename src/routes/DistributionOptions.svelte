<script lang="ts">
  import { distribution } from "$lib/stores";
</script>

<ul>
  <li>
    <div>
      <input id="allowDependencies" type="checkbox" bind:checked={$distribution.allowDependencies} />
      <label for="allowDependencies">
        Allow Dependencies
      </label>
    </div>
    <small>
      Items required for an equipment to work will be added<br/>
      (eg: Tripod => Camera, Candle => Ligther)
    </small>
  </li>
  <li>
    <div>
      <input id="allowSiblings" type="checkbox" bind:checked={$distribution.allowSiblings} />
      <label for="allowSiblings">Allow Siblings</label>
    </div>
    <small>
      Items from the same family can be selected<br/>
      (eg: UV Flashligh – Glowstick, Flashlight – Strong Flashlight)
    </small>
  </li>
</ul>

<style>
  ul {
    margin-top: 0;
    padding-left: 0;
    list-style: none;
  }
  li {
    margin-bottom: 10px;
    text-align: center;
  }
  small {
    opacity: .65;
  }
</style>