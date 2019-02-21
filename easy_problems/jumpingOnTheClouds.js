// Emma is playing a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus.She can jump on any cumulus cloud having a number that is equal 
// to the number of the current cloud plus  or.She must avoid the thunderheads.
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.
// It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided.For example, indexed from.
// The number on each cloud is its index in the list so she must avoid the clouds at indexes  and.
// She could follow the following two paths: or.The first path takes jumps while the second takes.

function jumpingOnClouds(c) {
    let jumps = [];

    let i = 0;
    while (i < c.length) {
        let nextCloud = c[i + 1];
        let thirdNext = c[i + 2];

        if (thirdNext === 0) {
            jumps.push(i + 2);
            i = i + 2;
        } else if (nextCloud === 0) {
            jumps.push(i + 1)
            i = i + 1;
        } else {
            i += 1;
        }
    }
    return jumps.length;
}