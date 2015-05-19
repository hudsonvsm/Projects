namespace BouncingBall.Particles
{
    public class Ball : IParticle
    {
        public Ball(MatrixCoords speed, int radius, MatrixCoords position, bool isSmall = false)
        {
            this.Speed = speed;
            this.Position = position;
            this.Radius = radius;
            this.IsSmall = isSmall;
        }

        public bool IsSmall { get; set; }

        public MatrixCoords Speed { get; set; }

        public int Radius { get; set; }

        public MatrixCoords Position { get; set; }

        public bool Exists{ get { return true; } }
    }
}
