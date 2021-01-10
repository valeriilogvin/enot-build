<!-- preloader -->
<style type="text/css">
	.preloader {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: linear-gradient(0deg, #1F2226 0%, #35383E 100%);
		z-index: 99999;
		transition: .5s all;
		opacity: 1;
		visibility: visible;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		font-size: 16px!important;
		line-height: 20px!important;
		font-family: SourceSansPro,sans-serif;
		font-weight: 600;
	}

	.wrapper.light .preloader{
		background: linear-gradient(166.51deg, #FCFCFC 8.64%, #F2F2F2 81%);
	}

	.preloader.done{
		opacity: 0;
		visibility: hidden;
	}
	.preloader .logo{
		margin-top: 140px;
		position: relative;
	}
	.preloader .logo-svg {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		fill: #D1D1D1;
	}
	.wrapper.light .preloader .logo-svg{
		fill: #5D6066;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
	}

	.preloader .title {
		margin-bottom: 140px;
		text-align: center;


		text-transform: uppercase;
		color: #F4F4F4;
	}
	.wrapper.light .preloader .title {
		color: #5D6066;
	}
	.preloader .title p {
		margin: 0;
	}
	.preloader .title span {
		font-size: 30px;
		line-height: 38px;
		padding-right: 15px;
	}
	.preloader .title p + p{
		padding-top: 25px;
	}
	.preloader svg path,
	.preloader svg polygon,
	.preloader svg rect {
		-webkit-transition: none!important;
		-o-transition: none!important;
		transition: none!important;
	}

    /*.preloader .title, .preloader .logo{*/
        /*visibility: hidden;*/
    /*}*/
</style>

<script>
    // возвращает cookie если есть или undefined
    function getCookie(name)
    {

        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    let app_wrapper = document.querySelector('.js_wrapper');
    let color = getCookie("scheme");
    if( color === 'light') app_wrapper.classList.add('light');
    else app_wrapper.classList.remove('light');
</script>

<div id="page-preloader" class="preloader">
	<div class="logo"></div>
	<div class="title">
		<p>Вы можете отправить еще</p>
		<p><span class="js_note_amount"></span>записок</p>
	</div>
</div>

<script type="text/javascript">

    let i = 0,
        circleWidth = 200,
        strokeWidth = 10,
        strokeBgWidth = '8',
        strokeColor = '#5D6066',
        logoLoadingSpeed = 30,
        radius = circleWidth/2,
        pathRadius = circleWidth/2 - strokeWidth/2;

    let svgns = 'http://www.w3.org/2000/svg',

        circleMainBlock = document.querySelector('.logo'),
        mainCircleSvg = document.createElementNS(svgns, 'svg'),
        mainLogoSvg = document.createElementNS(svgns, 'svg'),
        mainCircle = document.createElementNS(svgns, 'circle'),
        mainPath = document.createElementNS(svgns, 'path'),
        mainLogo = document.createElementNS(svgns, 'path');

    mainCircleSvg.setAttribute('class', 'circle_svg');
    mainCircleSvg.setAttribute('width', circleWidth);
    mainCircleSvg.setAttribute('height', circleWidth);


    mainCircle.setAttribute('width', circleWidth);
    mainCircle.setAttribute('height', circleWidth);
    mainCircle.setAttribute('fill', 'none');
    mainCircle.setAttribute('opacity', '.08');
    mainCircle.setAttribute('stroke', strokeColor);
    mainCircle.setAttribute('stroke-width', strokeBgWidth);
    mainCircle.setAttribute('r', pathRadius);
    mainCircle.setAttribute('cx', radius);
    mainCircle.setAttribute('cy', radius);

    mainPath.setAttribute('class', `logo__path`);
    mainPath.setAttribute('fill', 'none');
    mainPath.setAttribute('filter', 'url(#filter0_i)');
    mainPath.setAttribute('stroke-linecap', 'round');
    mainPath.setAttribute('stroke', strokeColor);
    mainPath.setAttribute('stroke-width', strokeWidth);
    mainPath.setAttribute('d', describeArc(radius, radius, pathRadius, 0));

    mainLogoSvg.setAttribute('width', '85');
    mainLogoSvg.setAttribute('height', '70');
    mainLogoSvg.setAttribute('class', 'logo-svg');

    mainLogo.setAttribute('d', 'M4.01196 26.0504L28.7748 8.10079L4.94576 0.25L4.01196 26.0504ZM55.4052 8.10079L80.168 26.0504L79.1997 0.25L55.4052 8.10079ZM45.1681 13.4615L53.1572 8.10078H30.9883L38.9774 13.4615L42.09 31.8607L45.1681 13.4615ZM55.4051 23.2144L43.3004 39.7115L64.9506 55.586L49.1107 62.1917V56.1047H35V62.2263L19.1255 55.586L40.8794 39.6423L28.7747 23.1453L0 44.2075L12.1047 60.7045L35 70.25H49.1107H49.1453L71.9714 60.7045L84.0761 44.2075L55.4051 23.2144ZM50.7707 37.5326L56.4427 31.8607L62.1146 37.5326H50.7707ZM27.7372 31.8607L33.4091 37.5326H22.0998L27.7372 31.8607Z');
    mainLogo.setAttribute('fill-rule', 'evenodd');
    mainLogo.setAttribute('cx', radius);
    mainLogo.setAttribute('cy', radius);

    mainLogoSvg.appendChild(mainLogo);

    mainCircleSvg.appendChild(mainCircle);
    mainCircleSvg.appendChild(mainPath);

    circleMainBlock.innerHTML = '';
    circleMainBlock.appendChild(mainCircleSvg);
    circleMainBlock.appendChild(mainLogoSvg);
    document.querySelector('.circle_svg').insertAdjacentHTML('beforeend', `
                <defs>
                    <filter id="filter0_i" x="0" y="-1" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-4"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                    </filter>
                </defs>
            `);

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    function describeArc(x, y, radius, value){

        let endAngle = calculatePercent(value);

        var endAngleOriginal = endAngle;
        if(endAngleOriginal - 0 === 360){
            endAngle = 359;
        }

        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, 0);

        var arcSweep = endAngle - 0 <= 180 ? '0' : '1';

        if(endAngleOriginal - 0 === 360){
            var d = [
                'M', start.x, start.y,
                'A', radius, radius, 0, arcSweep, 0, end.x, end.y, 'z'
            ].join(' ');
        }
        else{
            var d = [
                'M', start.x, start.y,
                'A', radius, radius, 0, arcSweep, 0, end.x, end.y
            ].join(' ');
        }

        return d;
    }

    function calculatePercent(value) {
        if (value > 100) return 360;
        else return 360 * value / 100;
    }
/*
    document.body.onload = function() {
        setTimeout(function(){
            var preloader = document.getElementById('page-preloader');
            if(!preloader.classList.contains('done'))
            {
                preloader.classList.add('done');
            }
        }, 3000);
    };


    setInterval(()=>{
        i++;
        if(i < 101){
            document.querySelector('.logo__path').setAttribute('d', describeArc(100, 100, 95, i));
        }
    }, logoLoadingSpeed);

*/



function prefetch_set(urls)
{
    var prefetch_file_current = 0;
    var preloader_endvalue = 0;
    var urls_len = urls.length;
    var part_size = Math.floor(100 / urls_len);

    const cacheName = 'enot-cache'

    for (let i=0; i<urls_len; i++)
    {
        fetch(urls[i], {cache:"force-cache"})
        .then(res => {
            return caches.open(cacheName)
                .then(cache => {
                    return cache.put(urls[i], res)
                })
        })
        .then(()=>{

            if (/css$/i.test(urls[i])) 
            {
                // apply stylesheet
                let link = document.createElement( "link" );
                link.href = urls[i];
                link.type = "text/css";
                link.rel = "stylesheet";
                link.media = "screen,print";

                document.head.appendChild( link );
            }

            if (/\.woff/i.test(urls[i])) 
            {
                // apply stylesheet
                let link = document.createElement( "link" );
                link.href = urls[i];
                link.as = "font";
                link.rel = "preload";

                document.head.appendChild( link );
            }

            if (/\.js$/i.test(urls[i]))
            {
                let script = document.createElement('script');
                script.src = urls[i];
                document.head.appendChild(script); 
            }

            preloader_endvalue = preloader_endvalue + Math.ceil(100 / urls_len);
            prefetch_file_current++;
        });        
    }

    var i = 0;
    var preloader_interval = setInterval(()=>{

        //console.log(i);

        if(i < preloader_endvalue){
            i++;
            document.querySelector('.logo__path').setAttribute('d', describeArc(100, 100, 95, i));
        }

        if (i>98) {

            clearInterval(preloader_interval);
            let preloader = document.getElementById('page-preloader');
            if(!preloader.classList.contains('done'))
            {
                preloader.classList.add('done');
            }

            if (window.main) main();
            return;

        }


    }, logoLoadingSpeed);


}

(()=>{
    // document.querySelector(".preloader .title").style.visibility = "visible";
    // document.querySelector(".preloader .logo").style.visibility = "visible";

//*
    prefetch_set([
        "mobile-css/main.css", 
        "fonts/SourceSansPro-SemiBold.woff", 
        "fonts/SourceSansPro-Bold.woff", 
        "fonts/SourceSansPro-Regular.woff", 
        "fonts/SourceSansPro-Italic.woff"
    ]);
//*/

})();

</script>
<!-- /preloader -->

