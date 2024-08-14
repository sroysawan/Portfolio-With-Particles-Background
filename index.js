particlesJS("background", {
    particles: {
        number: {
            value: 15,
            density: {
                enable: true,
                value_area: 300,
            },
        },

        color: {
            value: '#ffffff',
        },
        shape: {
            type: "tringle",
        },
        opacity: {
            value: 0.8,
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false
            },
        },
        line_linked: {
            enable: true,
            speed: 1,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 2,
        },
        move: {
            enable: true,
            speed: 2,
            distance: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false
        },
    },
    interacityvity: {
        detext_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true,
        },
    },
    retina_detect:true
})