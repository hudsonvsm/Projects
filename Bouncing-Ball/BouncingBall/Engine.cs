namespace BouncingBall
{
    using System;
    using System.Collections.Generic;
    using System.Drawing;

    using BouncingBall.Particles;

    public class Engine
    {
        private readonly MatrixCoords board;
        private readonly BallBouncer bouncer;
        private readonly Random random;
        private readonly List<IParticle> balls;

        public Engine(MatrixCoords board, BallBouncer bouncer)
        {
            this.board = board;
            this.bouncer = bouncer;
            this.balls = new List<IParticle>() ;
            this.random = new Random();
            this.SmallballCount = 0;
            this.InitialCount = 0;
        }

        public int SmallballCount { get; private set; }

        public int InitialCount { get; private set; }

        public void AddParticle(IParticle p)
        {
            this.balls.Add(p);
            this.InitialCount++;
        }

        private void BackGroundCleaner()
        {
            var graphic = this.bouncer.CreateGraphics();
            var brush = new SolidBrush(this.bouncer.BackColor);

            using (graphic)
            {
                graphic.FillRectangle(brush, 0, 0, this.bouncer.Width, this.bouncer.Height); // erase all balls
            }

            brush.Dispose();
            graphic.Dispose();
        }

        private List<IParticle> UpdateBallPosition(IParticle ball)
        {

            var result = new List<IParticle>();
            ball.Position = ball.Position + ball.Speed; //move ball

            //check for wall hits
            if ((ball.Position.Row + ball.Radius >= this.board.Row) || (ball.Position.Row - ball.Radius <= 0))
            {
                if (ball.IsSmall)
                {
                    ball.Speed.Row = -ball.Speed.Row;
                }
                else
                {
                    result.Add(
                        new Ball(
                            new MatrixCoords(this.random.Next(1, 10),
                            this.random.Next(1, 10)),
                            ball.Radius / 2,
                            new MatrixCoords(ball.Position.Row, ball.Position.Col - 10),
                            true));
                    result.Add(
                        new Ball(
                            new MatrixCoords(this.random.Next(1, 10),
                            this.random.Next(1, 10)),
                            ball.Radius / 2,
                            new MatrixCoords(ball.Position.Row, ball.Position.Col + 10),
                            true));
                    return result;
                }
            }
            if ((ball.Position.Col + ball.Radius >= this.board.Col) || (ball.Position.Col - ball.Radius <= 0))
            {
                if (ball.IsSmall)
                {
                    ball.Speed.Col = -ball.Speed.Col;
                }
                else 
                {
                    result.Add(
                        new Ball(
                            new MatrixCoords(this.random.Next(1, 10),
                            this.random.Next(1, 10)),
                            ball.Radius / 2,
                            new MatrixCoords(ball.Position.Row - 10, ball.Position.Col),
                            true));
                    result.Add(
                        new Ball(
                            new MatrixCoords(this.random.Next(1, 10),
                            this.random.Next(1, 10)),
                            ball.Radius / 2,
                            new MatrixCoords(ball.Position.Row + 10, ball.Position.Col),
                            true));
                    return result;
                }
            }

            result.Add(ball);
            return result;
        }

        private void NewBallPainter(IParticle ball)
        {
            var graphic = this.bouncer.CreateGraphics();
            var brush = new SolidBrush(Color.DarkRed); // draw new ball

            using (graphic)
            {
                graphic.FillEllipse(
                    brush,
                    ball.Position.Row - ball.Radius,
                    ball.Position.Col - ball.Radius,
                    2 * ball.Radius,
                    2 * ball.Radius);
            }
            brush.Dispose();
            graphic.Dispose();
        }

        public void TickUpdater()
        {
            var prodPart = new List<IParticle>();
            this.BackGroundCleaner();

            foreach (var ball in this.balls)
            {
                List<IParticle> newBalls = new List<IParticle>();

                newBalls.AddRange(this.UpdateBallPosition(ball));
                if (newBalls.Count == 2)
                {
                    
                    foreach (var newBall in newBalls)
                    {
                        this.NewBallPainter(newBall);
                    }

                    this.SmallballCount += 2;
                    prodPart.AddRange(newBalls);
                    continue;
                }

                prodPart.AddRange(newBalls);
                this.NewBallPainter(ball);
            }

            this.balls.Clear();
            this.balls.AddRange(prodPart); 
        }
    }
}