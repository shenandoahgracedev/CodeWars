/*
Paul's Misery
by PG1

Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/

function paul(x){
  let arr = []
 for (i = 0; i < x.length; i++) {
    if (x[i] === 'life') {
      arr.push(0)
    } else if (x[i] === 'Petes kata') {
      arr.push(10)
    } else if (x[i] === 'eating') {
      arr.push(1)
    } else if (x[i] === 'kata') {
      arr.push(5)
    }
 }
  let total = 0
  if (arr.length > 0) {
    total = arr.reduce((a,b) => a + b)
  }
  return total < 40 ? 'Super happy!' : total < 70 ? 'Happy!' : total < 100 ? 'Sad!' : 'Miserable!'
}