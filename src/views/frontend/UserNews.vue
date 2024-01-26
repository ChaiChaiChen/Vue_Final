<!-- eslint-disable max-len -->
<template>
<div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706077463262.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QXfnqNZnXmmFs6cbZe%2B9zxEhBhrLaFiBOvWI6UCSblbdA5aNmKSWPFm4aLSSlfiqOE9sSjRwND6a7QOJiAxA%2FcI3db944J87n5H%2B9wLO3A0hucrwGkjYCfUAW%2FO6cGK7PeNAsrgxvdDXMuW%2Bgox9oVNZMiz0Y%2BFWNn%2BBExrKD9vCrxZOX9v787IyOXgtVixOsnN573CdXko1DiWhyPlSjXHnUvb4T4MKP8upsrOYm4dYbp05Y36c8bQrFeZwnpx9VNvTOPSRCIAsCANjAV3wxWmcprl9vvfrMdzO%2B%2BiCfv0N1ng4mWrTulCvuiJGRYiAYzuu3kIL3ENFv70QaAMvnw%3D%3D" class="img-fluid" alt="...">
        <div class="carousel-caption justify-content-center carousel-home-text">
        <h1 class="bannerText">一手掌握&emsp;<br>&emsp;最新消息</h1>
      </div>
      </div>
    </div>
  </div>
