<template>
  <div>
    <b-card
        title="Wydział MFI UG"
        img-src="https://mat.ug.edu.pl/wp-content/uploads/2013/06/11.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100rem;"
        class="mb-3"
    >
      <b-card-text>
        Najświeższe informacje z twojego wydziału
      </b-card-text>

      <b-button href="#" variant="primary">Sprawdź</b-button>
    </b-card>
    <b-card
        title="Informatyka MFI UG"
        img-src="1200x630-informatyka.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100rem;"
        class="mb-2"
    >
      <b-card-text>
        Co dzieje się na Informatyce [Sprawdź]
      </b-card-text>

      <b-button href="/informatyka" variant="primary">Sprawdź</b-button>
    </b-card>
    <b-card
        title="Uniwersytet Gdański"
        img-src="https://esopot.pl/news_foto/2020/0310/55746.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100rem;"
        class="mb-2"
    >
      <b-card-text>
        Komunikaty Uniwersytetu Gdańskiego
      </b-card-text>

      <b-button href="/ug" variant="primary">Sprawdź</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
    data() {
      return {
        home: "Gdańsk"
      }
    }
};
</script>