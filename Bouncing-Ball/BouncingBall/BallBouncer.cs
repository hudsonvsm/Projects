namespace BouncingBall
{
    using System;
    using System.Windows.Forms;

    using BouncingBall.Particles;

    public partial class BallBouncer : Form
    {
        private readonly MatrixCoords board;
        private readonly Engine engine;
        private readonly Random rand;

        const int Radius = 20;

        public BallBouncer()
        {
            this.InitializeComponent();

            this.board = new MatrixCoords(this.ClientSize.Width, this.ClientSize.Height);
            this.rand = new Random();
            this.engine = new Engine(this.board, this);
        }

        private void DropBall_Click(object sender, EventArgs e)
        {
            this.clock.Stop();

            var x = this.rand.Next(Radius * 2, this.board.Row - (Radius * 2));
            var y = this.rand.Next(Radius * 2, this.board.Col - (Radius * 2));
            var ballStart = new MatrixCoords(x, y);
            var speed = new MatrixCoords(this.rand.Next(1, 10), this.rand.Next(1, 10));

            var ball = new Ball(speed, Radius, ballStart);
            this.engine.AddParticle(ball);
            this.InitialBalls.Text = @"Initail Balls: " + this.engine.InitialCount;
            this.clock.Start();
        }

        private void clock_Tick(object sender, EventArgs e)
        {
            this.clock.Stop();

            this.engine.TickUpdater();

            this.SmallBalls.Text = @"Rebound Balls: " + this.engine.SmallballCount;
            this.clock.Start();
        }
    }
}
