var actualLang = "";
var lang = {
    'es': {
        'topbar': {
            'donate': 'Donar'
        },
        'navbar-donate': {
            'header': 'Dar a ÜGI',
            'once': 'Una vez',
            'monthly': 'Mensual',
            'weekly': 'Semanal',
            'anually': 'Anual',
            'donate': 'Dar'
        },
        'languages': {
            'global': 'Global',
            'english': 'Inglés',
            'spanish': 'Español',
            'flag': 'img/spain-flag.png'
        },
        'header-links': {
            'whoarewe': '¿Quienes Somos?',
            'strategy': 'Nuestra Estrategia',
            'benefits': 'Beneficios',
            'take': 'Toma Acción'
        },
        'home': {
            'img1': 'img/home1-es.png',
            'img2': 'img/home2-es.png',
            'img3': 'img/home3-es.png',
        },
        'whoarewe': {
            'title': '¿Quienes Somos?',
            'text1': 'Üaiki Global Initiative es organizacion de beneficio social fundada en la ciudad de Boston, por emprendedores con raises provenientes de distintas partes del globo.',
            'text2': 'Nuestra misión es conectar a las comunidades con mayores índices de marginación a los beneficios que nos brinda la era de la tecnología y la información.'
        },
        'newsletter': {
            'title': 'MANTENTE INFORMADO. SUBSCRIBETE A NUESTRO BOLETÍN',
            'button': 'Subscribete'
        },
        'strategy': {
            'title': 'Nuestra Estrategia',
            'software': 'Software',
            'hardware': 'Hardware',
            'clc': 'CLC'
        },
        'habitat': {
            'text': 'A traves del programa Habitat 8 apuntamos a adaptar nuestro sistema para asi poder ser efectivos sin importar el tipo de comunidad marginal. Hemos identificado que el pais con mas zonas de vida y mas tipos de climas existentes en el planeta es el Peru.  Se han generado distintas categorias que logran representar la totalidad de escenarios donde existe la marginacion a lo largo del mundo en tan solo 8 zonas fragiles. Todas estas estan presentes en el Peru por lo que lo convierten en la plataforma de prueba ideal para el programa Habitat 8.',
            'exp': 'img/36-es.png'
        },
        'ugni': {
            'text': 'Una vez concluido con exito el programa Habitat 8 se habra probado que el sistema UGI funciona correctamente en todo tipo de zona fragil. Buscamos expandirnos a nivel global pudiendo elevar la calidad de vida de comunidades que representan los niveles mas altos de marginacion a lo largo del mundo.',
            'slogan': '"Nuestro sistema aprovecha al maximo la tecnologia para asi poder ser implementado a gran escala a lo largo del mundo"',
        },
        'benefits': {
            'title': 'Beneficios',
            'card1': 'Bienestar',
            'card2': 'Empoderamiento',
            'card3': 'Desarrollo',
            'card4': 'Habilidades para el día a día'
        },
        'take': {
            'title': 'AYÚDANOS A CAMBIAR EL MUNDO',
            'button': 'Toma Acción'
        },
        'partnerships': {
            'title': 'Alianzas'
        },
        'volunteer': {
            'title': 'VOLUNTARIADO / PASANTÍAS Y TRABAJO',
            'text-before': 'OFRECEMOS OPORTUNIDADES A LAS PERSONAS PARA CREAR IMPACTO REAL, [',
            'link': 'CLIC AQUÍ',
            'text-after': '] PARA CONTACTARNOS.'
        },
        'footer': {
            'volunteer': 'Voluntariado',
            'contact': 'Contáctanos',
            'take': 'Tomar Acción',
            'donate': 'Donar',

            'copyright': '&copy; 2016 Üaiki Global Initiative. Todos los derechos reservados'
        },
        'modal': {
            'volunteer': {
                'title': 'Voluntariado / Pasantías y Trabajos',
                'name': 'Nombre',
                'email': 'Correo Electrónico',
                'message': 'Mensaje*',
                'send': 'Enviar',
                'subject': 'Asunto',
                'aditional-text': '*Ponte en contacto con nuestro equipo para comenzar el proceso de reclutamiento.'
            },
            'license': {
                'title': 'Licencia',
                'name': 'Nombre',
                'email': 'Correo Electrónico',
                'message': 'Mensaje',
                'send': 'Enviar',
                'subject': 'Asunto',
            },
            'confirmation': {
                'title': 'Recepción de Propuesta',
                'subtitle': '!Gracias por tomar la iniciativa!',
                'text': 'UGI evaluara tu propuesta y se pondra en contacto contigo.'
            },
            'title': 'Voluntariado / Pasantías y Trabajos',
            'title-2': 'Licencia',
            'name': 'Nombre',
            'email': 'Correo Electrónico',
            'message': 'Mensaje',
            'more': 'Más Información',
            'file': 'Subir Archivo',
            'send': 'Enviar',
            'subject': 'Asunto'
        },
        'take-page': {
            'open-source': {
                'title': 'UGI',
                'subtitle': 'Open Source Community',
                'text': '¿Quieres acceder a nuestro contenido original, código de programación, planos y manuales de construcción?',
                'button': 'Aplica Ahora'
            },
            'title': 'Toma Acción',
            'propose-project': 'Proponer un Proyecto',
            'map-description': 'img/status-es.png',
            'name': 'Nombre Completo',
            'email': 'Correo Electrónico',
            'name-com': 'Nombre de la Comunidad',
            'fragil': 'Tipo de zona frágil',
            'population': 'Población',
            'level-marg': 'Nivel de marginación (5 es el mayor):',
            'district': 'Distrito',
            'province': 'Provincia',
            'state': 'Departamento',
            'country': 'País',
            'point-map': 'Indique en el mapa el lugar aproximado:',
            'propose-submit': 'Enviar Propuesta',
            'license': {
                'title': 'Licencia de Uso de Software',
                'description': '“¿Crees que nuestro software podria ser clave en tu empoderamiento o en el de tu comunidad?”',
                'button': 'Solicita Licencia'
            }
        },
        'contact-page': {
            'title': 'Contáctanos'
        },
        'emailjs': {
            'sending': 'Enviando...',
            'sended': 'Listo',
            'failed': 'Intentelo nuevamente'
        }
    }
};

