const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

(function () {
    let particleArray = [];


    const mouse = {
        x: null,
        y: null,
        radius: 100
    };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x + canvas.clientLeft / 2;
        mouse.y = e.y + canvas.clientTop / 2;
        mouse.radius = 100;
    });

    function drawImage() {
        const imageWidth = png.width;
        const imageHeight = png.height;
        const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        class Particle {
            constructor(x, y, color, size) {
                this.x = x + canvas.width / 2 - png.width * 2;
                this.y = y + canvas.height / 2 - png.height * 2;
                this.color = color;
                this.size = 2;
                this.baseX = x + canvas.width / 2 - png.width * 2;
                this.baseY = y + canvas.height / 2 - png.height * 2;
                this.density = Math.random() * 10 + 2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                ctx.fillStyle = this.color;

                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;

                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;

                if (force < 0) force = 0;
                let directionX = forceDirectionX * force * this.density * .6;
                let directionY = forceDirectionY * force * this.density * .6;

                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 20;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 20;
                    }
                }
                this.draw();
            }
        }

        function init() {
            particleArray = [];
            for (let y = 0; y < data.height; y++) {
                for (let x = 0; x < data.width; x++) {
                    if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                        let positionX = x * 4;
                        let positionY = y * 4;
                        let color = `rgb(${data.data[(y * 4 * data.width) + (x * 4)]},
                        ${data.data[(y * 4 * data.width) + (x * 4) + 1]},
                        ${data.data[(y * 4 * data.width) + (x * 4) + 2]})`;
                        particleArray.push(new Particle(positionX, positionY, color))
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.fillStyle = 'rgba(0,0,0,.05)';
            ctx.fillRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].update();
            }

        }

        init();
        animate();

        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        })
    }

    const png = new Image();
    png.src = 'data:image/png;base64,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';
    window.addEventListener('load', (e)=>{
        console.log('Page has loaded');
        ctx.drawImage(png, 0,0);
        drawImage();
    })
})();

