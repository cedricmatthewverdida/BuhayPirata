<script>
    export let item = {};
</script>
<div class="card w-96 image-full px-2 py-2">
    <figure class="px-2 py-2">
        <img
        src={item.thumbnail}
        alt={item.title}
        />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{item.title}</h2>
    </div>
</div>