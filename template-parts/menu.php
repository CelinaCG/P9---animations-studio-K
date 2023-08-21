<!-- Menu burger -->

<nav class="main-navigation">
    <ul>
        <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></li>
        
        <div id="mySidenav" class="sidenav">
        
        <a id="closeBtn" href="#" class="close">x</a>
    
        <ul>
            <li><a href="#story">Histoire</a></li>
            <li><a href="#characters">Personnages</a></li>
            <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></li>
            <li><a href="#place">Lieu</a></li>
            <li><a href="#studio">Studio Koukaki</a></li>
        </ul>

        </div>
        
        <a href="#" id="openBtn">
        <span class="burger-icon" >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </span>
        </a>
    </ul>

</nav>

