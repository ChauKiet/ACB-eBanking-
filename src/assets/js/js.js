function viewLibrary() {
    $('.fancybox').fancybox({
        thumbs: { "autoStart": true }
    });
}
function fixmenu() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.menu, .fix-menu').addClass('navbar-fixed');
        } else {
            $('.menu, .fix-menu').removeClass('navbar-fixed');
        }
    });
}


function scrolltop() {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn(200);
        } else {
            $('.scroll-top').fadeOut(200);
        }
    });
    $('.scroll-top').on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
}
function libraryGallary() {

    var $container = $('.animate-grid .gallary-thumbs');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.animate-grid .categories a').click(function () {
        $('.animate-grid .categories .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
}
function number() {
    $('.countNumber').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });
}
function imagescanvas() {
    var canvasTemp = function () {
        var _this = this;
        _this.element = null;
        _this.ctx = null;
        _this.x;
        _this.y;
        _this.vx;
        _this.vy;
        _this.radius;
        _this.color;
        _this.dots = {
            nb: 250,
            distance: 120,
            d_radius: 150,
            array: []
        };
        _this.mousePosition = {
            x: 30,
            y: 30
        };
        _this.ini = (option) => {
            if (option.element && document.querySelector(option.element)) {
                _this.element = document.querySelector(option.element);

                _this.ctx = _this.element.getContext("2d");
                _this.element.width = window.innerWidth;
                _this.element.height = window.innerHeight;
                _this.mousePosition = {
                    x: 30 * _this.element.width / 100,
                    y: 30 * _this.element.height / 100
                };
                _this.dots.distance = (option.distance && !isNaN(option.distance)) ? option.distance : 120;
                _this.dots.d_radius = (option.radius && !isNaN(option.radius)) ? option.radius : 150;
                _this.ctx.lineWidth = .3;
                _this.ctx.strokeStyle = _this.Color(150).style;
                _this.createDots();
                _this.event();
                if (window['requestAnimationFrame']) {
                    requestAnimationFrame(_this.animateDots);
                }

            }
        }
        _this.colorValue = (min) => {
            return Math.floor(Math.random() * 255 + min);
        }
        _this.colorRgba = (r, g, b) => {
            return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
        }
        _this.mixComponents = (comp1, weight1, comp2, weight2) => {
            return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
        }
        _this.averageColorStyles = (dot1, dot2) => {
            var color1 = dot1.color,
                color2 = dot2.color;

            var r = _this.mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
                g = _this.mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
                b = _this.mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
            return _this.colorRgba(Math.floor(r), Math.floor(g), Math.floor(b));
        }
        _this.Color = (min) => {
            min = min || 0;
            let n = {};
            n.r = _this.colorValue(min);
            n.g = _this.colorValue(min);
            n.b = _this.colorValue(min);
            n.style = _this.colorRgba(n.r, n.g, n.b);
            return n;
        }

        _this.dot = () => {
            let option = {};
            option.x = Math.random() * _this.element.width;
            option.y = Math.random() * _this.element.height;

            option.vx = -.5 + Math.random();
            option.vy = -.5 + Math.random();

            option.radius = Math.random() * 2;

            option.color = _this.Color();
            option.draw = () => {
                _this.ctx.beginPath();
                _this.ctx.fillStyle = option.color.style;
                _this.ctx.arc(option.x, option.y, option.radius, 0, Math.PI, false);
                _this.ctx.fill();
            }
            return option;
        }
        _this.draw = () => {
            _this.ctx.beginPath();
            _this.ctx.fillStyle = _this.color.style;
            _this.ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI, false);
            _this.ctx.fill();
        }

        _this.createDots = () => {
            for (i = 0; i < _this.dots.nb; i++) {
                let dot = _this.dot();
                //console.log(dot)
                _this.dots.array.push(dot);
            }
        }
        _this.moveDots = () => {
            for (i = 0; i < _this.dots.nb; i++) {

                var dot = _this.dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = - dot.vy;
                }
                else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = - dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        }

        _this.connectDots = () => {
            for (i = 0; i < _this.dots.nb; i++) {
                for (j = 0; j < _this.dots.nb; j++) {
                    i_dot = _this.dots.array[i];
                    j_dot = _this.dots.array[j];

                    if ((i_dot.x - j_dot.x) < _this.dots.distance && (i_dot.y - j_dot.y) < _this.dots.distance && (i_dot.x - j_dot.x) > - _this.dots.distance && (i_dot.y - j_dot.y) > - _this.dots.distance) {
                        if ((i_dot.x - _this.mousePosition.x) < _this.dots.d_radius && (i_dot.y - _this.mousePosition.y) < _this.dots.d_radius && (i_dot.x - _this.mousePosition.x) > - _this.dots.d_radius && (i_dot.y - _this.mousePosition.y) > - _this.dots.d_radius) {
                            _this.ctx.beginPath();
                            _this.ctx.strokeStyle = _this.averageColorStyles(i_dot, j_dot);
                            _this.ctx.moveTo(i_dot.x, i_dot.y);
                            _this.ctx.lineTo(j_dot.x, j_dot.y);
                            _this.ctx.stroke();
                            _this.ctx.closePath();
                        }
                    }
                }
            }
        }

        _this.drawDots = () => {
            for (i = 0; i < _this.dots.nb; i++) {
                var dot = _this.dots.array[i];
                //console.log(dot)
                if (dot.draw && typeof dot.draw === 'function') {
                    dot.draw();
                }

            }
        }
        _this.animateDots = () => {
            _this.ctx.clearRect(0, 0, _this.element.width, _this.element.height);
            _this.moveDots();
            _this.connectDots();
            _this.drawDots();
            if (window['requestAnimationFrame']) {
                requestAnimationFrame(_this.animateDots);
            }
        }
        _this.event = () => {
            _this.element.onmousemove = (e) => {
                _this.mousePosition.x = e.pageX;
                _this.mousePosition.y = e.pageY;
            }
            _this.element.onmouseleave = (e) => {
                _this.mousePosition.x = _this.element.width / 2;
                _this.mousePosition.y = _this.element.height / 2
            }
        }
    }
    let canvas = new canvasTemp();
    canvas.ini({ element: '.cavs' })
}
