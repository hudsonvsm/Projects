namespace BouncingBall
{
    using System;
    using System.ComponentModel;
    using System.Drawing;
    using System.Windows.Forms;
    partial class BallBouncer
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (components != null)
                {
                    components.Dispose();
                }
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code
        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.DropBall = new System.Windows.Forms.Button();
            this.SmallBalls = new System.Windows.Forms.Label();
            this.clock = new System.Windows.Forms.Timer(this.components);
            this.InitialBalls = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // DropBall
            // 
            this.DropBall.Location = new System.Drawing.Point(0, 0);
            this.DropBall.Name = "DropBall";
            this.DropBall.Size = new System.Drawing.Size(75, 23);
            this.DropBall.TabIndex = 0;
            this.DropBall.Text = "Drop Ball";
            this.DropBall.UseVisualStyleBackColor = true;
            this.DropBall.Click += new System.EventHandler(this.DropBall_Click);
            // 
            // SmallBalls
            // 
            this.SmallBalls.AutoSize = true;
            this.SmallBalls.Location = new System.Drawing.Point(337, 5);
            this.SmallBalls.Name = "SmallBalls";
            this.SmallBalls.Size = new System.Drawing.Size(82, 13);
            this.SmallBalls.TabIndex = 1;
            this.SmallBalls.Text = "Rebound Balls: ";
            // 
            // clock
            // 
            this.clock.Enabled = true;
            this.clock.Tick += new System.EventHandler(this.clock_Tick);
            // 
            // InitialBalls
            // 
            this.InitialBalls.AutoSize = true;
            this.InitialBalls.Location = new System.Drawing.Point(81, 5);
            this.InitialBalls.Name = "InitialBalls";
            this.InitialBalls.Size = new System.Drawing.Size(62, 13);
            this.InitialBalls.TabIndex = 2;
            this.InitialBalls.Text = "Initial Balls: ";
            // 
            // BallBouncer
            // 
            this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
            this.ClientSize = new System.Drawing.Size(456, 273);
            this.Controls.Add(this.InitialBalls);
            this.Controls.Add(this.SmallBalls);
            this.Controls.Add(this.DropBall);
            this.Name = "BallBouncer";
            this.Text = "Bouncing Ball";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button DropBall;
        private Label SmallBalls;
        private Timer clock;
        private Label InitialBalls;
    }
}

