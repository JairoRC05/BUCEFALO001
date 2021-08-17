//Navbar
$(window).scroll(function () {
    $("#navbar").toggleClass('scrolled', $(this).scrollTop() > 50);
    $("#text_dark").removeClass('text-dark');
});



//AOS




$('document').ready(function () {
    $('#form').on('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(this);
        formData.append('service_id', 'gsoftware');
        formData.append('template_id', 'contact');
        formData.append('user_id', 'user_HtJj99X5RdXnEqxLAburM');


        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).done(function () {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Correo enviado exitosamente!',
                text: "Pronto nos pondremos en contacto contigo",
                showConfirmButton: false,
                timer: 3500
            })

            $('#form').trigger("reset");

        }).fail(function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Algo salio mal!',
                showConfirmButton: false,
                timer: 3500,
                footer: '<p>Verifica que cuentes con conexión a internet <i class="fas fa-wifi"></i></p>'
            })
        });
    });

});

//maps
$(document).ready(function () {
    $("#myCarousel").on("slide.bs.carousel", function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $("#myCarousel .carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i <
                it; i++) {
                // añade cards al final 
                if (e.direction == "left") {
                    $("#myCarousel .carousel-item")
                        .eq(i).appendTo("#myCarousel .carousel-inner");
                } else {
                    $("#myCarousel .carousel-item ")
                        .eq(0).appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});



function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 19.418705626863662,
            lng: -99.16706459973423

        },
        zoom: 12,
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
        ]
    });
}