<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params:{id:10} })"
  >
    <!-- Titulo -->
    <div class="entrytitle d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      Pariatur magna aliquip deserunt voluptate et anim incididunt tempor.
      Ullamco in reprehenderit ea cupidatat ad consectetur mollit ea irure magna
      ut. Officia in mollit proident excepteur dolore qui ad nulla. Id aliquip
      id mollit ad do nostrud ipsum nisi sint eiusmod. Nostrud aliquip veniam in
      incididunt non voluptate consectetur pariatur ullamco in eu ad proident
      id. Qui eiusmod dolore minim velit nostrud id ad sint proident labore
      culpa ut. Culpa id amet sint magna do occaecat officia tempor.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;

    }

    .entry-description {
        font-size: 12px;
    }
}

</style>
