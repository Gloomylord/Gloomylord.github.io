const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

(function () {
    let particlesArray;
    let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 100) * (canvas.width / 100)
    };

    // const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
    // const opacity = .4;
    // gradient2.addColorStop('0.2', `rgba(255,0,0,${opacity})`);
    // gradient2.addColorStop('0.4', `rgba(0,0,255,${opacity})`);
    // gradient2.addColorStop('0.6', `rgba(255,255,0,${opacity})`);
    // gradient2.addColorStop('0.8', `rgba(255,192,203,${opacity})`);
    // console.log(gradient2);
    //
    // const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    // gradient.addColorStop('0.2', 'red');
    // gradient.addColorStop('0.4', 'blue');
    // gradient.addColorStop('0.6', 'yellow');
    // gradient.addColorStop('0.8', 'pink');
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', (e) => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    window.addEventListener('resize', (e) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = (canvas.height / 80) * (canvas.width / 80);
        init();
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = 'rgba(255,255,255,.9)';
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY
            }
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 10;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 10;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 10;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 10;
                }
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 5) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 5) - 2.5;
            let directionY = (Math.random() * 5) - 2.5;
            let color = '#8c5523';

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update()
        }
        connect();
    }

    function connect() {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                let elem1 = particlesArray[i];
                let elem2 = particlesArray[j];
                let distance = ((elem1.x - elem2.x) * (elem1.x - elem2.x)
                    + (elem1.y - elem2.y) * (elem1.y - elem2.y));
                let test = (canvas.width / 9) * (canvas.height / 9);
                if (distance < test) {
                    let opacity = (test - distance) / test;
                    ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(elem1.x, elem1.y);
                    ctx.lineTo(elem2.x, elem2.y);
                    ctx.stroke();
                }
            }
        }

    }

    init();
    animate();
})
();