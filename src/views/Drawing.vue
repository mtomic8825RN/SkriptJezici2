
<template>
  <div class="container py-4">
    <h1>New Drawing</h1>
    <p>Create your own pixel art.</p>

    <div class="row mt-4">
      <div class="col-md-3">
        <h3>Tools</h3>

        <button class="btn btn-primary">
          Pencil
        </button>

        <div class="mt-3">
          <label for="color" class="form-label">Choose color:</label>
          <input id="color" type="color" class="form-control form-control-color" value="#000000">
        </div>
      </div>

      <div class="col-md-9">
        <h3>Canvas</h3>

        <div class="border rounded bg-white p-3" style="height: 400px;">
          Canvas will be here.
        </div>
      </div>
    </div>
  </div>
</template>