<div class="container mt-5 mb-5">
  <div class="row justify-content-center text-center">
    <div class="col-8">
      <h3>去年業績銷量</h3>
      <LineChart></LineChart>
    </div>
    <!-- <div class="col-3 mt-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704702228996.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DqDO8GjdIXDFACQYa6H%2FOSPWSOlnqQeQ2fv%2FcEUffVlZGk8zms30MkCYg%2FBQhyGKXmW4MHCI3QGCfzc99M9SFy0rRzOntiVMOtDp63rP1utcGWXCXZbTftaLGa5Oj2rCEr9D529QfOfRVp7h5Nt%2F2YU1GxoCARDM8rMuZCmA8I2LAeQDwKWISLaj9EEiy3CNVQcbWPtNWO%2FQVKn8MfZZSm5AIHXn%2Fy3WcAjj6iutBIYKEedidOXhV3WIfk%2BilAZY4%2BiAp2pRdSB6Bc2ZuRGU0jxMQMmQ4noOkYd4qiS%2FXZi8E0gd5l4BBupVx%2F8BzALVKOKacX426au7djho3HF2pA%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
    </div>
    <div class="col-5 mt-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704703524798.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UMfqo9FFsZmvUB5kI0MQM8AMJL%2BTxXedgwRW3lgFC6gb05Q0Jq17XlgvkHIdw3TN8Gm5o0%2BQ%2B9wWJW%2FT83%2Fb%2BicNezBJWcp01uDn8V8EUyWxkWcsJLPihNTl%2FD6RqJh7rm3%2BO4wbPYL2Jc%2BmYaMH59lnMvikZlzDqN1qDKYB990j86EgB%2BCdEL8AGORQ0g4OTVM2G9JrjSIVq1aR1XwC%2BSpSsAJH73i7SX5EC2Yjwvc%2FE0BsT0nsonJ9ii%2F1kUQU0XOyuV2lUnSD6hzNejxL5GzohaUvWghZp77Gbux8hgKzhPg1XBenNU9%2BJ1sur8oX8ufmAoTR4nNyIO8dXOYNBg%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
    </div>
    <div class="col-4 mt-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704703930087.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HmJy6Ni0PphY6WnmcFz04WsUG5tw1Uo6ZHJG2%2BRfcHM6jsmCcTuWtve7rNAzaYcVUkl9ons9Vc42tq6De40MvmoIC8AS2CiOdMAN%2ByejjHyzQ6RebC8V11P6tYFpODOD69j1jHWWLRUpsqPrjPHarjTwKVY6TQYmVKBRscofJQTLVhu5Ehsz2nHlxGA0VAKMYl86pOVouVqcukIDndiPD9340oIIvxYdRcxjKmKVzkCzo1yHr2EzDWfRyrW6eCk1%2FCUBIJM%2FuNFIqFHQgD3lJWdW8hitPhy3feDSukxuzeIyQbUeykWEHXKGeovTyEnia6CZROeFxv5iTN8SnvxC5w%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
    </div>
    <div class="col-3" style="margin-top: -12rem;">
      <div class="col">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704703984361.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NQw7onIF9X3R1MA5xb17CR%2FaezYYGtGZh1fNgtpCO1fGyvI%2Bi%2FS6jCe5%2Fp5eN9Q9sG7v0h2bC1CAWK5h8KJCRLmw82gp75XOBXXy%2BNTP625VK7qnAKIPcqXCMEKEPuFExbtFfrIlUrJEphfdo3v8ENFpUr4n%2F5%2Bpj%2FUBPvqHMf5n1FKBWVUUXWuW%2BANedfnBF3v4fzXDQwroc1qjYL3GKGLqS%2BCUkrr8wX4xjMuCuBvOWISCnVW6aFXhQtNWMjSEparbDu%2BEUIPTn51ynNC%2F42QBNboMHIQmZvb1tS4IDRzEZZB5dq5n4bhwARRo%2BOAe9cbug0GYSAZe28ecRQP5Ew%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
      </div>
      <div class="col mt-4">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704704026779.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g6vwX7QWPXwgyb69DGtpprcP7PblGQuEXHutGH7zDprKTZjRqyiUl3CyC9fP1AiwEzfX7hj3fDKQdJzPJwCume%2B%2BAmxJ6puA63xBGX3DIc20QLUZCSYZZA6WTtpM80tux8aRAv2yYTGk57IpmSznWWQJ0NfOYKXiAONjoakD91xsvG3kf%2BDvwqfo5r%2Bc3BVgno3v3vgUxq2fEPcGMqBzelCzvgpERYywJ4JrRJ%2Be96ynemrNW6CQ44Q%2BCuHREowfQZNf%2FlEa0zgHvj3WotwyV7K5fXi37l6wBS68%2FqKVytfn%2B7X%2BUTPPRxwh82vagEaEPyBXC3ff%2Bil8alrGhWDMvA%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
      </div>
    </div>
    <div class="col-2" style="margin-top: -15.5rem;">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704704298448.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YYL0Q619ew5zj60LljRsx1QOraSAqefd09lmTllo%2BPlvB9aFiPR7p%2B0bKDeaXR%2Fo5UEJXZ4rcELRAeAqmNA32RE2As2VDl4T14KBM60qlsHhzERwfiPQiYWcz299TvMZ5oygg111az63EBb5jKZr3l84WHWQJV4j1ZL5k40ETx47%2FDaY3hJjc7xsmCleozaUMoN1eTU47XOWb4BiZVImQ0owoamr76KpGwGOP89CJJvmIdqBV7OCKDPkvqEvj0gQr8mRoBPU%2BBCIPMrLiR%2BhZlWXNwwIIE%2B6iNHkO50lB5mkYDTbMeeq%2B9Z2%2FKYBisbA0bN%2BZl54bsvQTfqib6lDvg%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
    </div>
    <div class="col-3" style="margin-top: -15.5rem;">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704704240765.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Rs4HNShMcBjpiZLF6dtLJCnVGYjZUuLPBpGgUvOkHWna1FI%2BuZHFo7JM1hvc5WpzSHKKfQvUQycQKzg%2BjBwEW6nFw8dOdLawtweiSs7iLhKFU74BURlNs3kNziOrdzly65cpxcVnZHoK7mPG4KYGmkl2EzCKc7BeNv8Pn3yZdY%2FURLkSsxiS2t0N2gclha2SSlb8fVcPoPTAY8ie2VjWs6MdonLWDdroUfvH0GZtXwkOk5OhwMxkhdY7%2FTyC%2BhKcR%2Fh5V03RFqUUwLIte0NILabxbZUYC%2FRPLYmz1iCwI9q91CoqKFqtwZiB8MHZ3QazomshLh8eqT9EJm381lfloA%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
    </div>
    <div class="col-4 mt-4">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704704370543.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Xfrr5Tc9Mzpk7pKbsFow3CWEtrDfxQ7KKMAkQSyoLybbewB1vFiH7DGxy6eM04PAfeHhDmf%2FocGW0UizPTfYV43CsP5gAjdcPZJadxv6bKjScLZCfKSoxJub2nN66SH1fxRjQ8ev5sXgIbe%2FKjqWF4DeBPjvDHYS0h%2BbzNDTSil6rNA05iFSH4k471R3cYdsl0tvrkz4uZbVgHFXe5LHfiPyWCBaR4iGnjLiQgDpvRUCr0UQC9lOIVPqU0rSgNwsrbs5B%2B3B8rwGsRQSB5XQQAXZOjgn7yPaRo7dwFkC1FAGv9kKKB7vCQDFaWks2byj8dhAkFff9FV3D27%2FZa2HhQ%3D%3D" class="img-fluid img-thumbnail p-0 border-0 rounded-0" alt="">
    </div> -->
  </div>

</div>
</template>

<script>
import LineChart from '../../components/Chart.vue';

export default {

  components: { LineChart },
};
</script>
