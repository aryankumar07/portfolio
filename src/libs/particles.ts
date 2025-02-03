class Particle {
  constructor(
    public x: number,
    public y: number,
    public ctx: CanvasRenderingContext2D,
    public mouse: { x: number; y: number; radius: number },
    public width: number,
    public height: number,
    public baseX: number = x,
    public baseY: number = y,
    public size: number = 1,
    public density: number = (Math.random() * 30) + 1
  ) {
    this.x = x;
    this.y = y;
    this.baseX = this.x;
    this.baseY = this.y;
    this.size = size;
    this.ctx = ctx
    this.width = width
    this.height = height
  }

  draw() {
    const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "orange");
    this.ctx.fillStyle = gradient;

    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fill()
  }


  update() {

    const dx = this.mouse.x - this.x;
    const dy = this.mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = this.mouse.radius;
    const forceDirectionX = dx / distance
    const forceDirectionY = dy / distance
    const force = (maxDistance - distance) / maxDistance
    const directionX = forceDirectionX * force * this.density
    const directionY = forceDirectionY * force * this.density
    if (distance < maxDistance) {
      this.x -= directionX
      this.y -= directionY
    }
    else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX
        this.x -= dx / 10
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY
        this.y -= dy / 10
      }
    }
  }


}


export default Particle
