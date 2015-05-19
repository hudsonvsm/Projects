namespace BouncingBall.Particles
{

    public interface IParticle
    {
        MatrixCoords Speed { get; set; }

        int Radius { get; set; }

        bool IsSmall { get; set; }

        MatrixCoords Position { get; set; }

        bool Exists { get; }
    }
}
