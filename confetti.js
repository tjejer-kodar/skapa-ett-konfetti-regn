// This function picks the color of every confetti particle.
// It should return a string with a color or color code,
// like 'red' or 'rgb(255,0,0)'. Right now it only returns
// "gray" but if you write conditional statements you could
// give it either random colors or base the color on the
// groupName parameter.

const chooseParticleColor = (groupName) => {
  return "gray"
}

// This function is called to shoot the confetti. The
// function that comes in as a parameter can be called
// multiple times to shoot confetti in different directions
// and from different positions.
const bang = (addConfettiParticles) => {

  // As mentioned, you can call this function 👇 multiple
  // times with different values for the parameters. Begin
  // with changing the values and see what happens!
  addConfettiParticles({
    groupName: 'gray',  // Name of the group
    particleAmount: 1,  // Amount of confetti particles
    xPosition: 50,      // Position in percentage of the screen's width, 0 is to the far left, 100 to the far right
    yPosition: 50,      // Position in percentage of the screen's height, 0 is to the far bottom, 100 to the far top
    xVelocity: 0,       // Horizontal velocity, negative values goes to the left and positive values to the right
    yVelocity: 2,       // Vertical velocity, negative values goes down, positive values goes up
    xSpread: 80,        // Random spread on the particle's horizontal velocity
    ySpread: 20         // Random spread on the particle's vertical velocity
  })
}

export {
  chooseParticleColor,
  bang
}