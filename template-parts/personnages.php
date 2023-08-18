<div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/Kawaneko.png' ?>" />
        </div>
        <div class="swiper-slide">
            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/Orenjiiro.png' ?>" />
        </div>
        <div class="swiper-slide">
            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/Pinku.png' ?>" />
        </div>
        <div class="swiper-slide">
            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/Tenshi.png'?>" />
        </div>
        <div class="swiper-slide">
            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/Jaakuna.png' ?>" />
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>

<!-- Initialize Swiper -->
<script>
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
</script>