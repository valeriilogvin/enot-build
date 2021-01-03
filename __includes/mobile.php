<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no">

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="mobile-css/main.css">

</head>
<body >

<div class="wrapper js_wrapper ">

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
			font-family: 'Source Sans Pro', sans-serif;
			font-weight: 600;
			font-size: 16px;
			line-height: 20px;
			text-transform: uppercase;
			color: #F4F4F4;
		}
		.wrapper.light .preloader .title {
			color: #5D6066;
		}
		.preloader .title span {
			font-size: 30px;
			line-height: 38px;
			padding-right: 15px;
		}
		.preloader .title p + p{
			padding-top: 25px;
		}
	</style>

	<div id="page-preloader" class="preloader">
		<div class="logo"></div>
		<div class="title">
			<p>Вы можете отправить еще</p>
			<p><span>5</span>записок</p>
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

	</script>
	<!-- /preloader -->

	<!-- burger-menu -->
	<div class="burger-menu-left js_burger_left">
		<div class="burger-left js_burger_left_close">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul>
			<li><a href="#">О компании</a></li>
			<li><a href="#">Пункт меню 2</a></li>
			<li><a href="#">Пункт меню 3</a></li>
			<li><a href="#">Пункт меню 4</a></li>
		</ul>

		<svg class="logo-img" viewBox="0 0 100 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M97.596 11.942H93.6026H90.9446L89.1514 11.9547L85.1453 7.94859V3.96794L81.1774 0H85.1453H89.1514V7.94859H90.8047H93.6026V7.96131L97.596 11.942ZM70.2269 5.97741L79.3328 12.5779L78.9767 3.09048L70.2269 5.97741ZM69.4005 5.97738L66.4627 7.94863L65.3309 14.7145L64.1863 7.94863L61.2485 5.97738H69.4005ZM65.7759 17.6015L70.2271 11.5351L80.7701 19.2548L76.3189 25.3212L67.9252 28.8312H67.9125H62.7237L54.3045 25.3212L49.8533 19.2548L60.4345 11.5097L64.8857 17.576L56.8862 23.4389L62.7237 25.8807V23.6297H67.9125V25.868L73.7372 23.4389L65.7759 17.6015ZM70.6087 14.7146L68.523 16.8003H72.6944L70.6087 14.7146ZM62.1387 16.8003L60.0529 14.7146L57.98 16.8003H62.1387ZM51.3286 12.5779L60.4345 5.97741L51.6719 3.09048L51.3286 12.5779ZM36.4998 28.8312L32.6463 24.9777V17.932H32.6336L28.6275 13.9132L28.6529 18.0465V28.8184H30.8531L36.4998 28.8312ZM45.5929 24.9649L49.4464 28.8311L43.7997 28.8184H41.5996V11.6113L40.0353 10.0597H34.236H29.9883H29.7466L28.5893 10.047L24.5832 6.05365H30.2426V6.06637H41.7013V6.10452H41.7267L45.5929 9.958V24.9649ZM23.8712 9.89436L20.005 6.02817H14.3583L14.3965 6.06632H5.6594L5.64668 6.04089H0L4.03152 10.0851L9.69092 10.0597H18.3899L19.8651 11.535V15.363H13.3282V19.3564H19.8651V19.3691H23.8585V9.89436H23.8712ZM9.47494 24.8377H23.8587V28.8311H13.4556L13.5065 28.8819L7.8725 28.8947L4.33697 25.3464V25.3083V18.7332L4.29882 13.9767L8.31762 17.9955H8.33034V23.6804L9.47494 24.8377ZM100 28.8184L96.0066 24.8251H90.7415L89.5333 23.6042V17.8558H89.5206L85.5018 13.8369L85.5399 18.5934V20.7681L85.5272 25.2702L89.0755 28.8184H89.0882H96.0066V28.8057L100 28.8184Z"/>
		</svg>
	</div>
	<div class="burger-menu-right js_burger_right">
		<ul>
			<li><a href="#">Настройки</a></li>
			<li><a href="#">Enot FAQ </a></li>
			<li><a href="#">Купить лицензию</a></li>
			<li><a href="#">Пункт меню 4</a></li>
		</ul>
		<div class="theme-switcher js_theme_switcher">
			<svg class="light" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0002 5.27723C14.1904 5.27723 13.5341 4.6209 13.5341 3.81178V1.46612C13.5341 0.656333 14.1904 0 15.0002 0C15.81 0 16.4663 0.656333 16.4663 1.46612V3.81178C16.4663 4.6209 15.8093 5.27723 15.0002 5.27723ZM14.9997 7.48608C10.8564 7.48608 7.48572 10.8574 7.48572 15.0007C7.48572 19.144 10.8564 22.5153 14.9997 22.5153C19.1423 22.5153 22.5136 19.1446 22.5136 15.0007C22.5136 10.8568 19.1423 7.48608 14.9997 7.48608ZM13.5341 26.1883C13.5341 25.3785 14.1904 24.7222 15.0002 24.7222C15.8093 24.7222 16.4663 25.3785 16.4663 26.1883V28.5333C16.4663 29.3437 15.81 30.0001 15.0002 30.0001C14.1904 30.0001 13.5341 29.3437 13.5341 28.5333V26.1883ZM21.8743 8.12509C21.3023 7.55246 21.3023 6.62442 21.8743 6.05179L23.5331 4.39302C24.105 3.82106 25.0337 3.82106 25.6063 4.39302C26.179 4.96566 26.179 5.89435 25.6063 6.46632L23.9476 8.12509C23.3756 8.69772 22.4476 8.69772 21.8743 8.12509ZM6.05186 21.8757C6.62449 21.3024 7.55252 21.3024 8.12515 21.8757C8.69778 22.447 8.69778 23.3756 8.12515 23.9476L6.46638 25.607C5.89442 26.179 4.96572 26.179 4.39309 25.607C3.82046 25.0351 3.82112 24.1057 4.39309 23.5338L6.05186 21.8757ZM24.7222 15C24.7222 14.1902 25.3785 13.5339 26.1883 13.5339H28.5339C29.3437 13.5339 30.0001 14.1902 30.0001 15C30.0001 15.8098 29.3437 16.4655 28.5339 16.4655H26.1883C25.3785 16.4655 24.7222 15.8098 24.7222 15ZM3.81111 13.5339C4.6209 13.5339 5.27723 14.1902 5.27723 15C5.27723 15.8098 4.6209 16.4655 3.81178 16.4655H1.46612C0.656333 16.4655 0 15.8098 0 15C0 14.1902 0.656333 13.5339 1.46612 13.5339H3.81111ZM21.8741 21.8756C22.4467 21.3036 23.3754 21.3036 23.9473 21.8756L25.6061 23.5343C26.1787 24.1056 26.1787 25.035 25.6061 25.607C25.0335 26.1789 24.1054 26.1789 23.5328 25.607L21.8741 23.9482C21.3014 23.3756 21.3014 22.4475 21.8741 21.8756ZM8.12504 6.05181C8.69767 6.62444 8.69767 7.55247 8.12504 8.1251C7.55241 8.6984 6.62437 8.6984 6.05174 8.1251L4.39297 6.46634C3.82034 5.89437 3.82034 4.96567 4.39297 4.39371C4.9656 3.82108 5.89364 3.82108 6.46627 4.39371L8.12504 6.05181Z"/>
			</svg>
			<span class="slider">
                    <span class="slider-button js_slider_button"></span>
                </span>
			<svg class="dark" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6634 8.58035C12.4357 8.73218 12.1326 8.7022 11.939 8.50864C11.7457 8.31508 11.7158 8.01227 11.8673 7.78453L14.1663 4.33878L11.8673 0.89274C11.7152 0.665283 11.7449 0.361633 11.9385 0.16807C12.132 -0.0254932 12.4354 -0.055466 12.6631 0.0969192L16.1092 2.39558L19.5555 0.0969192C19.7829 -0.0549058 20.086 -0.0249329 20.2793 0.16863C20.4729 0.361913 20.5028 0.665002 20.351 0.89246L18.0386 4.35894L20.0549 7.81394C20.1916 8.0484 20.1454 8.34673 19.944 8.52853C19.7426 8.71061 19.4412 8.72657 19.2219 8.56691L16.0952 6.29121L12.6634 8.58035ZM0.5 16.7781C0.5 24.0687 6.66628 30 14.246 30C19.2767 30 23.8469 27.3775 26.2559 23.213C24.8119 23.6502 23.311 23.8707 21.8023 23.8668C13.5914 23.8668 6.91026 17.4209 6.91026 9.49747C6.90606 8.04225 7.13324 6.59571 7.58339 5.21191C3.23845 7.52486 0.5 11.9303 0.5 16.7781Z" />
			</svg>

		</div>
	</div>
	<div class="burger-overlay js_burger_overlay"></div>
	<!-- /burger-menu -->

	<div class="header">
		<div class="burger-left js_burger_left_open">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<svg class="logo-img" viewBox="0 0 100 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M97.596 11.942H93.6026H90.9446L89.1514 11.9547L85.1453 7.94859V3.96794L81.1774 0H85.1453H89.1514V7.94859H90.8047H93.6026V7.96131L97.596 11.942ZM70.2269 5.97741L79.3328 12.5779L78.9767 3.09048L70.2269 5.97741ZM69.4005 5.97738L66.4627 7.94863L65.3309 14.7145L64.1863 7.94863L61.2485 5.97738H69.4005ZM65.7759 17.6015L70.2271 11.5351L80.7701 19.2548L76.3189 25.3212L67.9252 28.8312H67.9125H62.7237L54.3045 25.3212L49.8533 19.2548L60.4345 11.5097L64.8857 17.576L56.8862 23.4389L62.7237 25.8807V23.6297H67.9125V25.868L73.7372 23.4389L65.7759 17.6015ZM70.6087 14.7146L68.523 16.8003H72.6944L70.6087 14.7146ZM62.1387 16.8003L60.0529 14.7146L57.98 16.8003H62.1387ZM51.3286 12.5779L60.4345 5.97741L51.6719 3.09048L51.3286 12.5779ZM36.4998 28.8312L32.6463 24.9777V17.932H32.6336L28.6275 13.9132L28.6529 18.0465V28.8184H30.8531L36.4998 28.8312ZM45.5929 24.9649L49.4464 28.8311L43.7997 28.8184H41.5996V11.6113L40.0353 10.0597H34.236H29.9883H29.7466L28.5893 10.047L24.5832 6.05365H30.2426V6.06637H41.7013V6.10452H41.7267L45.5929 9.958V24.9649ZM23.8712 9.89436L20.005 6.02817H14.3583L14.3965 6.06632H5.6594L5.64668 6.04089H0L4.03152 10.0851L9.69092 10.0597H18.3899L19.8651 11.535V15.363H13.3282V19.3564H19.8651V19.3691H23.8585V9.89436H23.8712ZM9.47494 24.8377H23.8587V28.8311H13.4556L13.5065 28.8819L7.8725 28.8947L4.33697 25.3464V25.3083V18.7332L4.29882 13.9767L8.31762 17.9955H8.33034V23.6804L9.47494 24.8377ZM100 28.8184L96.0066 24.8251H90.7415L89.5333 23.6042V17.8558H89.5206L85.5018 13.8369L85.5399 18.5934V20.7681L85.5272 25.2702L89.0755 28.8184H89.0882H96.0066V28.8057L100 28.8184Z" />
		</svg>
		<div class="burger-right js_burger_right_open">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<a href="#" style="display: none" class="public">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18.393 0C15.8286 0 13.7426 2.08587 13.7426 4.65019C13.7426 5.13661 13.8183 5.60569 13.9576 6.04681L8.92045 8.90758C8.06864 7.95282 6.82906 7.34997 5.45101 7.34997C2.88631 7.34997 0.799988 9.43581 0.799988 12.0003C0.799988 14.5646 2.88632 16.6505 5.45101 16.6505C6.82907 16.6505 8.06856 16.0476 8.92035 15.0929L13.9576 17.953C13.8183 18.3941 13.7425 18.8633 13.7425 19.3498C13.7425 21.9141 15.8285 24 18.3929 24C20.9571 24 23.0428 21.914 23.0428 19.3498C23.0429 16.7851 20.9572 14.6987 18.393 14.6987C17.0147 14.6987 15.775 15.3018 14.9231 16.2567L9.88577 13.3968C10.025 12.9558 10.1008 12.4868 10.1008 12.0004C10.1008 11.514 10.025 11.045 9.88577 10.6041L14.9226 7.74341C15.7745 8.69868 17.0143 9.30194 18.3928 9.30194C20.957 9.30194 23.0427 7.21537 23.0427 4.65031C23.0429 2.08589 20.9571 0 18.393 0ZM15.6945 4.65019C15.6945 3.1625 16.9052 1.95187 18.393 1.95187C19.8805 1.95187 21.091 3.16247 21.091 4.65019C21.091 6.13884 19.8804 7.34997 18.393 7.34997C16.9053 7.34997 15.6945 6.1388 15.6945 4.65019ZM2.75196 12.0004C2.75196 10.5126 3.96294 9.30194 5.45111 9.30194C6.93858 9.30194 8.14902 10.5125 8.14902 12.0004C8.14902 13.488 6.93848 14.6987 5.45111 14.6987C3.96294 14.6987 2.75196 13.4879 2.75196 12.0004ZM15.6945 19.3499C15.6945 17.8616 16.9053 16.6506 18.393 16.6506C19.8804 16.6506 21.091 17.8616 21.091 19.3499C21.091 20.8375 19.8805 22.0482 18.393 22.0482C16.9052 22.0482 15.6945 20.8375 15.6945 19.3499Z" fill="#F4F4F4"/>
			</svg>
			ОПУБЛИКОВАТЬ ЗАПИСКУ
		</a>
	</div>

	<div class="amount-block">
		Вы можете отправить еще <span>5</span> записок
	</div>

	<div class="content-wrap scroll-hide">
		<div class="content">

		</div>
	</div>

	<div class="input-block">
		<a href="">
			<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.4358 7.22734C13.8176 6.84555 13.8176 6.22662 13.4358 5.84467C13.0541 5.46289 12.435 5.46289 12.0532 5.84467L4.14086 13.757C2.9417 14.9563 2.9417 16.9077 4.14103 18.1068C4.7406 18.7064 5.52827 19.0062 6.31577 19.0062C7.10343 19.0062 7.8911 18.7064 8.49068 18.1068L12.2717 14.326L12.2718 14.3258L18.6358 7.9617C20.4547 6.14277 20.4547 3.18307 18.6358 1.36414C16.8169 -0.454797 13.8572 -0.454627 12.0382 1.36414L3.30175 10.1006C3.28596 10.1162 3.27187 10.133 3.25745 10.1495L1.82505 11.5819C0.648128 12.7588 0 14.3292 0 16.0035C0 17.6778 0.648128 19.2481 1.82505 20.425C3.00196 21.6019 4.5722 22.2501 6.24651 22.2501C7.92081 22.2501 9.49122 21.6019 10.6681 20.425L17.8716 13.2216C18.2533 12.8398 18.2533 12.2207 17.8716 11.8389C17.4898 11.457 16.8707 11.457 16.4889 11.8389L9.28531 19.0423C8.47778 19.85 7.39864 20.2946 6.24651 20.2946C5.09437 20.2946 4.01524 19.85 3.20771 19.0423C2.40001 18.2348 1.95525 17.1555 1.95525 16.0035C1.95525 14.8514 2.40001 13.7723 3.20771 12.9646L10.4111 5.76115C10.4269 5.74537 10.4412 5.72856 10.4556 5.71192L13.4207 2.7468C14.4773 1.69024 16.1966 1.69024 17.253 2.74663C18.3095 3.80319 18.3095 5.52248 17.253 6.57904L15.0207 8.81133C15.0205 8.8115 15.0203 8.81167 15.0202 8.81184L7.10802 16.7242C6.67124 17.1609 5.96047 17.1609 5.52369 16.7242C5.08673 16.2874 5.08673 15.5766 5.52369 15.1397L13.4358 7.22734Z" />
			</svg>
		</a>
		<textarea placeholder="Напишите сообщение" class="js_input_text" name=""></textarea>
		<a href="">
			<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.1203 18.1139C7.0285 24.2365 -1.13813e-08 22.8698 -1.13813e-08 22.8698C9.20734 17.3954 7.26278 9.42975 7.26278 9.42975L1.8196 9.42975L10.8942 0.339549L20 9.42975L14.549 9.42975C14.7286 15.404 12.1203 18.1139 12.1203 18.1139Z"/>
			</svg>
		</a>
	</div>

</div>

<script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="mobile-js/main.js"></script>
</body>
</html>