$(document).ready(function () {
    $('.carousel').carousel({
        pause: "false"
    });


    var changeLanguage = function (language) {
        actualLang = language;
        $('[data-lang]').each(function (id, item) {
            var $this = $(item);
            var str = $this.data('lang');
            var arr = str.split('.');

            var obj = lang[language];
            for (var i = 0; i < arr.length; i++)
                obj = obj[arr[i]];

            $this.html(obj);
        });
        $('[data-lang-img]').each(function (id, item) {
            $this = $(item);
            str = $this.data('lang-img');
            arr = str.split('.');

            var obj = lang[language];
            for (var i = 0; i < arr.length; i++)
                obj = obj[arr[i]];
            if ($this.is('img'))
                $this.attr('src', obj);
            else
                $this.css('background-image', 'url(' + obj + ')');
        });
        $('html').attr('lang', language);
    }

    $(".language-form select").change(function () {
        var language = $(this).find('option:selected').val();
        createCookie('language', language, 1000);
        changeLanguage(language);
    });


    var createCookie = function (name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    var readCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    var cookieLang = readCookie("language");
    if (!cookieLang) {
        $('.language-form select > option[value="es"]').attr('selected');
        changeLanguage('es');
        createCookie("language", "es", 1000);
    } else {
        $('.language-form select > option[value="' + cookieLang + '"]').attr('selected');
        changeLanguage(cookieLang);
    }
});

$(window).on('load', function () {

    $('#load').addClass('out');
    setTimeout(function () {
        $('#load').remove();
    }, 1000);
});
