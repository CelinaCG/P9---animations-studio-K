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
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: -90,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    });
</script>